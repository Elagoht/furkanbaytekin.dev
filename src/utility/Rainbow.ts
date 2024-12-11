import path from "path"
import { CSSProperties } from "react"
import sharp from "sharp"
import fs from "fs"

class Rainbow {
  private image: string

  constructor(image: string) {
    this.image = image
  }

  getDominantColor = async (): Promise<CSSProperties["backgroundColor"]> => {
    const imagePath = path.join(process.cwd(), "public", this.image)
    const buffer = await sharp(fs.readFileSync(
      imagePath
    )).resize(1, 1)
      .png()
      .toBuffer()

    const { data } = await sharp(buffer)
      .raw()
      .toBuffer({ resolveWithObject: true })

    const [r, g, b] = data

    return `rgb(${r}, ${g}, ${b})`
  }

  getColorPalette = async (
    paletteSize: number = 5
  ): Promise<CSSProperties["backgroundColor"][]> => {
    const imagePath = path.join(process.cwd(), "public", this.image)

    const buffer = await sharp(fs.readFileSync(
      imagePath
    )).resize(10, 10)
      .png()
      .toBuffer()

    const { data, info } = await sharp(buffer)
      .raw()
      .toBuffer({ resolveWithObject: true })

    const colors: string[] = []
    const step = Math.floor((info.width * info.height) / paletteSize)

    new Array(paletteSize).fill(0).forEach((_, count) => {
      const index = count * step * 3
      const r = data[index]
      const g = data[index + 1]
      const b = data[index + 2]

      if ([r, g, b].some((color) =>
        color === undefined)
      ) return

      colors.push(`rgb(${r}, ${g}, ${b})`)
    })

    return colors
  }

  getComplementaryColor = async (): Promise<CSSProperties["backgroundColor"]> => {
    const imagePath = path.join(process.cwd(), "public", this.image)
    const buffer = await sharp(fs.readFileSync(
      imagePath
    )).resize(1, 1)
      .png()
      .toBuffer()

    const { data } = await sharp(buffer)
      .raw()
      .toBuffer({ resolveWithObject: true })

    const [r, g, b] = data

    const complementaryR = 255 - r
    const complementaryG = 255 - g
    const complementaryB = 255 - b

    return `rgb(${complementaryR}, ${complementaryG}, ${complementaryB})`
  }

  getContrastColor = async (): Promise<CSSProperties["backgroundColor"]> => {
    const dominantColor = await this.getDominantColor()
    if (!dominantColor) throw new Error("Dominant color is undefined")

    const [r, g, b] = dominantColor
      .slice(4, -1)
      .split(", ")
      .map((value) => parseInt(value))

    // RGB'yi normalize et
    const normalizedR = r / 255
    const normalizedG = g / 255
    const normalizedB = b / 255

    const luminance =
      0.2126 * normalizedR +
      0.7152 * normalizedG +
      0.0722 * normalizedB

    return luminance > 0.5 ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"
  }
}

export default Rainbow
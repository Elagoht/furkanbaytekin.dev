import Rainbow from "@/utility/Rainbow"
import { FC } from "react"
import StackItemClient from "./StackItemClient"

type StackItemProps = {
  tech: string
  description: string
}

const StackItem: FC<StackItemProps> = async ({
  tech, description
}) => {
  const filePath = `/assets/icons/stack/${tech
    .toLowerCase()
    .replace(/[^a-z1-9]/g, "")
    }.svg`

  const rainbow = new Rainbow(filePath)
  const dominantColor = await rainbow.getDominantColor()
  const palette = await rainbow.getColorPalette()
  const contrast = await rainbow.getContrastColor()

  return <StackItemClient
    tech={tech}
    palette={palette}
    filePath={filePath}
    contrast={contrast}
    description={description}
    dominantColor={dominantColor}
  />
}

export default StackItem
"use client"

import Image from "next/image"
import { FC, useEffect, useRef } from "react"

type StackItemClientProps = {
  tech: string
  description: string
  dominantColor: string
  palette: string[]
  contrast: string
  filePath: string
}

const StackItemClient: FC<StackItemClientProps> = ({
  tech, description, dominantColor, palette, contrast, filePath
}) => {
  const selfReference = useRef<HTMLDivElement>(null)
  const glyphReference = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = selfReference.current
    const glyph = glyphReference.current
    if (!node || !glyph) return

    const handleMouseMove = (event: MouseEvent) => {
      const { top, left } = node.getBoundingClientRect()
      const nodeX = left + node.offsetWidth / 2
      const nodeY = top + node.offsetHeight / 2
      const globalMouseX = event.clientX
      const globalMouseY = event.clientY

      const diffX = (nodeY - globalMouseY) / -5
      const diffY = (globalMouseX - nodeX) / -10

      node.style.transform = `rotateX(${diffX}deg) rotateY(${diffY}deg)`
      node.style.filter = `brightness(${1 + diffX / 50
        }) blur(${Math.abs(diffY / 20)
        }px)`

      glyph.style.transform = `translateX(${diffY
        }px) translateY(${diffX
        }px) rotate(-12deg)`
    }

    const handleMouseLeave = () => {
      node.style.transform = "rotateX(0) rotateY(0)"
      node.style.filter = "brightness(1)"
      glyph.style.transform = "translateX(0) translateY(0) rotate(-12deg)"
    }

    node.addEventListener("mousemove", handleMouseMove)
    node.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      node.removeEventListener("mousemove", handleMouseMove)
      node.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return <li
    className="list-none h-full block"
    style={{ perspective: "1000px" }}
  >
    <div
      key={tech}
      ref={selfReference}
      className="flex flex-col items-center m-0 p-2 rounded-lg
      shadow relative text-center transition-all duration-300
      hover:transition-none h-full"
      style={{
        backgroundColor: dominantColor
          .replace(")", ", 0.6)")
          .replace("rgb", "rgba")
      }}
    >
      <div className="inset-0 top-1/2 absolute overflow-clip rounded-b-lg">
        <div
          ref={glyphReference}
          className="bg-gradient-to-t from-neutral-200 to-neutral-100 absolute
          -left-full -right-full -bottom-12 top-1/2 opacity-20 -rotate-12"
        />
      </div>

      <figure
        className="bg-white p-2 m-0 -mb-4 -translate-y-6
        shrink-0 rounded-lg aspect-square grid place-items-center
        w-20 h-20 relative shadow border-2"
        style={{
          borderColor: palette[0]
        }}
      >
        <Image
          alt={tech}
          src={filePath}
          width={64}
          height={64}
          className="m-0 aspect-square object-contain rounded"
        />
      </figure>

      <strong
        className="relative text-xl font-bold"
        style={{
          color: contrast
        }}
      >
        {tech}
      </strong>

      <em
        className="line-clamp-2 relative w-full"
        style={{
          color: contrast
        }}
      >
        {description}
      </em>
    </div>
  </li>
}

export default StackItemClient
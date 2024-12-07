import Image from "next/image"
import { FC } from "react"



type ProjectLanguageIconProps = {
  language: string
}

const ProjectLanguageIcon: FC<ProjectLanguageIconProps> = ({
  language: icon
}) =>
  <Image
    width={24}
    height={24}
    className="shrink-0 w-6 h-6 object-contain"
    src={`/assets/icons/languages/${iconMap[icon.toLowerCase() as keyof typeof iconMap]}`}
    alt={icon}
  />

export default ProjectLanguageIcon

const iconMap = {
  awk: "awk.svg",
  shell: "bash.svg",
  c: "c.svg",
  "c#": "csharp.svg",
  css: "css.svg",
  html: "html.svg",
  javascript: "javascript.svg",
  lua: "lua.svg",
  mdx: "mdx.svg",
  pug: "pug.svg",
  python: "python.svg",
  rust: "rust.svg",
  typescript: "typescript.svg",
  "vim script": "vim.svg"
}
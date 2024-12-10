import dictionary from "@/lang"
import {
  IconAt, IconBook, IconBook2, IconBrandGit,
  IconContract, IconHome, IconMusic
} from "@tabler/icons-react"
import { ReactElement } from "react"

export const navbarItems: Array<{
  key: keyof typeof dictionary.header.navbar
  icon: ReactElement
  href: string
  special?: boolean
}> = [{
  key: "home",
  icon: <IconHome size={24} />,
  href: "/"
}, {
  key: "blogs",
  icon: <IconContract size={24} />,
  href: "/blogs"
}, {
  key: "myBook",
  icon: <IconBook2 size={24} />,
  href: "/my-book",
  special: true
}, {
  key: "whatIListen",
  icon: <IconMusic size={24} />,
  href: "/what-i-listen"
}, {
  key: "whatIRead",
  icon: <IconBook size={24} />,
  href: "/what-i-read"
}, {
  key: "projects",
  icon: <IconBrandGit size={24} />,
  href: "/projects"
}, {
  key: "contact",
  icon: <IconAt size={24} />,
  href: "/contact"
}]
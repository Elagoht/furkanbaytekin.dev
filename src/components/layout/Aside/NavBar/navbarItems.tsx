import dictionary from "@/lang"
import {
  IconAt,
  IconBook2, IconBrandGit,
  IconContract, IconHome
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
  key: "projects",
  icon: <IconBrandGit size={24} />,
  href: "/projects"
}, {
  key: "contact",
  icon: <IconAt size={24} />,
  href: "/contact"
}]
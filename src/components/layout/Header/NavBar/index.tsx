import { IconBook2, IconCode, IconWritingSign } from "@tabler/icons-react"
import { FC } from "react"
import NavBarLink from "./NavBarLink"

const NavBar: FC = () => {
  return <nav className="flex items-center justify-between">
    {menuItems.map((item, index) =>
      <NavBarLink
        key={index}
        {...item}
      />
    )}
  </nav>
}

const menuItems = [{
  title: "Blogs",
  href: "/blogs",
  icon: <IconWritingSign title="Blogs" />
}, {
  title: "Projects",
  href: "/projects",
  icon: <IconCode title="Projects" />
}, {
  title: "My Book",
  href: "/book",
  icon: <IconBook2 title="My Book" />
}]


export default NavBar
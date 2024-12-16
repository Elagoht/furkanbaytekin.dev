import { IconBook2, IconCode, IconWritingSign } from "@tabler/icons-react"
import { FC } from "react"
import NavBarLink from "./NavBarLink"

const NavBar: FC = () => {
  return <nav className="flex items-center justify-between">
    <ul className="flex items-center">
      {menuItems.map((item, index) =>
        <NavBarLink
          key={index}
          {...item}
        />
      )}
    </ul>
  </nav>
}

const menuItems = [{
  title: "Blogs",
  href: "/blogs",
  icon: <IconWritingSign />
}, {
  title: "Projects",
  href: "/projects",
  icon: <IconCode />
}, {
  title: "My Book",
  href: "/book",
  icon: <IconBook2 />
}]


export default NavBar
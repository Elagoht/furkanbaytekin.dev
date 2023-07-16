import { Github, Linkedin, Youtube } from "lucide-react";
import NavBarItem from "./NavBarItem"
import { FC } from "react";

const SocialBar: FC = () => {

  return <nav id="nav-social-header">
    <NavBarItem external url={"https://linkedin.com/in/furkan-baytekin"}>
      <Linkedin strokeWidth={1.5} />
    </NavBarItem>
    <NavBarItem external url={"https://github.com/Elagoht"}>
      <Github strokeWidth={1.5} />
    </NavBarItem>
    <NavBarItem external url={"https://youtube.com/@herkesicinlinux"}>
      <Youtube strokeWidth={1.5} />
    </NavBarItem>
  </nav>
}
export default SocialBar
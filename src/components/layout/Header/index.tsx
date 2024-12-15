import { FC } from "react"
import HeaderLogo from "./HeaderLogo"
import NavBar from "./NavBar"

const Header: FC = () => {
  return <header className="fixed top-0 left-0 right-0 z-20
  bg-fedora-50 dark:bg-fedora-950 h-20 px-2"
  >
    <div className="max-w-screen-lg mx-auto
      flex items-center justify-between"
    >
      <HeaderLogo />

      <NavBar />
    </div>
  </header>
}

export default Header
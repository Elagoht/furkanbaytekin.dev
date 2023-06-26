import NavBar from './NavBar'

import SocialBar from './SocialBar'
import { Link, Outlet } from "react-router-dom"

export default function Header() {
  return <>
    <header>
      <div className="container px-2 flex justify-between items-center">
        <Link to="/" className="font-title font-bold text-3xl h-20 flex items-center px-4">
          Furkan Baytekin
        </Link>
        <div className="flex">
          <NavBar />
          <SocialBar />
        </div>
      </div>
    </header>
    <Outlet />
  </>
}

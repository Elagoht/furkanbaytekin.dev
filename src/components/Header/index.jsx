import NavBar from './NavBar'
import SocialBar from './SocialBar'
import { Link } from "react-router-dom"
import classNames from 'classnames'
import { useMenu } from '../../contexts/MenuContext'
import { useCallback, useEffect } from 'react'

export default function Header() {

  const { menu, setMenu } = useMenu()

  useEffect(() => {
    // Check for window resize and manage menu visibility
    let minimized = true
    window.addEventListener("resize", (event) => {
      if (event.target.innerWidth < 768) {
        if (!minimized) {
          setMenu(false)
        }
        minimized = true
      } else {
        minimized = false
        setMenu(true)
      }
    })
    window.addEventListener("orientationchange", () => {
      setMenu(false)
    })

    // Initialize menu visibility
    setMenu(window.innerWidth > 768)

  }, [])

  return <header>
    <div className="container px-2 flex justify-between items-center">
      <div className="flex">
        <button onClick={() => setMenu(prev => !prev)} className="md:hidden">
          <div className={classNames("origin-top-left", { "rotate-45 translate-y-[-3px] translate-x-2": menu })}></div>
          <div className={classNames({ "opacity-0": menu })}></div>
          <div className={classNames("origin-bottom-left", { "-rotate-45 translate-y-[3px] translate-x-2": menu })}></div>
        </button>
        <Link onClick={() => setMenu(false)} to="/" className="font-title font-bold text-3xl max-[360px]:text-2xl h-20 flex items-center px-4">
          Furkan Baytekin
        </Link>
      </div>
      <div id="navbar-con" onClick={() => setMenu(false)} className={menu ? "" : "max-md:!-left-full max-md:opacity-0"}>
        <NavBar />
        <SocialBar />
      </div>
    </div>
  </header>
}

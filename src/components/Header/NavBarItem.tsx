import { NavLink } from 'react-router-dom'
import { IChildrenComponent } from '../../types'
import { FC } from 'react'

interface NavBarItemProps extends IChildrenComponent {
  url: string
  external?: boolean
}

const NavBarItem: FC<NavBarItemProps> = ({ children, url, external }) => {

  return <NavLink className={({ isActive }) => isActive ? "text-orange-400 hover:text-orange-300" : ""}
    target={external ? "_blank" : undefined}
    rel={external ? "noreferrer" : undefined}
    to={url}
  >
    {children}
  </NavLink>
}

export default NavBarItem
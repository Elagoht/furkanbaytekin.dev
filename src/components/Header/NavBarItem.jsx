import { NavLink } from 'react-router-dom'

export default function NavBarItem({ children, url, external }) {

  return <NavLink className={({ isActive }) => isActive ? "text-orange-400 hover:text-orange-300" : ""}
    target={external ? "_blank" : undefined}
    rel={external ? "noreferrer" : undefined}
    to={url}
  >
    {children}
  </NavLink>
}

import { NavLink } from 'react-router-dom'

export default function NavBarItem({ children, url, external }) {
  return <NavLink
    target={external ? "_blank" : undefined}
    rel={external ? "noreferrer" : undefined}
    to={url}
  >
    {children}
  </NavLink>
}

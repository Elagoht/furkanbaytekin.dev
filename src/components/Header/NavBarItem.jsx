import React from 'react'

export default function NavBarItem({ children, url, external }) {
  return <a
    target={external ? "_blank" : undefined}
    rel={external ? "noreferrer" : undefined}
    href={(external ? "" : "#") + url}
  >
    {children}
  </a>
}

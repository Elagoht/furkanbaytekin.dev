import Link from "next/link"
import { FC, ReactElement } from "react"

type NavBarLinkProps = {
  title: string
  href: string
  icon: ReactElement
}

const NavBarLink: FC<NavBarLinkProps> = ({
  title, href, icon
}) => {
  return <Link
    href={href}
    className="font-mediums text-fedora-900 dark:text-fedora-100
    hover:text-pinky-500 h-20 px-4 flex items-center gap-2"
  >
    {icon}

    <span className="max-md:hidden">
      {title}
    </span>
  </Link>
}

export default NavBarLink
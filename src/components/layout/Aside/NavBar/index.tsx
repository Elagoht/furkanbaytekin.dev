"use client"

import { FC } from "react"
import { navbarItems } from "./navbarItems"
import Link from "next/link"
import dictionary from "@/lang"
import { usePathname } from "next/navigation"
import classNames from "classnames"
import { IconSparkles } from "@tabler/icons-react"

const NavBar: FC = () => {
  const pathname = usePathname()

  return <nav className="flex flex-col my-8 -mr-8">
    {navbarItems.map((item) =>
      <Link
        key={item.key}
        href={item.href}
        id={pathname === item.href
          ? "active-link"
          : undefined
        }
        className={classNames(
          "relative flex items-center gap-3 p-4 rounded-l-full", {
          "text-primary-500 dark:text-primary-400": pathname === item.href,
          "bg-neutral-50 dark:bg-neutral-900": pathname === item.href
        })}
      >
        {item.icon}

        {dictionary.header.navbar[item.key]}

        {item.special && <IconSparkles className="text-amber-500" />}
      </Link>
    )}
  </nav>
}

export default NavBar
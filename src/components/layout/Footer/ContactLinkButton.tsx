import classNames from "classnames"
import Link from "next/link"
import { FC, ReactElement } from "react"

export type ContactLinkProps = {
  title: string
  href: string
  icon: ReactElement
  className: string
}

const ContactLink: FC<ContactLinkProps> = ({
  title, href, className, icon
}) =>
  <li>
    <Link
      href={href}
      className="flex items-center gap-4 hover:brightness-110
      text-fedora-500 dark:text-fedora-400"
    >
      <figure className={classNames(
        className
      )}>
        {icon}
      </figure>

      <span className="font-medium">
        {title}
      </span>
    </Link>
  </li>

export default ContactLink
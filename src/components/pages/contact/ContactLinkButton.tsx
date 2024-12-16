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
      className="flex items-center gap-4 hover:brightness-110"
    >
      <figure className={classNames(
        className,
        "border-2 p-2 rounded-full",
        "border-neutral-800 dark:border-neutral-200"
      )}>
        {icon}
      </figure>

      <span className="text-lg font-semibold">
        {title}
      </span>
    </Link>
  </li>

export default ContactLink
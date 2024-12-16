import { FC } from "react"
import ContactLink, { ContactLinkProps } from "./ContactLinkButton"

type ContactLinksProps = {
  title: string
  items: ContactLinkProps[]
}

const ContactLinks: FC<ContactLinksProps> = ({
  title, items
}) => {
  return <section>
    <h2 className="text-xl font-semibold mb-4 text-fedora-700 dark:text-fedora-300">
      {title}
    </h2>

    <ul className="flex flex-col items-start gap-4">
      {items.map((item, index) =>
        <ContactLink
          key={index}
          {...item}
        />
      )}
    </ul>
  </section>
}

export default ContactLinks
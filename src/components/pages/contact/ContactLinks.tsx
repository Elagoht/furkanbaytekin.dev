import { FC } from "react"
import ContactLink, { ContactLinkProps } from "./ContactLinkButton"

type ContactLinksProps = {
  title: string
  items: ContactLinkProps[]
}

const ContactLinks: FC<ContactLinksProps> = ({
  title, items
}) => {
  return <section className="my-8">
    <h2 className="text-2xl font-semibold mt-12">
      {title}
    </h2>

    <ul className="flex flex-col items-start gap-4 my-4">
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
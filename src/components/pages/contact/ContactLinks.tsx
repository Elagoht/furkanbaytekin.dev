import { FC } from "react"
import ContactLink, { ContactLinkProps } from "./ContactLinkButton"
import Content from "@/components/layout/Content"

type ContactLinksProps = {
  title: string
  items: ContactLinkProps[]
}

const ContactLinks: FC<ContactLinksProps> = ({
  title, items
}) => {
  return <Content as="div">
    <h2 className="text-2xl font-semibold mt-12 text-center">
      {title}
    </h2>

    <ul className="flex flex-col gap-4 my-4">
      {items.map((item, index) =>
        <ContactLink
          key={index}
          {...item}
        />
      )}
    </ul>
  </Content>
}

export default ContactLinks
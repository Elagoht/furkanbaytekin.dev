import Content from "@/components/layout/Content"
import Hero from "@/components/layout/Hero"
import ContactLinks from "@/components/pages/contact/ContactLinks"
import BluePrint from "@/utilities/BluePrint"
import Collection from "@/utilities/Collection"
import Dictate from "@/utilities/Dictionary"
import {
  IconBrandGithub, IconBrandLinkedin, IconBrandReddit,
  IconBrandTelegram, IconBrandX, IconMail
} from "@tabler/icons-react"

const ContactPage = () => {
  const dictionary = Dictate.en

  const blueprint = new BluePrint(dictionary).owner()

  return <>
    <Hero>
      <h1 className="text-4xl font-bold">
        {dictionary.pages.contact.title}
      </h1>

      <p className="text-lg mt-4">
        {dictionary.pages.contact.description}
      </p>
    </Hero>

    <Content blueprint={blueprint}>
      <ContactLinks
        title={dictionary.pages.contact.directMessage}
        items={[{
          title: "Telegram",
          href: "https://t.me/elagoht",
          icon: <IconBrandTelegram />,
          className: "bg-blue-500 text-white"
        }, {
          title: dictionary.pages.contact.email,
          href: "mailto:furkanbaytekin@gmail.com",
          icon: <IconMail />,
          className: "bg-red-500 text-white"
        }, {
          title: "LinkedIn",
          href: "https://www.linkedin.com/in/furkan-baytekin/",
          icon: <IconBrandLinkedin />,
          className: "bg-blue-500 text-white"
        }]}
      />

      <ContactLinks
        title={dictionary.pages.contact.socialMedia}
        items={[{
          title: "X",
          href: "https://x.com/furkanbytekin",
          icon: <IconBrandX />,
          className: "bg-black text-white"
        }, {
          title: "GitHub",
          href: "https://github.com/Elagoht",
          icon: <IconBrandGithub />,
          className: "bg-black text-white"
        }, {
          title: "Reddit",
          href: "https://www.reddit.com/user/Elagoht/",
          icon: <IconBrandReddit />,
          className: "bg-orange-500 text-white"
        }]}
      />
    </Content>
  </>
}

export const generateStaticParams = Collection.getCategorySlugs

export default ContactPage
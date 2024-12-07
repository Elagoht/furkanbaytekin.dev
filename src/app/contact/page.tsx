import Content from "@/components/layout/Content"
import ContactLinks from "@/components/pages/contact/ContactLinks"
import dictionary from "@/lang"
import {
  IconBrandGithub, IconBrandLinkedin, IconBrandReddit,
  IconBrandTelegram, IconBrandX, IconMail
} from "@tabler/icons-react"

const ContactPage = () => {
  return <Content
    title={dictionary.contact.title}
    description={dictionary.contact.description}
    className="h-full flex-col flex"
  >
    <div className="flex flex-wrap gap-x-64 justify-center
      max-w-screen-sm mx-auto grow items-center"
    >
      <ContactLinks
        title={dictionary.contact.directMessage}
        items={[{
          title: "Telegram",
          href: "https://t.me/elagoht",
          icon: <IconBrandTelegram />,
          className: "bg-blue-500 text-white"
        }, {
          title: dictionary.contact.email,
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
        title={dictionary.contact.socialMedia}
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
    </div>
  </Content>
}

export default ContactPage
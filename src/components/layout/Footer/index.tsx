import Dictate from "@/utilities/Dictionary"
import {
  IconBrandGithub, IconBrandLinkedin, IconBrandReddit,
  IconBrandSpotify, IconBrandTelegram, IconBrandX,
  IconBrandYoutube, IconMail
} from "@tabler/icons-react"
import { FC } from "react"
import ContactLinks from "./ContactLinks"
import Container from "../Container"

const Footer: FC = () => {
  const dictionary = Dictate.en

  const linkLists = [{
    title: dictionary.pages.contact.directMessage,
    items: [{
      title: "Telegram",
      href: "https://t.me/elagoht",
      icon: <IconBrandTelegram />,
      className: "text-blue-500"
    }, {
      title: dictionary.pages.contact.email,
      href: "mailto:furkanbaytekin@gmail.com",
      icon: <IconMail />,
      className: "text-red-500"
    }, {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/furkan-baytekin/",
      icon: <IconBrandLinkedin />,
      className: "text-blue-500"
    }],
  }, {
    title: dictionary.pages.contact.socialMedia,
    items: [{
      title: "X",
      href: "https://x.com/furkanbytekin",
      icon: <IconBrandX />,
      className: "text-black dark:text-white"
    }, {
      title: "Reddit",
      href: "https://www.reddit.com/user/Elagoht/",
      icon: <IconBrandReddit />,
      className: "text-orange-500"
    }, {
      title: "Spotify",
      href: "https://open.spotify.com/user/Elagoht",
      icon: <IconBrandSpotify />,
      className: "text-green-500"
    }]
  }, {
    title: dictionary.pages.contact.productive,
    items: [{
      title: "YouTube",
      href: "https://youtube.com/@herkesicinlinux",
      icon: <IconBrandYoutube />,
      className: "text-red-500"
    }, {
      title: "GitHub",
      href: "https://github.com/Elagoht",
      icon: <IconBrandGithub />,
      className: "text-black dark:text-white"
    }]
  }]

  return <footer className="bg-fedora-50 dark:bg-fedora-950 p-4">
    <Container className="flex sm:justify-around flex-wrap gap-x-24 gap-y-12
      text-center"
    >
      {linkLists.map((list, index) => <ContactLinks
        key={index}
        title={list.title}
        items={list.items}
      />)}
    </Container>
  </footer>
}

export default Footer
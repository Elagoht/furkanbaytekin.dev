import Dictate from "@/utilities/Dictionary"
import {
  IconBrandGithub, IconBrandLinkedin, IconBrandReddit,
  IconBrandSpotify, IconBrandTelegram, IconBrandX,
  IconBrandYoutube, IconMail, IconRss
} from "@tabler/icons-react"
import { FC } from "react"
import ContactLinks from "./ContactLinks"
import Container from "../Container"
import Message from "@/utilities/Message"

const Footer: FC = () => {
  const dictionary = Dictate.en
  const links = getLinks(dictionary)

  return <footer className="bg-fedora-50 dark:bg-fedora-950 p-2">
    <Container className="flex sm:justify-around flex-wrap
      gap-x-24 gap-y-12 text-center"
    >
      {links.map((list, index) => <ContactLinks
        key={index}
        title={list.title}
        items={list.items}
      />)}
    </Container>

    <Container className="text-center text-sm
      text-fedora-400 dark:text-fedora-600"
    >
      <p>
        {Message.format(dictionary.footer.copyleft, {
          year: new Date().getFullYear()
        })}
      </p>
    </Container>
  </footer>
}

const getLinks = (dictionary: Dictionary) => [{
  title: dictionary.footer.directMessage,
  items: [{
    title: "Telegram",
    href: "https://t.me/elagoht",
    icon: <IconBrandTelegram />,
    className: "text-blue-500"
  }, {
    title: dictionary.footer.email,
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
  title: dictionary.footer.socialMedia,
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
  title: dictionary.footer.productive,
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
  }, {
    title: "RSS",
    href: "/rss.xml",
    icon: <IconRss />,
    className: "text-orange-500"
  }]
}]

export default Footer
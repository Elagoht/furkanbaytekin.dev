import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import Section from "../../components/Section";
import Contact from "./Contact";

export default function Contacts() {
  return <Section id="contacts" className="!py-0">
    <div className="container !max-w-screen-lg min-h-screen flex items-center justify-between max-lg:justify-center max-lg:gap-8 max-lg:flex-col-reverse pt-40 pb-20">
      <div className="content-container">
        <div className="flex-1">
          <div className="text-6xl font-title mb-8">
            Contacts.
          </div>
          <h1>Keep in touch with me!</h1>
          <p>
            Feel free to message me. I would be appreciate
            especially for messages about open source
            contributions.
          </p>
        </div>
        <div className="flex flex-wrap flex-1 justify-center-center">
          <Contact color="#2484ca" icon={<Linkedin />} url={"https://linkedin.com/in/furkanbaytekin"}>
            LinkedIn
          </Contact>
          <Contact color="#24292f" icon={<Github />} url={"https://linkedin.com/in/furkanbaytekin"}>
            Github
          </Contact>
          <Contact color="#ff4d3d" icon={<Mail />} url={"https://linkedin.com/in/furkanbaytekin"}>
            E-mail
          </Contact>
          <Contact color="#1b9cdc" icon={<MessageSquare />} url={"https://t.me/Elagoht"}>
            Telegram
          </Contact>
        </div>
      </div>
    </div>
  </Section >
}

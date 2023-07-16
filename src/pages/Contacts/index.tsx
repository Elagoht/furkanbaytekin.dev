import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import Section from "../../components/Section";
import Contact from "./Contact";
import { FC } from "react";
import { motion } from "framer-motion";
import { animContainer, animPosition } from "../../animations";

const Contacts: FC = () => {

  return <Section id="contacts" className="!py-0">
    <div className="container !max-w-screen-lg min-h-screen flex items-center justify-between max-lg:justify-center max-lg:gap-8 max-lg:flex-col-reverse pt-40 pb-20">
      <div className="content-container flex-col max-w-2xl mx-auto">
        <motion.div
          className="flex-1"
          initial="hidden"
          animate="visible"
          variants={animContainer()}
        >
          <motion.div variants={animPosition()} className="text-6xl font-title mb-8">
            Contacts.
          </motion.div>
          <motion.h1 variants={animPosition()}>Keep in touch with me!</motion.h1>
          <motion.p variants={animPosition()}>
            Feel free to message me. I would be appreciate
            especially for messages about open source
            contributions.
          </motion.p>
        </motion.div>
        <motion.div
          className="flex flex-wrap flex-1 gap-4 justify-around"
          initial="hidden"
          animate="visible"
          variants={animPosition()}
        >
          <Contact color="#2484ca" icon={<Linkedin />} url={"https://linkedin.com/in/furkan-baytekin"}>
            LinkedIn
          </Contact>
          <Contact color="#24292f" icon={<Github />} url={"https://github.com/Elagoht"}>
            Github
          </Contact>
          <Contact color="#ff4d3d" icon={<Mail />} url={"mailto:furkanbaytekin@gmail.com"}>
            E-mail
          </Contact>
          <Contact color="#1b9cdc" icon={<MessageSquare />} url={"https://t.me/Elagoht"}>
            Telegram
          </Contact>
        </motion.div>
      </div>
    </div>
  </Section >
}

export default Contacts
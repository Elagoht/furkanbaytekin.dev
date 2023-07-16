import Section from "../../components/Section";
import TechStack from "./TechStack";
import WhoAmI from "./WhoAmI";
import WhatIDo from "./WhatIDo";
import GetCV from "./GetCV";
import { FC } from "react";
import { motion } from "framer-motion";
import { animContainer } from "../../animations";

const About: FC = () => {

  return <Section>
    <div className="container">
      <div className="text-6xl font-title mb-8">
        About.
      </div>
      <div className="flex flex-col">
        <div className="content-container">
          <motion.div
            className="flex gap-16 flex-col"
            initial="hidden"
            animate="visible"
            variants={animContainer}
          >
            <div className="flex max-md:flex-col gap-16">
              <WhoAmI />
              <WhatIDo />
            </div>
            <GetCV />
            <TechStack />
          </motion.div>
        </div>
      </div>
    </div>
  </Section>
}

export default About
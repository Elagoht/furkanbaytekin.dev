import Section from "../../components/Section";
import TechStack from "./TechStack";
import WhoAmI from "./WhoAmI";
import WhatIDo from "./WhatIDo";

export default function About() {
  return <Section id="about">
    <div className="container">
      <div className="text-6xl font-title mb-8">
        About.
      </div>
      <div className="flex flex-col">
        <div className="content-container">
          <div className="flex gap-16 flex-col">
            <div className="flex max-md:flex-col gap-16">
              <WhoAmI />
              <WhatIDo />
            </div>
            <TechStack />
          </div>
        </div>
      </div>
    </div>
  </Section>
}

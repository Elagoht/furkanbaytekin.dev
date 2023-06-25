import Section from "../../components/Section";
import Languages from "./Languages";
import TechStack from "./TechStack";
import WhoAmI from "./WhoAmI";

export default function About() {
  return <Section id="about">
    <div className="container">
      <div className="text-6xl font-title">
        About.
      </div>
      <div className="flex flex-col gap-16">
        <div className="project-container !gap-16">
          <WhoAmI />
          <div className="flex flex-col gap-8">
            <TechStack />
            <Languages />
          </div>
        </div>
      </div>
    </div>
  </Section>
}

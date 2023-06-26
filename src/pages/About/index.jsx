import Section from "../../components/Section";
import Languages from "./Languages";
import TechStack from "./TechStack";

export default function About() {
  return <Section id="about">
    <div className="container">
      <div className="text-6xl font-title mb-8">
        About.
      </div>
      <div className="flex flex-col gap-16">
        <div className="content-container !gap-16">
          <div className="flex flex-col gap-8">
            <Languages />
            <TechStack />
          </div>
        </div>
      </div>
    </div>
  </Section>
}

import Section from "../../components/Section";
import Picture from "./Picture";
import Texts from "./Texts";

export default function Welcome() {
  return <Section id="welcome" className="py-0">
    <div className="container !max-w-screen-lg min-h-screen flex items-center justify-between max-lg:justify-center max-lg:gap-8 max-lg:flex-col-reverse pt-40 pb-20">
      <Texts />
      <Picture />
    </div>
  </Section>
}

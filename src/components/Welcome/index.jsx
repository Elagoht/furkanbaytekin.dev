import Picture from "./Picture";
import Texts from "./Texts";

export default function Welcome() {
  return <section id="welcome" className="p-0">
    <div className="container min-h-screen flex items-center justify-between max-lg:justify-center max-lg:gap-8 max-lg:flex-col-reverse pt-16 p-16">
      <Texts />
      <Picture />
    </div>
  </section>
}

import Project from "./Project";
import img_new_tab from "../../assets/projects/react_new_tab.png"
import img_endeavour_os_tweaker from "../../assets/projects/endeavour_os_tweaker.png"
import img_terminal_portfolio from "../../assets/projects/terminal_portfolio.png"
import img_album_advertisement_site from "../../assets/projects/album_advertisement_site.png"
import img_pug_cv from "../../assets/projects/pug_cv.png"
import img_black_blog from "../../assets/projects/black_blog.png"
import img_sudo_mice from "../../assets/projects/sudo_mice.png"
import { Gamepad, Github, Presentation, Store } from "lucide-react";
import Section from "../../components/Section";

export default function Portfolio() {
  return <Section id="portfolio">
    <div className="container">
      <div className="text-6xl font-title mb-12">
        Portfolio.
      </div>
      <div className="flex flex-col gap-16">

        <Project img={img_endeavour_os_tweaker}>
          <h1>Make Endeavour OS Great</h1>
          <p>Endeavour OS is already a great OS but It's a bit hard to start with. A new Linux user cannot use it properly...</p>
          <p>...without this program.</p>
          <p>The main purpose of this app is installing necessary apps and tweaking lots of configuration. Written in Python and ready to use on fresh installs.</p>
          <div className="flex gap-4 max-md:justify-center">
            <a className="button" target="_blank" rel="noreferrer" href="https://aur.archlinux.org/make-endeavouros-great.git">
              <Store className="inline" /> Use App
            </a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/MakeEndeavourOSGreat">
              <Github className="inline" /> Source Code
            </a>
          </div>
        </Project>

        <Project img={img_new_tab}>
          <h1>New Tab Page</h1>
          <p>Elegance, simple and effective new tab page. Written in React.js.</p>
          <p>A new image and a new splash text on every refresh!</p>
          <p>Can add new sites or delete existing ones and move their places. Site favicons get fetched automatically. All data stores in local storage.</p>
          <div className="flex gap-4 max-md:justify-center">
            <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.github.io/react-new-tab">
              <Presentation className="inline" /> See Demo
            </a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/react-new-tab">
              <Github className="inline" /> Source Code
            </a>
          </div>
        </Project>

        <Project img={img_terminal_portfolio}>
          <h1>Retro Terminal Portfolio</h1>
          <p>Linux terminal shell, recreated, with web interface, to introduce me.</p>
          <p>Clean and comprehensible code background with pure vanilla javascript has used. Open source, so anyone can use to create its own.</p>
          <div className="flex gap-4 max-md:justify-center">
            <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.github.io/TerminalPortfolio">
              <Presentation className="inline" /> See Demo
            </a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/TerminalPortfolio">
              <Github className="inline" /> Source Code
            </a>
          </div>
        </Project>

        <Project img={img_album_advertisement_site}>
          <h1>Album Advertisement</h1>
          <p>Introduce your art to word. Link your platforms to the page. Make others reachable to your masterpiece. Create a showcase for your other albums.</p>
          <p>Open source project created with React.js, so anyone can produce its own showcase.</p>
          <div className="flex gap-4 max-md:justify-center">
            <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.github.io/AlbumAdvertisementSite">
              <Presentation className="inline" /> See Demo
            </a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/AlbumAdvertisementSite">
              <Github className="inline" /> Source Code
            </a>
          </div>
        </Project>

        <Project img={img_pug_cv}>
          <h1>Pug CV</h1>
          <p>Portfolio website that can be perfectly optimized for printing. Can easily obtain a PDF file from this page.</p>
          <p>Just fill the inline JSON data in pug files and build the site easily. Fully customisable.</p>
          <div className="flex gap-4 max-md:justify-center">
            <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.github.io/pugCV">
              <Presentation className="inline" /> See Demo
            </a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/pugCV">
              <Github className="inline" /> Source Code
            </a>
          </div>
        </Project>

        <Project img={img_black_blog}>
          <h1>Black Blog</h1>
          <p>Blog website with dark/light theme, font face/size settings. Created with PHP but then converted to vanilla HTML, CSS & JS.</p>
          <div className="flex gap-4 max-md:justify-center">
            <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.github.io/BlackBlog">
              <Presentation className="inline" /> See Demo
            </a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/BlackBlog">
              <Github className="inline" /> Source Code
            </a>
          </div>
        </Project>

        <Project img={img_sudo_mice}>
          <h1>Sudo Mice</h1>
          <p>Two player war battle game we control mice to write codes by jumping on keyboards to summon units to attack to against castle.</p>
          <p>Linux terminal and sudo command inspired game. Note that: sudo does not make your commands "stronger".</p>
          <div className="flex gap-4 max-md:justify-center">
            <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.itch.io/sudo-mice">
              <Gamepad className="inline" /> Play Game
            </a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/SudoMice">
              <Github className="inline" /> Main Page
            </a>
          </div>
        </Project>
      </div>
    </div>
  </Section>
}

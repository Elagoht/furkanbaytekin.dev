import Showcase from "../../components/ShowCase"
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

        <Showcase img={img_endeavour_os_tweaker}>
          <h1>Make Endeavour OS Great</h1>
          <p>Endeavour OS is already a great OS, but it can be a bit challenging for beginners. New Linux users may struggle to use it effectively...</p>
          <p>...without this program.</p>
          <p>The main purpose of this app is to install necessary applications and tweak various configurations. It is written in Python and is ready to use on fresh installations.</p>
          <div className="flex gap-4 max-md:justify-center">
            <a className="button" target="_blank" rel="noreferrer" href="https://aur.archlinux.org/make-endeavouros-great.git">
              <Store className="inline" /> Use App
            </a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/MakeEndeavourOSGreat">
              <Github className="inline" /> Source Code
            </a>
          </div>
        </Showcase>

        <Showcase img={img_new_tab}>
          <h1>New Tab Page</h1>
          <p>Elegance, simplicity, and effectiveness in a new tab page. Written in React.js.</p>
          <p>A new image and a new splash text on every refresh!</p>
          <p>You can add new sites, delete existing ones, and rearrange their positions. Site favicons are fetched automatically. All data is stored in local storage.</p>
          <div className="flex gap-4 max-md:justify-center">
            <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.github.io/react-new-tab">
              <Presentation className="inline" /> See Demo
            </a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/react-new-tab">
              <Github className="inline" /> Source Code
            </a>
          </div>
        </Showcase>

        <Showcase img={img_terminal_portfolio}>
          <h1>Retro Terminal Portfolio</h1>
          <p>A recreated Linux terminal shell with a web interface to introduce myself.</p>
          <p>Clean and comprehensible code background with pure vanilla JavaScript has been used. It is open source, so anyone can use it to create their own.</p>
          <div className="flex gap-4 max-md:justify-center">
            <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.github.io/TerminalPortfolio">
              <Presentation className="inline" /> See Demo
            </a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/TerminalPortfolio">
              <Github className="inline" /> Source Code
            </a>
          </div>
        </Showcase>

        <Showcase img={img_album_advertisement_site}>
          <h1>Album Advertisement</h1>
          <p>Introduce your art to the world. Link your platforms to the page. Make your masterpieces reachable to others. Create a showcase for your other albums.</p>
          <p>An open-source project created with React.js, so anyone can create their own showcase.</p>
          <div className="flex gap-4 max-md:justify-center">
            <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.github.io/AlbumAdvertisementSite">
              <Presentation className="inline" /> See Demo
            </a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/AlbumAdvertisementSite">
              <Github className="inline" /> Source Code
            </a>
          </div>
        </Showcase>

        <Showcase img={img_pug_cv}>
          <h1>Pug CV</h1>
          <p>A portfolio website that can be perfectly optimized for printing. You can easily obtain a PDF file from this page.</p>
          <p>Just fill in the inline JSON data in the Pug files and easily build the site. It is fully customizable.</p>
          <div className="flex gap-4 max-md:justify-center">
            <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.github.io/pugCV">
              <Presentation className="inline" /> See Demo
            </a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/pugCV">
              <Github className="inline" /> Source Code
            </a>
          </div>
        </Showcase>

        <Showcase img={img_black_blog}>
          <h1>Black Blog</h1>
          <p>A blog website with dark/light theme and font face/size settings. It was initially created with PHP but later converted to vanilla HTML, CSS, and JS.</p>
          <div className="flex gap-4 max-md:justify-center">
            <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.github.io/BlackBlog">
              <Presentation className="inline" /> See Demo
            </a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/BlackBlog">
              <Github className="inline" /> Source Code
            </a>
          </div>
        </Showcase>

        <Showcase img={img_sudo_mice}>
          <h1>Sudo Mice</h1>
          <p>A two-player war battle game where we control mice to write codes by jumping on keyboards to summon units and attack the enemy castle.</p>
          <p>A game inspired by Linux terminal and the sudo command. Note that: sudo does not make your commands "stronger".</p>
          <div className="flex gap-4 max-md:justify-center">
            <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.itch.io/sudo-mice">
              <Gamepad className="inline" /> Play Game
            </a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/SudoMice">
              <Github className="inline" /> Main Page
            </a>
          </div>
        </Showcase>
      </div>
    </div>
  </Section>
}

import Showcase from "../../components/ShowCase"
import img_herkesicinlinux from "../../assets/projects/herkesicinlinuxnet.webp"
import img_live_palette from "../../assets/projects/live_palette.webp"
import img_new_tab from "../../assets/projects/react_new_tab.webp"
import img_endeavour_os_tweaker from "../../assets/projects/endeavour_os_tweaker.webp"
import img_parallax_portfolio from "../../assets/projects/parallax_portfolio.webp"
import img_terminal_portfolio from "../../assets/projects/terminal_portfolio.webp"
import img_album_advertisement_site from "../../assets/projects/album_advertisement_site.webp"
import img_pug_cv from "../../assets/projects/pug_cv.webp"
import img_black_blog from "../../assets/projects/black_blog.webp"
import img_sudo_mice from "../../assets/projects/sudo_mice.webp"
import { Gamepad, Github, Globe, Presentation, Store } from "lucide-react";
import Section from "../../components/Section";
import { FC } from "react"
import { motion } from "framer-motion"
import { animContainer } from "../../animations"

const Portfolio: FC = () => {

  return <Section id="portfolio">
    <div className="container">
      <div className="text-6xl font-title mb-12">
        Portfolio.
      </div>
      <motion.div
        className="flex flex-col gap-16"
        initial="hidden"
        animate="visible"
        variants={animContainer()}
      >

        <Showcase img={img_herkesicinlinux}>
          <h1>Linux For Everyone Blog Site</h1>
          <p>I produce courses and educational videos about Linux in my Youtube channel named Linux for Everyone.</p>
          <p>But only videos is not enough to share my ideas and knowledge. So why not to publish more content as articles?</p>
          <p>Creating a blog site with Next.js was a ideal way to publish my articles. That's why I created one.</p>
          <div className="flex gap-4 max-md:justify-center">
            <a className="button" target="_blank" rel="noreferrer" href="https://herkesicinlinux.net">
              <Globe className="inline" /> Visit Website
            </a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/herkesicinlinux.net">
              <Github className="inline" /> Source Code
            </a>
          </div>
        </Showcase>

        <Showcase img={img_live_palette}>
          <h1>Live Palette</h1>
          <p>Sometimes designers may not be satisfied with the color palette they initially chose or created because it doesn't harmonize well with their website design.</p>
          <p>With Live Palette, designers can apply their color palette to a template website and instantly see how it looks in real-time. This live preview feature enables them to make immediate color changes and observe the results.</p>
          <p>Additionally, designers have the option to download the color palette as a card image for reference or further use.</p>
          <div className="flex gap-4 max-md:justify-center">
            <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.github.io/live-palette">
              <Presentation className="inline" /> See Demo
            </a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/live-palette">
              <Github className="inline" /> Source Code
            </a>
          </div>
        </Showcase>

        <Showcase img={img_new_tab}>
          <h1>New Tab Page</h1>
          <p>Experience elegance, simplicity, and effectiveness all in one place. Built with React.js, this new tab page offers a refreshing browsing experience.</p>
          <p>Enjoy a new image and captivating splash text with every refresh!</p>
          <p>Customize your browsing by adding new sites, deleting existing ones, and rearranging their positions. The site favicons are automatically fetched for your convenience. Rest assured, all your data is securely stored in local storage.</p>
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
          <p>If it looks easy to get inform about me by reading graphical interfaces, try this one. Write commands to know me.</p>
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

        <Showcase img={img_pug_cv}>
          <h1>Pug CV</h1>
          <p>A portfolio website that can be perfectly optimized for printing. With this website, you can effortlessly generate a PDF file of your portfolio directly from the page.</p>
          <p>Simply fill in the inline JSON data in the Pug files, and voila!</p>
          <div className="flex gap-4 max-md:justify-center">
            <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.github.io/pugCV">
              <Presentation className="inline" /> See Demo
            </a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/pugCV">
              <Github className="inline" /> Source Code
            </a>
          </div>
        </Showcase>

        <Showcase img={img_parallax_portfolio}>
          <h1>Parallax Portolio</h1>
          <p>Immerse yourself in the captivating world of parallax design with this stunning portfolio website. Watch as elements float at different speeds, creating a visually engaging and dynamic display of information about me or anything you desire.</p>
          <p>With the provided source code, you have the power to create your very own parallax portfolio.</p>
          <div className="flex gap-4 max-md:justify-center">
            <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.github.io/parallax-portfolio">
              <Presentation className="inline" /> See Demo
            </a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/parallax-portfolio">
              <Github className="inline" /> Source Code
            </a>
          </div>
        </Showcase>

        <Showcase img={img_album_advertisement_site}>
          <h1>Album Advertisement</h1>
          <p>Are you an artist looking to share your mesmerizing art with the world? Look no further! Our Album Advertisement is here to help you showcase your masterpieces and connect with your audience.</p>
          <p>This open-source project, built with React.js, provides a platform for artists like you to link your various platforms and make your art easily accessible to others. </p>
          <div className="flex gap-4 max-md:justify-center">
            <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.github.io/AlbumAdvertisementSite">
              <Presentation className="inline" /> See Demo
            </a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/AlbumAdvertisementSite">
              <Github className="inline" /> Source Code
            </a>
          </div>
        </Showcase>

        <Showcase img={img_black_blog}>
          <h1>Black Blog</h1>
          <p>Welcome to our blog website, a platform that caters to your reading preferences with its customizable features. This website offers both a dark and light theme, allowing you to immerse yourself in a visually pleasing environment that suits your mood and reading comfort.</p>
          <div className="flex gap-4 max-md:justify-center">
            <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.github.io/BlackBlog">
              <Presentation className="inline" /> See Demo
            </a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/BlackBlog">
              <Github className="inline" /> Source Code
            </a>
          </div>
        </Showcase>

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

        <Showcase img={img_sudo_mice}>
          <h1>Sudo Mice</h1>
          <p>Get ready for an epic two-player war battle game where you take control of fearless mice, using your coding skills to summon units and lead them into battle against your opponent's castle.</p>
          <p>In this unique and thrilling game, you'll navigate a battlefield resembling a Linux terminal, with keyboards scattered across the terrain. By jumping on these keyboards, you can unleash powerful commands to summon units and launch attacks on the enemy castle.</p>
          <div className="flex gap-4 max-md:justify-center">
            <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.itch.io/sudo-mice">
              <Gamepad className="inline" /> Play Game
            </a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/SudoMice">
              <Github className="inline" /> Main Page
            </a>
          </div>
        </Showcase>
      </motion.div>
    </div>
  </Section>
}

export default Portfolio
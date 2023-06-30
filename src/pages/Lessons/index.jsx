import { BookMarked, File, MonitorPlay } from "lucide-react";
import Section from "../../components/Section";
import Showcase from "../../components/ShowCase"
import img_vim_terminal_editor from "../../assets/lessons/vim_terminal_editor.png"
import img_linux_terminal from "../../assets/lessons/linux_terminal.jpg"
import img_markdown from "../../assets/lessons/markdown.jpg"
import Teacher from "./Teacher";

export default function Lessons() {
  return <Section id="lessons">
    <div className="container grid gap-16">

      <div className="text-6xl font-title">
        Lessons.
      </div>

      <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
        <Teacher />
        <article className="flex-1 text-center">
          <h2>Wait, wait, wait. I have something to teach you!</h2>
          <p>Do you know that my courses are free and open to everyone at all? Knowledge grows as it is shared.</p>
        </article>
      </div>

      <div className="flex flex-col gap-16">

        <Showcase img={img_vim_terminal_editor}>
          <h1>Vim Terminal Text Editor Course</h1>
          <p>
            Vim is a powerful terminal text editor (and better than nano) that offers various modes and numerous shortcuts.
            It is the best way to edit source code on remote servers and code on Android.
          </p>
          <p>
            I have created a worksheet and supported it with video narration, covering advanced usage, macros, window management, and terminal emulators.
          </p>

          <div className="flex gap-4 max-md:justify-center">
            <a
              className="button" target="_blank" rel="noreferrer"
              href="https://www.udemy.com/course/sifirdan-vim-ogrenin-terminal-metin-editoru/"
            >
              <BookMarked />Udemy
            </a>
            <a
              className="button" target="_blank" rel="noreferrer"
              href="https://www.youtube.com/watch?v=PIYaUPAD3ZY&list=PLGIvph8XiC3QS5d9dfotigUlKuDFx6-wV"
            >
              <MonitorPlay />YouTube
            </a>
            <a
              className="button" target="_blank" rel="noreferrer"
              href="https://www.youtube.com/watch?v=PIYaUPAD3ZY&list=PLGIvph8XiC3QS5d9dfotigUlKuDFx6-wV"
            >
              <File /> Resources
            </a>
          </div>
        </Showcase>

        <Showcase img={img_linux_terminal}>
          <h1>Linux Terminal Course</h1>
          <p>
            Terminal tools are the key to power on Linux. The course includes 76 different commands.
            Video recordings are still in progress, but the content follows a written resource created by me.
          </p>
          <p>
            Each command is explained in detail in separate videos.
          </p>

          <div className="flex gap-4 max-md:justify-center">
            <a
              className="button" target="_blank" rel="noreferrer"
              href="https://www.youtube.com/watch?v=49OO2gD-x8E&list=PLGIvph8XiC3Qze9JPrU4JrwKqBd7E1bah"
            >
              <MonitorPlay />YouTube
            </a>
            <a
              className="button" target="_blank" rel="noreferrer"
              href="https://www.youtube.com/watch?v=49OO2gD-x8E&list=PLGIvph8XiC3Qze9JPrU4JrwKqBd7E1bah"
            >
              <MonitorPlay /> Resources
            </a>
          </div>
        </Showcase>

        <Showcase img={img_markdown}>
          <h1>Markdown Course</h1>
          <p>
            Markdown is a simple, powerful, and easily understandable markup language. As developers, we often use it to write our README.md files.
          </p>
          <p>
            The course provides a markdown resource for teaching markdown, supported with video narration. It only lasts for 20 minutes!
          </p>


          <div className="flex gap-4 max-md:justify-center">
            <a
              className="button" target="_blank" rel="noreferrer"
              href="https://www.youtube.com/watch?v=uRM54l1bQrk&list=PLGIvph8XiC3Sh7g-ffQFtU2CX8DFp_lu7"
            >
              <MonitorPlay />YouTube
            </a>
            <a
              className="button" target="_blank" rel="noreferrer"
              href="https://github.com/Elagoht/30-dakikada-markdown-ogrenin"
            >
              <MonitorPlay /> Resources
            </a>
          </div>
        </Showcase>

      </div>
    </div>
  </Section>
}

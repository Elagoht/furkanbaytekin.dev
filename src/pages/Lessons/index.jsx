import { BookMarked, File, MonitorPlay } from "lucide-react";
import Section from "../../components/Section";
import Course from "../../components/Course"
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

      <div className="flex flex-col">
        <Course img={img_vim_terminal_editor} buttons={[{
          link: "https://www.udemy.com/course/sifirdan-vim-ogrenin-terminal-metin-editoru/",
          icon: <BookMarked />,
          text: "Udemy"
        }, {
          link: "https://www.youtube.com/watch?v=PIYaUPAD3ZY&list=PLGIvph8XiC3QS5d9dfotigUlKuDFx6-wV",
          icon: <MonitorPlay />,
          text: "YouTube"
        }, {
          link: "https://github.com/Elagoht/3-saatte-vim-ogrenin",
          icon: <File />,
          text: "Resources"
        }]}>
          <h1>Vim Terminal Text Editor Course</h1>
          <p>Vim is a powerful terminal text editor (and better than nano) that offers various modes and numerous shortcuts. It is the best way to edit source code on remote servers and code on Android.</p>
          <p>I have created a worksheet and supported it with video narration, covering advanced usage, macros, window management, and terminal emulators.</p>
        </Course>

        <Course alternate img={img_linux_terminal} buttons={[{
          link: "https://www.youtube.com/watch?v=49OO2gD-x8E&list=PLGIvph8XiC3Qze9JPrU4JrwKqBd7E1bah",
          icon: <MonitorPlay />,
          text: "YouTube"
        }]}>
          <h1>Linux Terminal Course</h1>
          <p>Terminal tools are the key to power on Linux. The course includes 76 different commands. Video recordings are still in progress, but the content follows a written resource created by me.</p>
          <p>Each command is explained in detail in separate videos.</p>
        </Course>

        <Course img={img_markdown} buttons={[{
          link: "https://www.youtube.com/watch?v=uRM54l1bQrk&list=PLGIvph8XiC3Sh7g-ffQFtU2CX8DFp_lu7",
          icon: <MonitorPlay />,
          text: "YouTube"
        }, {
          link: "https://github.com/Elagoht/30-dakikada-markdown-ogrenin",
          icon: <File />,
          text: "Resources"
        }]}>
          <h1>Markdown Course</h1>
          <p>Markdown is a simple, powerful, and easily understandable markup language. As developers, we often use it to write our README.md files.</p>
          <p>The course provides a markdown resource for teaching markdown, supported with video narration. It only lasts for 20 minutes!</p>
        </Course>
      </div>
    </div>
  </Section>
}

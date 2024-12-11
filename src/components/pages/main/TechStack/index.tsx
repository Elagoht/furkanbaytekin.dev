import Rainbow from "@/utility/Rainbow"
import Image from "next/image"
import { FC } from "react"

const TechStack: FC = () => <>
  <h2 className="mb-2">
    My Tech Stack Over the Years
  </h2>

  <blockquote>
    I usually ask recruiters which one is a Pokemon.
  </blockquote>

  <ul className="flex flex-col p-0 prose-base">
    {Object.entries(techStack).map(([year, techs]) =>
      <li
        key={year}
        className="flex flex-col gap-2 p-0"
      >
        <h3 className="m-0">{year}</h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
          gap-4 p-0"
        >
          {techs.map(async ([tech, description]) => {
            const filePath = `/assets/icons/stack/${tech
              .toLowerCase()
              .replace(/[^a-z1-9]/g, "")
              }.svg`

            const rainbow = new Rainbow(filePath)

            return <li
              key={tech}
              className="flex m-0 p-0 rounded-lg shadow"
              style={{
                backgroundColor: await rainbow.getDominantColor()
              }}
            >
              <figure className="bg-white p-2 m-0 shrink-0 rounded-l-lg
                aspect-square grid place-items-center w-20 h-20"
              >
                <Image
                  alt={tech}
                  src={filePath}
                  width={64}
                  height={64}
                  className="m-0 aspect-square object-contain rounded"
                />
              </figure>

              <div
                className="flex flex-col justify-start h-full
                leading-tight gap-1 p-2 w-full relative"
              >
                <div className="bg-gradient-to-t from-black to-transparent
                  absolute inset-0 opacity-20 rounded-r-lg"
                />

                <strong
                  className="relative"
                  style={{
                    color: (await rainbow.getContrastColor())
                  }}
                >
                  {tech}
                </strong>

                <em
                  className="line-clamp-2 relative"
                  style={{
                    color: (await rainbow.getContrastColor())
                  }}
                >{description}</em>
              </div>
            </li>
          })}
        </ul>
      </li>
    )}
  </ul>
</>

const techStack: Record<number, Array<[string, string]>> = {
  2012: [
    ["HTML", "Just wanted to make a website about Minecraft"],
    ["CSS", "Gained my expertise by making all kinds of mistakes!"]
  ],
  2013: [
    ["Game Maker", "First steps in game development, thank you Lindsey Stirling!"],
    ["GIMP", "Started with game assets"]
  ],
  2015: [
    ["JavaScript", "Began with a simple gallery, now we're here"]
  ],
  2017: [
    ["PHP", "Used once for my unpublished blog and never touched again"],
    ["MySQL", "Used for same blog, with every existing security vulnerability"]
  ],
  2018: [
    ["Python", "First steps in programming, wrote lots of UI and data analysis"],
    ["SQLite", "Used for simple databases in Python projects"]
  ],
  2019: [
    ["Qt5", "PyQt5 for desktop applications"],
    ["Game Maker Studio 2", "Game development for a dream project"]
  ],
  2020: [
    ["Vim", "My favorite editor since 2020, I even made a course about it"],
    ["Git", "I awared of the importance of version control"],
    ["AWK", "Most underrated tool in my opinion"]
  ],
  2021: [
    ["Bash", "Automating everything in a nutshell"],
    ["GNU Tools", "Coreutils, findutils, grep, sed, tr, and more"],
    ["Numpy", "Data analysis and scientific computing"],
    ["Pandas", "Data manipulation and analysis"],
    ["Matplotlib", "Data visualization used over students' data"],
    ["Seaborn", "Statistical data visualization"],
    ["Django", "Second try for my own blog, this time with Django"],
    ["Jinja2", "Favorite templating engine after React Server Components"],
    ["Kdenlive", "Video editing for my YouTube channel"],
    ["Inkscape", "Logo design and vector graphics for my channel"],
    ["Audacity", "Audio editing for my channel, also used for a theater show"],
    ["Node.js", "First steps in backend development"]
  ],
  2022: [
    ["R", "Used on an Erasmus+ project for data analysis"],
    ["React.js", "Made a teacher a frontend developer"],
    ["Vite.js", "Ditched Create React App for Vite"],
    ["Tailwind CSS", "Winner of my hate but my everyday tool"],
    ["Redux Toolkit", "The second worst state manager (after Context API)"],
    ["Framer Motion", "Still using for animations"],
    ["Express.js", "First backend project with Express"],
    ["Sass", "Used for a project, but I prefer vanilla CSS"],
    ["Pug", "Simple Pythonlike syntax for HTML"],
    ["Piplup", "First steps in pixel art"],
    ["Styled Components", "Hated it, but had to use it in a legacy project"],
    ["MongoDB", "Still prefer SQL, but used for a project"],
    ["Bootstrap 5", "I hate it, every site using it looks the same"],
    ["Godot", "Still trying to make a game"]
  ],
  2023: [
    ["Zustand", "The winner of state managers"],
    ["C#", "This language made me love static typing"],
    ["Xunit", "My first unit testing framework"],
    ["MS SQL Server", "Used for a project, but I prefer PostgreSQL"],
    ["PostgreSQL", "My favorite RDBMS"],
    ["Typescript", "If you're using \"any\", you're doing it wrong"],
    ["Next.js", "React is bad, Next.js is good"],
    ["Docker", "First steps in CI/CD, created a pipeline we still use"],
    ["AWS Amplify", "First steps in AWS"],
    ["AWS ECR", "Used for a company project"],
    ["AWS App Runner", "Used for a company project"],
    ["Github Workflow", "Mastered for automated binary releases"],
    ["Selenium", "Automated testing for a company project"],
    ["Lua", "Created Minetest mods"]
  ],
  2024: [
    ["Figma", "Designed dream project"],
    ["Strapi", "Ditched for self-built backend"],
    ["GraphQL", "Used multiple times, loving it but it uses too much boilerplate"],
    ["Nest.js", "First steps in real backend development"],
    ["Prisma", "First steps in ORM"],
    ["Tauri", "Still want to learn Rust"],
    ["Electron.js", "Used for a company project, but I prefer Tauri"],
    ["Flask", "Created an MVC project with web-components"],
    ["Web Components", "Couldn't create a fully featured input, but loved it"],
    ["Jest", "Automated unit testing"]
  ]
}

export default TechStack
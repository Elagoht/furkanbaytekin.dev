import stack_icons from "../../assets/stack"

export default function TechStack() {

  const skills = [
    { name: "React.js", icon: stack_icons.react },
    { name: "Tailwind CSS", icon: stack_icons.tailwindcss },
    { name: "Bootstrap", icon: stack_icons.bootstrap },
    { name: "Pug", icon: stack_icons.pug },
    { name: "SASS", icon: stack_icons.sass },
    { name: "Git", icon: stack_icons.git },
    { name: "Github", icon: stack_icons.github },
    { name: "Django", icon: stack_icons.django },
    { name: "PyQt5", icon: stack_icons.qt },
    { name: "MongoDB", icon: stack_icons.mongodb },
    { name: "SQLite", icon: stack_icons.sqlite },
    { name: "MySQL", icon: stack_icons.mysql },
    { name: "Numpy", icon: stack_icons.numpy },
    { name: "Pandas", icon: stack_icons.pandas },
    { name: "Matplotlib", icon: stack_icons.matplotlib },
    { name: "Seaborn", icon: stack_icons.seaborn },
    { name: "Gimp", icon: stack_icons.gimp },
    { name: "Kdenlive", icon: stack_icons.kdenlive },
    { name: "Audacity", icon: stack_icons.audacity },
  ]

  return <div className="flex flex-col gap-4">
    <h1>Tech Stack</h1>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <div key={index} className="skill-box">
          <img src={skill.icon} alt={skill.name} className="w-8 dark:invert" />
          {skill.name}
        </div>))}
    </div>
  </div >
}

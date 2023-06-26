import stack_icons from "../../assets/stack"

export default function Languages() {

  const languages = [
    { name: "JavaScript", icon: stack_icons.javascript },
    { name: "Python", icon: stack_icons.python },
    { name: "C#", icon: stack_icons.csharp },
    { name: "HTML", icon: stack_icons.html5 },
    { name: "CSS", icon: stack_icons.css },
    { name: "Shell Script", icon: stack_icons.bash },
    { name: "AWK", icon: stack_icons.awk },
    { name: "SQL", icon: stack_icons.sql }
  ]

  return <div className="flex flex-col gap-4">
    <h1>Tech Stack</h1>
    <div className="flex flex-wrap gap-2">
      {languages.map((language, index) => (
        <div key={index} className="skill-box">
          <img src={language.icon} alt={language.name} className="w-8 dark:invert" />
          {language.name}
        </div>))}
    </div>
  </div >
}

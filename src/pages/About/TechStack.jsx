export default function TechStack() {

  const skills = [
    "React.js", "Tailwind CSS", "Bootstrap", "Pug", "SASS",
    "Git", "Github",
    "Django", "PyQt5", "MongoDB", "SQLite", "MySQL",
    "Numpy", "Pandas", "Matplotlib", "Seaborn",
    "Gimp", "Kdenlive", "Audacity"
  ]

  return <div className="flex flex-col gap-4">
    <h1>Tech Stack</h1>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <div key={index} className="skill-box">
          {skill}
        </div>
      ))}
    </div>
  </div >
}

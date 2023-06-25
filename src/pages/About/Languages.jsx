
export default function Languages() {

  const languages = [
    "JavaScript", "Python", "C#", "HTML",
    "CSS", "Shell Script", "AWK", "SQL"
  ]

  return <div className="flex flex-col gap-4">
    <h1>Languages</h1>
    <div className="flex flex-wrap gap-2">
      {languages.map((language, index) => (
        <div className="skill-box" key={index}>
          {language}
        </div>
      ))}
    </div>
  </div>
}

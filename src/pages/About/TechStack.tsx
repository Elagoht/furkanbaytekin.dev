import Paper from "../../components/Paper"
import tech_icons from "../../assets/stack"
import { FC } from "react"

const TechStack: FC = () => {

  return <Paper>
    <h2>Tech Stack</h2>
    <div className="flex flex-wrap gap-8 justify-center mt-4">
      {tech_icons.map(tool => (
        <div key={tool.name} className="tech-tool">
          <img src={tool.icon} alt={tool.name} />
          {tool.name}
        </div>
      ))}
    </div>
  </Paper>
}

export default TechStack

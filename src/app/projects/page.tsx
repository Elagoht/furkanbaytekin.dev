import Content from "@/components/layout/Content"
import GithubProject from "@/components/pages/projects/GithubProject"
import dictionary from "@/lang"
import { getProjects } from "@/services/projects"
import { FC } from "react"

export const revalidate = 3600 // Invalidate cache every hour

const Projects: FC = async () => {
  const projects = await getProjects()

  return <Content
    title={dictionary.projects.title}
    description={dictionary.projects.description}
  >
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.sort((a, b) =>
        Number(b.archived) - Number(a.archived)
        || a.stargazers_count - b.stargazers_count
        || a.forks - b.forks
        || new Date(a.pushed_at).getTime() - new Date(b.pushed_at).getTime()
      ).reverse(
      ).map(project =>
        <GithubProject
          key={project.id}
          {...project}
        />
      )}
    </ul>
  </Content>
}

export default Projects
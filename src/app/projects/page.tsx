import Content from "@/components/layout/Content"
import GithubProjects from "@/components/pages/projects"
import Github from "@/utilities/Github"
import { FC } from "react"

export const revalidate = 3600

const ProjectsPage: FC<PageComponent> = async () => {
  const projects = await Github.getAllProjects()

  return <Content blueprint={{
    "@context": "https://schema.org",
    "@type": "BlogPosting"
  }}>
    <GithubProjects projects={projects} />
  </Content>
}

export default ProjectsPage
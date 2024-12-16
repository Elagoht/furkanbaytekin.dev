import Content from "@/components/layout/Content"
import GithubProjects from "@/components/pages/projects"
import Github from "@/utilities/Github"
import Magnifier from "@/utilities/Magnifier"
import { FC } from "react"

const ProjectsPage: FC<PageComponent> = async ({
  searchParams
}) => {
  const magnifier = new Magnifier(await searchParams)
  const page = magnifier.number("page", 1)

  const projects = await Github.getProjects(page)
  const total = await Github.getTotalProjectCount()

  return <Content blueprint={{
    "@context": "https://schema.org",
    "@type": "BlogPosting"
  }}>
    <GithubProjects
      projects={projects}
      totalPages={total}
      searchParams={magnifier.toObject()}
    />
  </Content>
}

export default ProjectsPage
import Content from "@/components/layout/Content"
import GithubProjects from "@/components/pages/projects"
import BluePrint from "@/utilities/BluePrint"
import Dictate from "@/utilities/Dictionary"
import Github from "@/utilities/Github"
import Meta from "@/utilities/Meta"
import { FC } from "react"

export const revalidate = 3600

const ProjectsPage: FC<PageComponent> = async () => {
  const projects = await Github.getAllProjects()

  const dictionary = Dictate.en

  const blueprint = new BluePrint(dictionary).projects()

  return <Content blueprint={blueprint}>
    <GithubProjects projects={projects} />
  </Content>
}

export const generateMetadata = () => {
  return Meta.data("/projects", Dictate.en)
}

export default ProjectsPage
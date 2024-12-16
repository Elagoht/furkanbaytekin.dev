import Dictate from "@/utilities/Dictionary"
import { FC } from "react"
import GithubProjectCard from "./GithubProjectCard"

type GithubProjectsProps = {
  projects: GithubProject[]
}

const GithubProjects: FC<GithubProjectsProps> = ({
  projects
}) => {
  const dictionary = Dictate.en

  return <section className="my-8">
    <h2 className="mb-4 text-2xl font-bold">
      {dictionary.pages.projects.title}
    </h2>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects?.map?.(blog =>
        <GithubProjectCard
          key={blog.id}
          {...blog}
        />
      ) ?? <p>{dictionary.pages.projects.noProjects}</p>}
    </div>
  </section>
}

export default GithubProjects
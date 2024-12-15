import Dictate from "@/utilities/Dictionary"
import { FC } from "react"
import GithubProjectCard from "./GithubProjectCard"
import Pagination from "@/components/common/Pagination"

type GithubProjectsProps = {
  projects: GithubProject[]
  totalPages: number
  searchParams: Record<string, string | undefined>
}

const GithubProjects: FC<GithubProjectsProps> = ({
  projects, totalPages, searchParams
}) => {
  const dictionary = Dictate.en

  return <section className="my-8">
    <h2 className="mb-4 text-xl font-bold">
      {dictionary.pages.common.blogs}
    </h2>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map(blog =>
        <GithubProjectCard
          key={blog.id}
          {...blog}
        />
      )}
    </div>

    <Pagination
      pathname={"/projects"}
      totalPages={totalPages}
      searchParams={searchParams}
    />
  </section>
}

export default GithubProjects
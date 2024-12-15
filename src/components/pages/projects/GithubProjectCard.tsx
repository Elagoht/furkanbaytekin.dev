import {
  IconArchive, IconCopyleft, IconGitFork,
  IconStarFilled
} from "@tabler/icons-react"
import Link from "next/link"
import { FC } from "react"
import ProjectLanguageIcon from "./ProjectLanguageIcon"

const GithubProjectCard: FC<GithubProject> = (
  props
) => {
  return <li
    key={props.id}
    className="bg-white dark:bg-fedora-800 p-4 rounded-xl
    shadow-md flex flex-col gap-1 relative overflow-clip"
  >
    {props.archived &&
      <IconArchive
        size={256}
        className="absolute top-0 right-0 rotate-12 opacity-10"
      />
    }

    <div className="flex items-start justify-between gap-2">
      <Link
        target="_blank"
        href={props.html_url}
        rel="noopener noreferrer"
        className="text-fedora-600 dark:text-fedora-400
      text-xl font-semibold truncate self-start"
      >
        {props.name}
      </Link>
    </div>

    {props.license &&
      <span className="text-fedora-600 dark:text-fedora-400
        text-sm font-semibold flex items-center gap-1"
      >
        <IconCopyleft
          size={16}
          className="stroke-fedora-600 dark:stroke-fedora-400"
        /> {props.license.name}
      </span>
    }

    <p className="text-fedora-600 dark:text-fedora-400">
      {props.description}
    </p>

    <div className="mt-4 grow flex gap-2 justify-end items-end">
      {props.language &&
        <figure className="flex items-center grow gap-1">
          <ProjectLanguageIcon language={props.language} />

          <span className="text-pinky-600 dark:text-pinky-400">
            {props.language}
          </span>
        </figure>
      }

      {props.stargazers_count > 0 &&
        <span className="text-fedora-600 dark:text-fedora-400
          flex items-center gap-1"
        >
          {props.stargazers_count} <IconStarFilled
            size={16}
            className="fill-amber-600 dark:fill-amber-400"
          />
        </span>
      }

      {props.forks > 0 &&
        <span className="text-fedora-600 dark:text-fedora-400
          flex items-center gap-1"
        >
          {props.forks} <IconGitFork
            size={16}
            className="stroke-pinky-600 dark:stroke-pinky-400"
          />
        </span>
      }
    </div>
  </li>
}

export default GithubProjectCard
import { IconArchive, IconCopyleft, IconGitFork, IconStarFilled } from "@tabler/icons-react"
import Link from "next/link"
import { FC } from "react"
import ProjectLanguageIcon from "./ProjectLanguageIcon"
import dictionary from "@/lang"

const GithubProject: FC<GithubProject> = (
  props
) =>
  <li
    key={props.id}
    className="bg-white dark:bg-neutral-800 p-4 rounded-xl
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
        className="text-primary-600 dark:text-primary-400
      text-xl font-semibold truncate hover:underline self-start"
      >
        {props.name}
      </Link>

      {props.homepage &&
        <a
          href={props.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary-100 dark:text-secondary-900
        bg-secondary-600 dark:bg-secondary-400 px-2 py-1 rounded-md
        font-semibold self-end mb-2"
        >
          {dictionary.projects.visit}
        </a>
      }
    </div>

    {props.license &&
      <span className="text-neutral-600 dark:text-neutral-400
        text-sm font-semibold flex items-center gap-1"
      >
        <IconCopyleft
          size={16}
          className="stroke-neutral-600 dark:stroke-neutral-400"
        /> {props.license.name}
      </span>
    }

    <p className="text-neutral-600 dark:text-neutral-400">
      {props.description}
    </p>

    <div className="mt-4 grow flex gap-2 justify-end items-end">
      {props.language &&
        <figure className="flex items-center grow gap-1">
          <ProjectLanguageIcon language={props.language} />

          <span className="text-secondary-600 dark:text-secondary-400">
            {props.language}
          </span>
        </figure>
      }

      {props.stargazers_count > 0 &&
        <span className="text-neutral-600 dark:text-neutral-400
          flex items-center gap-1"
        >
          {props.stargazers_count} <IconStarFilled
            size={16}
            className="fill-amber-600 dark:fill-amber-400"
          />
        </span>
      }

      {props.forks > 0 &&
        <span className="text-neutral-600 dark:text-neutral-400
          flex items-center gap-1"
        >
          {props.forks} <IconGitFork
            size={16}
            className="stroke-secondary-600 dark:stroke-secondary-400"
          />
        </span>
      }
    </div>
  </li>

export default GithubProject
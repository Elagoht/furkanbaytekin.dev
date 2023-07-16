import { FC, ReactNode } from 'react'
import { IChildrenComponent } from '../types'

type CourseButton = {
  link: string
  icon: ReactNode
  text: string
}

export type CourseProps = {
  img: string
  alternate?: boolean
  buttons: CourseButton[]
} & IChildrenComponent

const Course: FC<CourseProps> = ({ children, img, alternate = false, buttons = [] }) => {

  return <article
    className={"flex gap-12 justify-center items-center max-w-5xl mx-auto py-12 max-lg:text-center " + (
      alternate
        ? "max-lg:flex-col-reverse text-right"
        : "max-lg:flex-col"
    )}
  >
    {!alternate && <img className="object-cover rounded-full border-4 border-neutral-800 dark:border-neutral-200 bg-neutral-800 dark:bg-neutral-200 aspect-square max-w-sm w-full" src={img} alt="Course Cover" />}

    <div className="grid gap-2"> {children}
      <div className={"flex gap-4 flex-wrap max-lg:justify-center" + (
        alternate
          ? " justify-end"
          : ""
      )}
      >
        {buttons.map((button, index) => (
          <a
            className="button"
            target="_blank"
            rel="noreferrer"
            key={index}
            href={button.link}
          >
            {button.icon} {button.text}
          </a>
        ))}
      </div>
    </div>

    {alternate && <img className="object-cover rounded-full border-4 border-neutral-800 dark:border-neutral-200 bg-neutral-800 dark:bg-neutral-200 aspect-square max-w-sm w-full" src={img} alt="Course Cover" />}
  </article >
}

export default Course
import { FC, createElement } from "react"

type ContentProps = ParentComponent<{
  as?: "div" | "section" | "article"
  title?: string
  description?: string
  className?: string
}>

const Content: FC<ContentProps> = ({
  as: Element = "section", title,
  description, className, children
}) => createElement(
  Element, {
  className: `max-w-screen-2xl mx-auto ${className}`,
}, <>
  {title &&
    <h1 className="text-4xl font-bold">
      {title}
    </h1>
  }

  {description &&
    <p className="text-neutral-600 dark:text-neutral-400 mt-4 mb-8 text-xl">
      {description}
    </p>
  }

  {children}
</>)

export default Content
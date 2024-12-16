import { FC } from "react"
import Schema, { SchemaProps } from "./Schema"

type ContentProps = ParentComponent<{
  blueprint: SchemaProps["blueprint"]
}>

const Content: FC<ContentProps> = ({
  children, blueprint
}) => {
  return <>
    <main className="mx-auto max-w-screen-lg p-4 grow animate-fade-in">
      {children}
    </main>

    <Schema blueprint={blueprint} />
  </>
}

export default Content
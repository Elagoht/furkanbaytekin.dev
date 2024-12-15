import { FC } from "react"

const Container: FC<ParentComponent> = ({
  children
}) => {
  return <div className="max-w-screen-lg mx-auto p-4">
    {children}
  </div>
}

export default Container
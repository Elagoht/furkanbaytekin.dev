import classNames from "classnames"
import { FC, HTMLProps } from "react"

type ContainerProps = HTMLProps<HTMLDivElement>

const Container: FC<ContainerProps> = ({
  children, ...props
}) => {
  return <div
    {...props}
    className={classNames(
      "max-w-screen-lg mx-auto p-4",
      props.className
    )}
  >
    {children}
  </div>
}

export default Container
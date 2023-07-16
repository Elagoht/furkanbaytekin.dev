import { ReactNode } from "react"

export interface IChildrenComponent {
  children: ReactNode
  id?: string
}

export interface IClassNameProps extends IChildrenComponent {
  className?: {} | string
}

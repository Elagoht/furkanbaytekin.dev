import { FC } from "react"
import Me from "./Me"
import NavBar from "./NavBar"

const Aside: FC = () => {
  return <aside className="overflow-y-auto p-8
  bg-neutral-200 dark:bg-neutral-950">
    <Me />

    <NavBar />
  </aside>
}

export default Aside
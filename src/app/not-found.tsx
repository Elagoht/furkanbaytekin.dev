import dictionary from "@/lang"
import { IconZoomPan } from "@tabler/icons-react"
import { FC } from "react"

const RootNotFoundPage: FC = () => {
  return <div className="flex items-center justify-center h-full">
    <div className="text-center items-center flex flex-col gap-8">
      <IconZoomPan
        size={128}
        stroke={1.5}
        className="text-primary-500"
      />

      <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
        {dictionary[404].title}
      </h1>

      <p className="text-lg text-neutral-700 dark:text-neutral-300">
        {dictionary[404].description}
      </p>
    </div>
  </div>
}

export default RootNotFoundPage
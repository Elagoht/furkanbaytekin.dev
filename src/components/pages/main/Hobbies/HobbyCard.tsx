import { FC, ReactElement } from "react"

type HobbyCardProps = {
  icon: ReactElement
  title: string
  description: string
}

const HobbyCard: FC<HobbyCardProps> = ({
  icon, title, description
}) => {
  return <figure className="rounded-lg flex flex-col items-center">
    {icon}

    <figcaption className="mt-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p>{description}</p>
    </figcaption>
  </figure>
}

export default HobbyCard
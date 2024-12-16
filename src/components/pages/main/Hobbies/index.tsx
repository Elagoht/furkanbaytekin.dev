import Dictate from "@/utilities/Dictionary"
import { FC } from "react"
import HobbyCard from "./HobbyCard"
import { IconBook2, IconGuitarPick, IconVinyl } from "@tabler/icons-react"

const Hobbies: FC = () => {
  const dictionary = Dictate.en

  return <section className="my-8">
    <h2 className="text-2xl font-semibold mb-4">
      {dictionary.pages.main.hobbies.title}
    </h2>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {dictionary.pages.main.hobbies.items.map((item, index) =>
        <HobbyCard
          {...item}
          key={index}
          icon={hobbyIcons[index]}
        />
      )}
    </div>
  </section>
}

const iconProps = {
  size: 96,
  className: "text-pinky-500"
}

const hobbyIcons = [
  <IconVinyl key="vinyl" {...iconProps} />,
  <IconGuitarPick key="bass" {...iconProps} />,
  <IconBook2 key="book" {...iconProps} />
]

export default Hobbies
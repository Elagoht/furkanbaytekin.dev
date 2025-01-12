import Content from "@/components/layout/Content"
import Hero from "@/components/layout/Hero"
import BluePrint from "@/utilities/BluePrint"
import Dictate from "@/utilities/Dictionary"
import Meta from "@/utilities/Meta"
import { IconAlarm } from "@tabler/icons-react"
import { FC } from "react"

const MyBookPage: FC = () => {
  const dictionary = Dictate.en

  const blueprint = new BluePrint(dictionary).myBook()

  return <>
    <Hero>
      <h1>
        {dictionary.pages.myBook.title}
      </h1>

      <p>
        {dictionary.pages.myBook.description}
      </p>
    </Hero>

    <Content blueprint={blueprint}>
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">
          {dictionary.pages.myBook.comingSoon.title} <IconAlarm
            size={32}
            className="inline-block"
          />
        </h2>

        <p className="text-lg bg-pinky-300 dark:bg-pinky-700 p-4 rounded-lg
          border border-pinky-500"
        >
          {dictionary.pages.myBook.comingSoon.description}
        </p>

        <small>
          {dictionary.pages.myBook.comingSoon.spoiler}
        </small>
      </section>
    </Content>
  </>
}

export const generateMetadata = () => {
  return Meta.data("/book", Dictate.en)
}

export default MyBookPage
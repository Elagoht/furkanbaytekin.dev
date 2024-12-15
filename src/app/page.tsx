import Schema from "@/components/layout/Schema"
import BluePrint from "@/utilities/BluePrint"
import Dictate from "@/utilities/Dictionary"
import Drawer from "@/utilities/Drawer"
import { FC } from "react"

const MainPage: FC = async () => {
  const dictionary = Dictate.en

  const blogs = await Drawer.getBlogPosts()

  const blueprint = new BluePrint(dictionary).owner()

  return <>
    <main className="mx-auto max-w-screen-lg p-4 prose dark:prose-invert prose-neutral">
      <h1>
        {dictionary.pages.main.title}
      </h1>

      <p>
        {dictionary.pages.main.description}
      </p>

      <pre>
        {JSON.stringify(blogs, null, 2)}
      </pre>
    </main>

    <Schema blueprint={blueprint} />
  </>
}

export default MainPage
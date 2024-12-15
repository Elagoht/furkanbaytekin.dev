import Content from "@/components/layout/Content"
import BluePrint from "@/utilities/BluePrint"
import Dictate from "@/utilities/Dictionary"
import Drawer from "@/utilities/Drawer"
import { FC } from "react"

const MainPage: FC = async () => {
  const dictionary = Dictate.en

  const blogs = await Drawer.getBlogSuggestions()

  const blueprint = new BluePrint(dictionary).owner()

  return <Content blueprint={blueprint}>
    <h1>
      {dictionary.pages.main.title}
    </h1>

    <p>
      {dictionary.pages.main.description}
    </p>

    <pre>
      {JSON.stringify(blogs, null, 2)}
    </pre>
  </Content>
}

export default MainPage
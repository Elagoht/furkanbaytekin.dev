import Content from "@/components/layout/Content"
import Hero from "@/components/layout/Hero"
import BlogSuggestions from "@/components/pages/main/BlogSuggestions"
import BluePrint from "@/utilities/BluePrint"
import Dictate from "@/utilities/Dictionary"
import Drawer from "@/utilities/Drawer"
import { FC } from "react"

const MainPage: FC = async () => {
  const dictionary = Dictate.en

  const { data: blogs } = await Drawer.getBlogSuggestions()

  const blueprint = new BluePrint(dictionary).owner()

  return <>
    <Hero>
      <h1>
        {dictionary.pages.main.title}
      </h1>

      <p>
        {dictionary.pages.main.description}
      </p>
    </Hero>

    <Content blueprint={blueprint}>
      <BlogSuggestions blogs={blogs} />
    </Content>
  </>
}

export default MainPage
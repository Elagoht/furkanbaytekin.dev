import BlogCategories from "@/components/common/BlogCategories"
import Content from "@/components/layout/Content"
import Hero from "@/components/layout/Hero"
import BlogSuggestions from "@/components/pages/main/BlogSuggestions"
import BluePrint from "@/utilities/BluePrint"
import Collection from "@/utilities/Collection"
import Dictate from "@/utilities/Dictionary"
import Drawer from "@/utilities/Drawer"
import Meta from "@/utilities/Meta"
import { FC } from "react"

const MainPage: FC = async () => {
  const dictionary = Dictate.en

  const { data: blogs } = await Drawer.getBlogSuggestions()
  const categories = await Collection.getCategories()

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

      <BlogCategories categories={categories} />
    </Content>
  </>
}

export const generateMetadata = () => {
  return Meta.data("/", Dictate.en)
}

export default MainPage
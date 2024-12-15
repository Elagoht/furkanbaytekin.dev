import Content from "@/components/layout/Content"
import Hero from "@/components/layout/Hero"
import Collection from "@/utilities/Collection"
import Dictate from "@/utilities/Dictionary"
import Drawer from "@/utilities/Drawer"
import Message from "@/utilities/Message"
import { FC } from "react"

type BlogCategoryPageProps = PageComponent<{
  category: string
}>

const BlogCategoryPage: FC<BlogCategoryPageProps> = async ({
  params
}) => {
  const { category } = await params

  const { data: blogs } = await Drawer.getBlogPostsByCategory(category)
  const categoryData = await Collection.getCategory(category)

  const dictionary = Dictate.en

  return <>
    <Hero>
      <h1>
        {Message.format(
          dictionary.pages.blogCategories.title, {
          category: categoryData.name
        })}
      </h1>

      <p>
        {Message.format(
          dictionary.pages.blogCategories.description, {
          category: categoryData.name
        })}
      </p>
    </Hero>

    <Content blueprint={{
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": Message.format(
        dictionary.pages.blogCategories.title, {
        category: category
      }),
      "description": Message.format(
        dictionary.pages.blogCategories.description, {
        category: categoryData.name
      })
    }}>
      <pre>
        {JSON.stringify(blogs, null, 2)}
      </pre>
    </Content>
  </>
}

export default BlogCategoryPage
import BlogPosts from "@/components/common/BlogPosts"
import SearchBox from "@/components/common/SearchBox"
import Content from "@/components/layout/Content"
import Hero from "@/components/layout/Hero"
import BluePrint from "@/utilities/BluePrint"
import Collection from "@/utilities/Collection"
import Dictate from "@/utilities/Dictionary"
import Drawer from "@/utilities/Drawer"
import Environment from "@/utilities/Environment"
import Magnifier from "@/utilities/Magnifier"
import Message from "@/utilities/Message"
import { redirect } from "next/navigation"
import { FC } from "react"

type BlogCategoryPageProps = PageComponent<{
  category: string
}>

const BlogCategoryPage: FC<BlogCategoryPageProps> = async ({
  params, searchParams
}) => {
  const { category } = await params

  const categoryData = await Collection.getCategory(category)

  const dictionary = Dictate.en
  const magnifier = new Magnifier(await searchParams)

  const page = magnifier.number("page", 1)
  const search = magnifier.string("search", "")

  const { data: blogs, total } = await Drawer.getBlogPostsByCategory(
    category, page, Environment.PAGINATE_BY, search
  )

  const totalPages = Math.ceil(total / Environment.PAGINATE_BY)

  if (page < 1) redirect(`/blogs/${category}`)
  if (page > totalPages) redirect(`/blogs/${category}?page=${totalPages}`)

  const blueprint = new BluePrint(dictionary).blogPosts()

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
        })} {Collection.getBlogCountOfCategoryDescription(category)}
      </p>

      <SearchBox
        pathname={`/blogs/${category}`}
        searchParams={magnifier.toObject()}
      />
    </Hero>

    <Content blueprint={blueprint}>
      <BlogPosts
        blogs={blogs}
        category={category}
        searchParams={magnifier.toObject()}
        totalPages={totalPages}
      />
    </Content>
  </>
}

export default BlogCategoryPage
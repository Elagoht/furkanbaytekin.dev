import BlogPosts from "@/components/common/BlogPosts"
import Content from "@/components/layout/Content"
import Hero from "@/components/layout/Hero"
import Dictate from "@/utilities/Dictionary"
import Drawer from "@/utilities/Drawer"
import Environment from "@/utilities/Environment"
import Magnifier from "@/utilities/Magnifier"
import { FC } from "react"

const BlogPostsPage: FC<PageComponent> = async ({
  searchParams
}) => {
  const dictionary = Dictate.en
  const magnifier = new Magnifier(await searchParams)

  const page = magnifier.number("page", 1)
  const search = magnifier.string("search", "")

  const { data: blogs, total, take } = await Drawer.getBlogPosts(
    page, Environment.PAGINATE_BY, search
  )

  return <>
    <Hero>
      <h1>
        {dictionary.pages.blogs.title}
      </h1>

      <p>
        {dictionary.pages.blogs.description}
      </p>
    </Hero>

    <Content blueprint={{
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": dictionary.pages.blogCategories.title,
      "description": dictionary.pages.blogCategories.description
    }}>
      <BlogPosts
        blogs={blogs}
        searchParams={magnifier.toObject()}
        totalPages={Math.ceil(total / take)}
      />
    </Content>
  </>
}

export default BlogPostsPage
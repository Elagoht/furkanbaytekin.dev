import BlogPosts from "@/components/common/BlogPosts"
import Content from "@/components/layout/Content"
import Hero from "@/components/layout/Hero"
import Dictate from "@/utilities/Dictionary"
import Drawer from "@/utilities/Drawer"
import { FC } from "react"

const BlogPostsPage: FC<PageComponent> = async () => {
  const { data: blogs } = await Drawer.getBlogPosts()

  const dictionary = Dictate.en

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
      <BlogPosts blogs={blogs} />
    </Content>
  </>
}

export default BlogPostsPage
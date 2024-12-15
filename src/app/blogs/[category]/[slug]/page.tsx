import Content from "@/components/layout/Content"
import Hero from "@/components/layout/Hero"
import BluePrint from "@/utilities/BluePrint"
import Dictate from "@/utilities/Dictionary"
import Drawer from "@/utilities/Drawer"
import Picture from "@/utilities/Picture"
import TypeWriter from "@/utilities/Typewriter"
import Image from "next/image"
import { FC } from "react"
import "@/design/article.css"
import "@/design/highlight.css"

type BlogDocumentPageProps = PageComponent<{
  slug: string
}>

const BlogDocumentPage: FC<BlogDocumentPageProps> = async ({
  params
}) => {
  const { slug } = await params

  const blog = await Drawer.getBlogPost(slug)

  const blueprint = new BluePrint(Dictate.en).ofBlogPost(blog)

  return <>
    <Hero>
      <h1>
        {blog.title}
      </h1>

      <p>
        {blog.spot}
      </p>

      <Image
        src={Picture.resolve(blog.cover)}
        alt={blog.title}
        width={1280}
        height={720}
        className="rounded-lg mb-0"
      />
    </Hero>

    <Content blueprint={blueprint}>
      <article
        id="article"
        dangerouslySetInnerHTML={{
          __html: TypeWriter.markdownToHtml(blog.content)
        }} />
    </Content>
  </>
}

export default BlogDocumentPage
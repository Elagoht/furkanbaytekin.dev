import Content from "@/components/layout/Content"
import Hero from "@/components/layout/Hero"
import "@/design/article.css"
import "@/design/highlight.css"
import BluePrint from "@/utilities/BluePrint"
import Dictate from "@/utilities/Dictionary"
import Drawer from "@/utilities/Drawer"
import Meta from "@/utilities/Meta"
import Picture from "@/utilities/Picture"
import Printer from "@/utilities/Printer"
import TypeWriter from "@/utilities/Typewriter"
import { IconCalendarFilled, IconClock } from "@tabler/icons-react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { FC } from "react"
import BlogSuggestions from "@/components/pages/main/BlogSuggestions"

type BlogDocumentPageProps = PageComponent<{
  slug: string
}>

const BlogDocumentPage: FC<BlogDocumentPageProps> = async ({
  params
}) => {
  const { slug } = await params

  const blog = await Drawer.getBlogPost(slug)

  if (!blog.published) return notFound()

  const suggestions = await Drawer.getBlogSuggestionsExceptSlug(slug)

  const blueprint = new BluePrint(Dictate.en).ofBlogPost(blog)

  Printer.info(`Revalidating blog post: ${slug}`)

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

      <div className="flex flex-wrap justify-between items-center gap-2 mt-2">
        <time
          dateTime={blog.createdAt}
          className="text-fedora-500 text-sm flex gap-1 items-center"
        >
          <IconCalendarFilled size={16} />

          {new Date(blog.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </time>

        <span className="text-fedora-500 text-sm flex gap-1 items-center">
          <IconClock size={16} /> {
            Drawer.getReadTimeMessage(blog.content, Dictate.en)
          }
        </span>
      </div>
    </Hero>

    <Content blueprint={blueprint}>
      <article
        id="article"
        dangerouslySetInnerHTML={{
          __html: TypeWriter.markdownToHtml(blog.content)
        }}
      />

      <BlogSuggestions blogs={suggestions} />
    </Content>
  </>
}

export const generateStaticParams = Drawer.getBlogSlugs

export const generateMetadata = async ({
  params
}: BlogDocumentPageProps) => {
  const { slug } = await params

  const blog = await Drawer.getBlogPost(slug)

  return Meta.blogData(blog)
}

export default BlogDocumentPage
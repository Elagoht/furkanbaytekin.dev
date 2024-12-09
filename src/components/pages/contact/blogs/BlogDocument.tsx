import TypeWriter from "@/utility/Typewriter"
import Image from "next/image"
import { FC } from "react"
import "@/design/article.css"
import "@/design/highlight.css"

type BlogDocumentProps = {
  blog: BlogDocumentData
}

const BlogDocument: FC<BlogDocumentProps> = ({
  blog
}) => {
  return <article className="prose prose-neutral dark:prose-invert prose-lg
    w-full mx-auto max-w-screen-lg"
  >
    <h1 className="line-clamp-2">
      {blog.title}
    </h1>

    <Image
      src={`${process.env.BLOG_API_URL}${blog.cover}`}
      alt={blog.title}
      width={1024}
      height={576}
      className="rounded-lg border-2 aspect-video
      border-neutral-200 dark:border-neutral-800"
    />

    <article dangerouslySetInnerHTML={{
      __html: TypeWriter.markdownToHtml(blog.content)
    }} />
  </article>
}

export default BlogDocument
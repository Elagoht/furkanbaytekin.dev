import Drawer from "@/utilities/Drawer"
import { FC } from "react"

type BlogDocumentPageProps = PageComponent<{
  slug: string
}>

const BlogDocumentPage: FC<BlogDocumentPageProps> = async ({
  params
}) => {
  const { slug } = await params

  const blog = await Drawer.getBlogPost(slug)

  return <main className="mx-auto max-w-screen-lg p-4 prose dark:prose-invert prose-neutral">
    <pre>
      {JSON.stringify(blog, null, 2)}
    </pre>
  </main>
}

export default BlogDocumentPage
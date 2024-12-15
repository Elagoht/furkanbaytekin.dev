import Schema from "@/components/layout/Schema"
import BluePrint from "@/utilities/BluePrint"
import Dictate from "@/utilities/Dictionary"
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

  const blueprint = new BluePrint(Dictate.en).ofBlogPost(blog)

  return <>
    <main className="mx-auto max-w-screen-lg p-4 prose dark:prose-invert prose-neutral">
      <pre>
        {JSON.stringify(blog, null, 2)}
      </pre>
    </main>

    <Schema blueprint={blueprint} />
  </>
}

export default BlogDocumentPage
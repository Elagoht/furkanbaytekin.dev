import Content from "@/components/layout/Content"
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

  return <Content blueprint={blueprint}>
    <pre>
      {JSON.stringify(blog, null, 2)}
    </pre>
  </Content>
}

export default BlogDocumentPage
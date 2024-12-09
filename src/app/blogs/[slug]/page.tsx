import Content from "@/components/layout/Content"
import BlogDocument from "@/components/pages/contact/blogs/BlogDocument"
import { getBlog } from "@/services/blogs"
import { FC } from "react"

type BlogDocumentPageProps = PageComponent<{
  slug: string
}>

const BlogDocumentPage: FC<BlogDocumentPageProps> = async ({
  params
}) => {
  const { slug } = await params

  const blog = await getBlog(slug)

  return <Content as="section">
    <BlogDocument blog={blog} />
  </Content>
}

export default BlogDocumentPage
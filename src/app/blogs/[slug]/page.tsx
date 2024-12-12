import Schema from "@/components/analytics/Schema"
import Content from "@/components/layout/Content"
import BlogDocument from "@/components/pages/contact/blogs/BlogDocument"
import { getBlog, getBlogs } from "@/services/blogs"
import Blueprint from "@/utility/Blueprint"
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
    <Schema schema={Blueprint.ofBlogPost(blog)} />

    <BlogDocument blog={blog} />
  </Content>
}

export const generateStaticParams = async () => {
  const blogs = await getBlogs({
    page: 1,
    take: -1
  })

  return blogs.data.map(blog => ({
    slug: blog.slug
  }))
}

export default BlogDocumentPage
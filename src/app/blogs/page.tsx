import Content from "@/components/layout/Content"
import dictionary from "@/lang"
import { getBlogs } from "@/services/blogs"
import React, { FC } from "react"

const BlogsPage: FC = async () => {
  const blogs = await getBlogs()

  return <Content
    title={dictionary.blogs.title}
    description={dictionary.blogs.description}
  >
    <pre>
      {JSON.stringify(blogs, null, 2)}
    </pre>
  </Content>
}

export default BlogsPage
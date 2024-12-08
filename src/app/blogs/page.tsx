import Content from "@/components/layout/Content"
import BlogCard from "@/components/pages/contact/blogs/BlogCard"
import dictionary from "@/lang"
import { getBlogs } from "@/services/blogs"
import React, { FC } from "react"

const BlogsPage: FC = async () => {
  const blogs = await getBlogs()

  return <Content
    title={dictionary.blogs.title}
    description={dictionary.blogs.description}
  >
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {blogs.data.map(blog =>
        <BlogCard
          key={blog.slug}
          layout="list"
          blog={blog}
        />
      )}
    </div>
  </Content>
}

export default BlogsPage
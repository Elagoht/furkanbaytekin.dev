import Dictate from "@/utilities/Dictionary"
import { FC } from "react"
import BlogPostCard from "./BlogPostCard"

type BlogPostsProps = {
  blogs: BlogCardData[]
}

const BlogPosts: FC<BlogPostsProps> = ({
  blogs
}) => {
  const dictionary = Dictate.en

  return <section className="my-8">
    <h2 className="mb-4 text-xl font-bold">
      {dictionary.pages.common.blogs}
    </h2>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map(blog =>
        <BlogPostCard
          key={blog.slug}
          {...blog}
        />
      )}
    </div>
  </section>
}

export default BlogPosts
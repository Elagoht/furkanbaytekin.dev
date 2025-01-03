import Dictate from "@/utilities/Dictionary"
import { FC } from "react"
import BlogPostCard from "./BlogPostCard"
import Pagination from "../Pagination"

type BlogPostsProps = {
  blogs: BlogCardData[]
  category?: string
  searchParams: Record<string, string | undefined>
  totalPages: number
}

const BlogPosts: FC<BlogPostsProps> = ({
  blogs, category, searchParams, totalPages
}) => {
  const dictionary = Dictate.en

  return <section className="my-8">
    <h2 className="mb-4 text-2xl font-bold">
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

    <Pagination
      pathname={category
        ? `/blogs/${category}`
        : "/blogs"
      }
      totalPages={totalPages}
      searchParams={searchParams}
    />
  </section>
}

export default BlogPosts
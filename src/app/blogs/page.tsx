import Content from "@/components/layout/Content"
import Pagination from "@/components/layout/Pagination"
import BlogCard from "@/components/pages/contact/blogs/BlogCard"
import BlogsSearchBar from "@/components/pages/contact/blogs/BlogsSearchBar"
import dictionary from "@/lang"
import { getBlogs } from "@/services/blogs"
import Magnifier from "@/utility/Magnifier"
import { redirect } from "next/navigation"
import QueryString from "qs"
import React, { FC } from "react"

const BlogsPage: FC<PageComponent> = async ({
  searchParams
}) => {
  const magnifier = new Magnifier(await searchParams)
  const page = magnifier.number("page", 1)

  if (page < 1) redirect("/blog")

  const { data: blogs, total, take } = await getBlogs(
    page < 1 ? 1 : page,
    magnifier.string("search")
  )

  if (
    page * take > total! + take
  ) redirect(`/blogs?${QueryString.stringify({
    ...searchParams,
    page: Math.ceil(total! / take)
  })}`)

  return <Content
    title={dictionary.blogs.title}
    description={dictionary.blogs.description}
  >
    <BlogsSearchBar magnifier={magnifier} />

    {blogs.length === 0 ? <>
      <h1>{dictionary.blogs.empty.title}</h1>

      <p>{dictionary.blogs.empty.description}</p>
    </> : <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {blogs.map(blog =>
          <BlogCard
            key={blog.slug}
            layout="list"
            blog={blog}
          />
        )}
      </div>

      <Pagination
        pathname="/blogs"
        totalPages={Math.ceil(total / take)}
        searchParams={magnifier.toObject()}
      />
    </>}
  </Content>
}

export default BlogsPage
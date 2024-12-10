import ApiCall from "@/utility/ApiCall"
import QueryString from "qs"

export const getBlogs = (
  page: number = 1,
  search: string | undefined = undefined,
  type: "card" | "list" = "card",
) => ApiCall.get<BlogsResponse>(
  `${process.env.BLOG_API_URL}/api/blogs?${QueryString.stringify({
    search,
    type,
    page,
    take: 6
  }, {
    skipNulls: true
  })}`
).then(response => response.json())

export const getBlog = (
  slug: string
) => ApiCall.get<BlogDocumentData>(
  `${process.env.BLOG_API_URL}/api/blogs/${slug}`
).then(response => response.json())
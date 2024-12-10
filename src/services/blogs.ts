import ApiCall from "@/utility/ApiCall"
import QueryString from "qs"

export const getBlogs = ({
  page = 1,
  take = 6,
  search = ""
}) => ApiCall.get<BlogsResponse>(
  `${process.env.BLOG_API_URL}/api/blogs?${QueryString.stringify({
    search, page, take
  }, {
    skipNulls: true
  })}`
).then(response => response.json())

export const getBlog = (
  slug: string
) => ApiCall.get<BlogDocumentData>(
  `${process.env.BLOG_API_URL}/api/blogs/${slug}`
).then(response => response.json())
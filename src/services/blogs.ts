import ApiCall from "@/utility/ApiCall"
import QueryString from "qs"

export const getBlogs = (
  type: "card" | "list" = "card",
  page: number = 1
) => ApiCall.get<BlogCardData[]>(
  `${process.env.BLOG_API_URL}/api/blogs?${QueryString.stringify({
    type,
    page
  }, {
    skipNulls: true
  })}`
).then(response => response.json())
import QueryString from "qs"
import ApiCall from "../ApiCall"

class Drawer {
  public static getBlogPost = async (slug: BlogCardData["slug"]) => {
    return await ApiCall
      .get<BlogDocumentData>(`/api/blogs/${slug}`)
      .then((res) => res.json())
  }

  public static getBlogPosts = async (
    page: number = 1,
    take: number = 12,
    search: string = ""
  ) => {
    return Drawer.getBlogsResponse({
      page: page.toString(),
      take: take.toString(),
      search
    })
  }

  public static getBlogPostsByCategory = async (
    category: string,
    page: number = 1,
    take: number = 12
  ) => {
    return Drawer.getBlogsResponse({
      category,
      page: page.toString(),
      take: take.toString()
    })
  }

  public static getBlogSuggestions = async () => {
    return Drawer.getBlogsResponse<BlogListData>({
      page: "1",
      take: "3",
      sort: "newest",
      type: "list"
    })
  }

  /**
   * Will be used to statically generate
   * the blog pages during build time
   */
  public static getBlogSlugs = async () => {
    const { data } = await Drawer.getBlogsResponse<BlogListData>({
      page: "1",
      take: "-1",
      type: "list"
    })

    return data.map(blog => ({
      slug: blog.slug
    }))
  }

  private static getBlogsResponse = async <Type = BlogCardData>(
    query: Record<string, string>
  ) => {
    return ApiCall.get<BlogsResponse<Type>>(
      `/api/blogs${QueryString.stringify(query, {
        addQueryPrefix: true,
        skipNulls: true
      })}`
    ).then((res) => res.json())
  }
}

export default Drawer
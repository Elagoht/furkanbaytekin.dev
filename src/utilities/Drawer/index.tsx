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
    return ApiCall.get<BlogsResponse>(
      `/api/blogs${QueryString.stringify({
        page, take, search
      }, {
        addQueryPrefix: true,
        skipNulls: true
      })}`
    ).then((res) => res.json())
  }

  /**
   * Will be used to statically generate
   * the blog pages during build time
   */
  public static getBlogSlugs = async () => {
    const { data } = await Drawer.getBlogPosts(1, -1)

    return data.map(blog => ({
      slug: blog.slug
    }))
  }
}

export default Drawer
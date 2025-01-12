import QueryString from "qs"
import ApiCall from "../ApiCall"
import Environment from "../Environment"
import Message from "../Message"

class Drawer {
  public static getBlogPost = async (slug: BlogCardData["slug"]) => {
    return await ApiCall.get<
      BlogDocumentData
    >(`/api/blogs/${slug}`, undefined, {
      tags: ["blogs"]
    }).then((res) => res.json())
  }

  public static getBlogPosts = async (
    page: number = 1,
    take: number = Environment.PAGINATE_BY,
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
    take: number = Environment.PAGINATE_BY,
    search: string = ""
  ) => {
    return Drawer.getBlogsResponse({
      category,
      page: page.toString(),
      take: take.toString(),
      search
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

  public static getBlogSuggestionsExceptSlug = async (
    slug: BlogCardData["slug"]
  ) => {
    const { data: blogs } = await Drawer.getBlogsResponse<BlogListData>({
      page: "1",
      take: "4",
      sort: "newest",
      type: "list",
      except: slug
    })

    const filtered = blogs.filter(blog => blog.slug !== slug)
    return filtered.slice(0, 3)
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
      category: blog.category,
      slug: blog.slug
    }))
  }

  public static getReadTimeMessage = (
    content: BlogDocumentData["content"],
    dictionary: Dictionary
  ) => {
    const amount = Drawer.getBlogReadTime(content)

    switch (true) {
      case amount < 1:
        return dictionary.pages.blog.readTime.lessThanOne
      case amount === 1:
        return dictionary.pages.blog.readTime.one
      default:
        return Message.format(dictionary.pages.blog.readTime.moreThanOne, {
          amount
        })
    }
  }

  public static increseBlogView = async (slug: BlogCardData["slug"]) => {
    return ApiCall.patch(`/api/blogs/${slug}/read`)
  }

  private static getBlogsResponse = async <Type = BlogCardData>(
    query: Record<string, string>
  ) => {
    return ApiCall.get<BlogsResponse<Type>>(
      `/api/blogs${QueryString.stringify(query, {
        addQueryPrefix: true,
        skipNulls: true
      })}`, undefined, {
      tags: ["blogs"]
    }).then((res) => res.json())
  }

  private static getBlogReadTime = (content: BlogDocumentData["content"]) => {
    const wordsPerMinute = 200
    const words = content.split(/\s+/g).length
    return Math.ceil(words / wordsPerMinute)
  }
}

export default Drawer
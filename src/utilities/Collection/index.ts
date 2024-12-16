import ApiCall from "../ApiCall"
import Dictate from "../Dictionary"
import Message from "../Message"

class Collection {
  public static getCategories = async (): Promise<CategoryData[]> => {
    return ApiCall.get<CategoryData[]>("/api/categories")
      .then((res) => res.json())
  }

  public static getCategory = async (slug: CategoryData["slug"]) => {
    return ApiCall.get<CategoryData>(`/api/categories/${slug}`)
      .then((res) => res.json())
  }

  public static getCategorySlugs = async () => {
    const categories = await Collection.getCategories()
    return categories.map(category => ({
      category: category.slug
    }))
  }

  public static getBlogCountOfCategoryDescription = async (
    slug: CategoryData["slug"]
  ) => {
    const count = (await Collection.getCategory(slug)).blogCount
    const dictionary = Dictate.en

    switch (count) {
      case 0:
        return dictionary.pages.blogCategories.count.zero
      case 1:
        return dictionary.pages.blogCategories.count.singular
      default:
        return Message.format(
          dictionary.pages.blogCategories.count.plural, {
          count
        })
    }
  }

  public static getBlogCountOfCategory = async (
    slug: CategoryData["slug"]
  ) => {
    const count = (await Collection.getCategory(slug)).blogCount
    const dictionary = Dictate.en
    switch (count) {
      case 0:
        return dictionary.pages.common.count.zero
      case 1:
        return dictionary.pages.common.count.singular
      default:
        return Message.format(dictionary.pages.common.count.plural, { count })
    }
  }
}

export default Collection
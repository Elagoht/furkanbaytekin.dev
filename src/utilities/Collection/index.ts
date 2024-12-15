import ApiCall from "../ApiCall"

class Collection {
  public static getCategories = async (): Promise<CategoryData[]> => {
    return ApiCall.get<CategoryData[]>("/api/categories")
      .then((res) => res.json())
  }

  public static getCategory = async (slug: CategoryData["slug"]) => {
    return ApiCall.get<CategoryData>(`/api/categories/${slug}`)
      .then((res) => res.json())
  }

  public static getCategorySlugs = async (): Promise<CategorySlugs> => {
    const categories = await Collection.getCategories()
    return categories.map(category => (category.slug))
  }
}

export default Collection
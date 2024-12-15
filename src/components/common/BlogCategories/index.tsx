import Dictate from "@/utilities/Dictionary"
import { FC } from "react"
import BlogCategoryCard from "./BlogCategoryCard"

type BlogCategoriesProps = {
  categories: CategoryData[]
}

const BlogCategories: FC<BlogCategoriesProps> = ({
  categories
}) => {
  const dictionary = Dictate.en

  return <section className="my-8">
    <h2 className="mb-4 text-xl font-bold">
      {dictionary.pages.common.blogCategories}
    </h2>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map(category =>
        <BlogCategoryCard
          key={category.slug}
          {...category}
        />
      )}
    </div>
  </section>
}

export default BlogCategories
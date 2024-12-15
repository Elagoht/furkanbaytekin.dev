import Collection from "@/utilities/Collection"
import Link from "next/link"
import { FC } from "react"

const BlogCategoryCard: FC<CategoryData> = (category) => {
  return <Link
    key={category.slug}
    href={`/blogs/${category.slug}`}
    className="p-4 text-sm bg-fedora-50 dark:bg-fedora-950 flex flex-col
    justify-center items-center text-center gap-2
    text-fedora-900 dark:text-fedora-100 rounded-md hover:shadow-md"
  >
    <strong>{category.name}</strong>

    <span>({Collection.getBlogCountOfCategory(category.slug)})</span>
  </Link>
}

export default BlogCategoryCard
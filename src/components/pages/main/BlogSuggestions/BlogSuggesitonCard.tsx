import Picture from "@/utilities/Picture"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const BlogSuggestionCard: FC<BlogListData> = (blog) => {
  return <Link
    href={`/blogs/${blog.category}/${blog.slug}`}
    className="bg-fedora-50 dark:bg-fedora-950 rounded-lg p-2 gap-2
    no-underline text-fedora-950 dark:text-fedora-50 flex items-center
    transition-all hover:shadow-md"
  >
    <Image
      src={Picture.resolve(blog.cover)}
      alt={blog.title}
      width={114}
      height={114}
      className="rounded-md text-transparent m-0 object-cover aspect-square
      shrink-0 w-16"
    />

    <h3 className="line-clamp-2 font-medium">
      {blog.title}
    </h3>
  </Link>
}

export default BlogSuggestionCard
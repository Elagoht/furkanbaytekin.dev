import Dictate from "@/utilities/Dictionary"
import Picture from "@/utilities/Picture"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const BlogSuggestionCard: FC<BlogListData> = (blog) => {
  const dictionary = Dictate.en

  return <Link
    href={`/blogs/${blog.category}/${blog.slug}`}
    className="bg-fedora-50 dark:bg-fedora-950 rounded-lg p-2 gap-2
    no-underline text-fedora-950 dark:text-fedora-50 flex flex-col
    transition-all hover:shadow-md"
  >
    <Image
      src={Picture.resolve(blog.cover)}
      alt={dictionary.pages.main.coverOfSuggestion}
      width={360}
      height={240}
      className="rounded-md text-transparent m-0 object-cover aspect-video
      shrink-0 w-full"
    />

    <h3 className="line-clamp-2 font-medium text-pinky-700 dark:text-pinky-500">
      {blog.title}
    </h3>
  </Link>
}

export default BlogSuggestionCard
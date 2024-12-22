import Picture from "@/utilities/Picture"
import { IconCalendarFilled } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const BlogPostCard: FC<BlogCardData> = (blog) => {
  return <Link
    key={blog.slug}
    prefetch={false}
    href={`/blogs/${blog.category.toLocaleLowerCase()}/${blog.slug}`}
    className="text-sm bg-fedora-50 dark:bg-fedora-950 flex flex-col
    group text-fedora-900 dark:text-fedora-100 transition-all
    rounded-md hover:shadow-md overflow-hidden p-2 gap-2"
  >
    <figure className="relative w-full overflow-clip aspect-video
      rounded"
    >
      <Image
        src={Picture.resolve(blog.cover)}
        alt={blog.title}
        width={487}
        height={274}
        className="transition-all group-hover:scale-105 w-full rounded-none"
      />
    </figure>

    <hgroup className="flex flex-col gap-2 grow">
      <h3 className="text-pinky-500 font-semibold text-lg">
        {blog.title}
      </h3>

      <p className="grow">
        {blog.spot}
      </p>

      <time
        dateTime={blog.createdAt}
        className="flex items-center text-sm gap-1 text-fedora-500"
      >
        <IconCalendarFilled size={16} />

        {new Date(blog.createdAt).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric"
        })}
      </time>
    </hgroup>
  </Link>
}

export default BlogPostCard
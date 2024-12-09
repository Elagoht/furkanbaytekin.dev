import TypeWriter from "@/utility/Typewriter"
import { IconClock, IconEdit } from "@tabler/icons-react"
import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

type BlogCardProps = {
  blog: BlogCardData
  layout?: "grid" | "list"
}

const BlogCard: FC<BlogCardProps> = ({
  blog, layout = "grid"
}) =>
  <Link
    href={`/blogs/${blog.slug}`}
    className={classNames(
      "bg-neutral-50 dark:bg-neutral-800",
      "flex rounded-lg shadow transition-all overflow-clip",
      "hover:ring-2 hover:ring-offset-2 ring-secondary-500",
      "ring-offset-neutral-50 dark:ring-offset-neutral-900", {
      "flex-col gap-1": layout === "grid",
      "gap-1 max-lg:flex-col": layout === "list"
    })}
  >
    <div className="relative">
      <Image
        src={`${process.env.BLOG_API_URL}${blog.cover}`}
        alt={blog.title}
        width={512}
        height={288}
        className={classNames(
          "aspect-video rounded-t-lg rounded-b-none h-full object-cover",
          "bg-neutral-200 dark:bg-neutral-700", {
          "w-full": layout === "grid",
          "max-lg:w-full lg:max-w-64": layout === "list",
          "lg:rounded-l-lg lg:rounded-r-none": layout === "list"
        })}
      />

      <span className={classNames(
        "absolute bottom-2 right-2 p-1 rounded-md text-sm",
        "bg-primary-500 bg-opacity-80 text-white line-clamp-1"
      )}>
        {blog.category}
      </span>
    </div>

    <div className={classNames(
      "grow flex flex-col p-2", {
      "gap-1": layout === "grid"
    })}>
      <h2 className={classNames(
        "text-lg font-medium line-clamp-2 leading-tight", {
        "mt-2": layout === "grid"
      })}>
        {blog.title}
      </h2>

      <div
        className={classNames(
          "text-neutral-500 dark:text-neutral-400",
          "line-clamp-3 grow my-2", {
          "text-sm": layout === "grid"
        })}
        dangerouslySetInnerHTML={{
          __html: TypeWriter.markdownToHtml(blog.spot)
        }}
      />

      <div className={classNames(
        "flex gap-2", {
        "justify-between": layout === "grid"
      })}>
        {[
          { icon: IconClock, date: blog.createdAt },
          { icon: IconEdit, date: blog.updatedAt }
        ].map(({ icon: Icon, date }, index) => (
          <div
            key={index}
            className="text-neutral-500 dark:text-neutral-400
            text-sm flex items-center gap-1"
          >
            <Icon size={16} />
            {new Date(date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric"
            })}
          </div>
        ))}
      </div>
    </div>
  </Link>

export default BlogCard
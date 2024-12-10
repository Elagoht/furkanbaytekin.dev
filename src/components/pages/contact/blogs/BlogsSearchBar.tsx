import dictionary from "@/lang"
import Magnifier from "@/utility/Magnifier"
import QueryString from "qs"
import React, { FC } from "react"

type BlogsSearchBarProps = {
  magnifier: Magnifier
}

const BlogsSearchBar: FC<BlogsSearchBarProps> = ({
  magnifier
}) => {
  return <form
    action={`/blogs${QueryString.stringify(
      magnifier.toObject(), {
      addQueryPrefix: true
    })}`}
    className="flex gap-4 mb-8"
  >
    <input
      type="search"
      name="search"
      placeholder={dictionary.blogs.search.placeholder}
      defaultValue={magnifier.string("search")}
      className="w-full p-2 border border-gray-300 rounded-md
    bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700"
    />

    <button className="px-2 border border-gray-300 rounded-md
  bg-primary-500 text-white dark:bg-primary-400
  dark:border-primary-400 dark:text-white"
    >
      {dictionary.blogs.search.submit}
    </button>
  </form>
}

export default BlogsSearchBar
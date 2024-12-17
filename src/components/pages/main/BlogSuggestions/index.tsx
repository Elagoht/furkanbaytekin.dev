import Dictate from '@/utilities/Dictionary'
import React, { FC } from 'react'
import BlogSuggestionCard from './BlogSuggesitonCard'

type BlogSuggestionsProps = {
  blogs: BlogListData[]
}

const BlogSuggestions: FC<BlogSuggestionsProps> = ({
  blogs
}) => {
  const dictionary = Dictate.en

  return <section className="my-12">
    <h2 className="mb-4 text-2xl font-bold">
      {dictionary.pages.main.suggestedBlogPosts}
    </h2>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map(blog => <BlogSuggestionCard
        key={blog.slug}
        {...blog}
      />)}
    </div>
  </section>
}

export default BlogSuggestions
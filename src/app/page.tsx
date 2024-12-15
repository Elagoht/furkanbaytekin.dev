import Content from "@/components/layout/Content"
import BlogSuggestionCard from "@/components/pages/main/BlogSuggestionCard"
import BluePrint from "@/utilities/BluePrint"
import Dictate from "@/utilities/Dictionary"
import Drawer from "@/utilities/Drawer"
import { FC } from "react"

const MainPage: FC = async () => {
  const dictionary = Dictate.en

  const { data: blogs } = await Drawer.getBlogSuggestions()

  const blueprint = new BluePrint(dictionary).owner()

  return <Content blueprint={blueprint}>
    <h1>
      {dictionary.pages.main.title}
    </h1>

    <p>
      {dictionary.pages.main.description}
    </p>

    <section>
      <h2 className="mb-4">
        {dictionary.pages.main.suggestedBlogPosts}
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map(blog => <BlogSuggestionCard
          key={blog.slug}
          {...blog}
        />)}
      </div>
    </section>
  </Content>
}

export default MainPage
import BlogCategories from "@/components/common/BlogCategories"
import BlogPosts from "@/components/common/BlogPosts"
import SearchBox from "@/components/common/SearchBox"
import Container from "@/components/layout/Container"
import Content from "@/components/layout/Content"
import Hero from "@/components/layout/Hero"
import BluePrint from "@/utilities/BluePrint"
import Collection from "@/utilities/Collection"
import Dictate from "@/utilities/Dictionary"
import Drawer from "@/utilities/Drawer"
import Environment from "@/utilities/Environment"
import Magnifier from "@/utilities/Magnifier"
import Message from "@/utilities/Message"
import Meta from "@/utilities/Meta"
import { IconChevronLeft } from "@tabler/icons-react"
import Link from "next/link"
import { redirect } from "next/navigation"
import { FC } from "react"

const BlogPostsPage: FC<PageComponent> = async ({
  searchParams
}) => {
  const dictionary = Dictate.en
  const magnifier = new Magnifier(await searchParams)

  const page = magnifier.number("page", 1)
  const search = magnifier.string("search", "")

  const { data: blogs, total } = await Drawer.getBlogPosts(
    page, Environment.PAGINATE_BY, search
  )

  const totalPages = Math.ceil(total / Environment.PAGINATE_BY)

  if (total > 0) {
    if (page < 1) redirect("/blogs")
    if (page > totalPages) redirect(`/blogs?page=${totalPages}`)
  }

  return <>
    <Hero>
      <h1>
        {dictionary.pages.blogs.title}
      </h1>

      <p>
        {dictionary.pages.blogs.description}
      </p>

      <SearchBox
        pathname="/blogs"
        searchParams={magnifier.toObject()}
      />
    </Hero>

    {(total === 0 && search)
      ? <Container className="grow flex flex-col gap-4
        justify-center items-center"
      >
        <h2>
          {Message.format(dictionary.pages.blogs.search.noResults, {
            search
          })}
        </h2>

        <Link
          href="/blogs"
          className="flex items-center gap-2 text-pinky-500"
        >
          <IconChevronLeft />

          {dictionary.pages.blogs.search.back}
        </Link>
      </Container>
      : <Content blueprint={new BluePrint(dictionary).blogPosts()}>
        {search &&
          <h2>
            {Message.format(dictionary.pages.blogs.search.results, {
              search
            })}
          </h2>
        }

        <BlogPosts
          blogs={blogs}
          searchParams={magnifier.toObject()}
          totalPages={totalPages}
        />

        <BlogCategories categories={await Collection.getCategories()} />
      </Content>
    }
  </>
}

export const generateMetadata = () => {
  return Meta.data("/blogs", Dictate.en)
}

export default BlogPostsPage
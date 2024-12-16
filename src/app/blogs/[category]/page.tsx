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
import { notFound, redirect } from "next/navigation"
import { FC } from "react"

type BlogCategoryPageProps = PageComponent<{
  category: string
}>

const BlogCategoryPage: FC<BlogCategoryPageProps> = async ({
  params, searchParams
}) => {
  const { category } = await params

  const categoryData = await Collection.getCategory(category)

  if (!categoryData.id) notFound()

  const dictionary = Dictate.en
  const magnifier = new Magnifier(await searchParams)

  const page = magnifier.number("page", 1)
  const search = magnifier.string("search", "")

  const { data: blogs, total } = await Drawer.getBlogPostsByCategory(
    category, page, Environment.PAGINATE_BY, search
  )

  const totalPages = Math.ceil(total / Environment.PAGINATE_BY)

  if (total > 0) {
    if (page < 1) redirect(`/blogs/${category}`)
    if (page > totalPages) redirect(`/blogs/${category}?page=${totalPages}`)
  }

  return <>
    <Hero>
      <h1>
        {Message.format(
          dictionary.pages.blogCategories.title, {
          category: categoryData.name
        })}
      </h1>

      <p>
        {Message.format(
          dictionary.pages.blogCategories.description, {
          category: categoryData.name
        })} {Collection.getBlogCountOfCategoryDescription(category)}
      </p>

      <SearchBox
        pathname={`/blogs/${category}`}
        searchParams={magnifier.toObject()}
      />
    </Hero>

    {(total === 0 && search)
      ? <Container className="grow flex flex-col gap-4
        justify-center items-center"
      >
        <h2>
          {Message.format(dictionary.pages.blogCategories.search.noResults, {
            search
          })}
        </h2>

        <Link
          href="/blogs"
          className="flex items-center gap-2 text-pinky-500"
        >
          <IconChevronLeft />

          {dictionary.pages.blogCategories.search.back}
        </Link>
      </Container>
      : <Content blueprint={new BluePrint(dictionary).blogPosts()}>
        {search &&
          <h2>
            {Message.format(dictionary.pages.blogCategories.search.results, {
              search
            })}
          </h2>
        }

        <BlogPosts
          blogs={blogs}
          category={category}
          searchParams={magnifier.toObject()}
          totalPages={totalPages}
        />
      </Content>
    }
  </>
}

export const generateMetadata = async ({
  params
}: BlogCategoryPageProps) => {
  const { category } = await params
  const dictionary = Dictate.en

  const categoryData = await Collection.getCategory(category)

  return Meta.data("/blogs/[category]", dictionary, {
    category: categoryData.name
  }, `/blogs/${category}`)
}

export default BlogCategoryPage
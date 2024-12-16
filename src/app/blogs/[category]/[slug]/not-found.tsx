import Countdown from "@/components/common/Countdown"
import Container from "@/components/layout/Container"
import Hero from "@/components/layout/Hero"
import Dictate from "@/utilities/Dictionary"
import Meta from "@/utilities/Meta"
import { FC } from "react"

const BlogNotFoundPage: FC = () => {
  const dictionary = Dictate.en

  return <>
    <Hero>
      <h1>
        🤷🏻 {dictionary.pages.blogs[404].title}
      </h1>

      <p>
        {dictionary.pages.blogs[404].description}
      </p>
    </Hero>

    <Container>
      <Countdown
        to="/blogs"
        message={dictionary.pages.blogs[404].redirect}
      />
    </Container>
  </>
}

export const metadata = Meta.blogNotFound(Dictate.en)


export default BlogNotFoundPage
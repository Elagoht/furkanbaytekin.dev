import Countdown from "@/components/common/Countdown"
import Container from "@/components/layout/Container"
import Hero from "@/components/layout/Hero"
import Dictate from "@/utilities/Dictionary"
import Meta from "@/utilities/Meta"
import { FC } from "react"

const CategoryNotFoundPage: FC = () => {
  const dictionary = Dictate.en

  return <>
    <Hero>
      <h1>
        🤷🏻 {dictionary.pages.blogCategories[404].title}
      </h1>

      <p>
        {dictionary.pages.blogCategories[404].description}
      </p>
    </Hero>

    <Container className="flex justify-center items-center grow">
      <Countdown
        to="/blogs"
        message={dictionary.pages.blogCategories[404].redirect}
      />
    </Container>
  </>
}

export const metadata = Meta.categoryNotFound(Dictate.en)

export default CategoryNotFoundPage
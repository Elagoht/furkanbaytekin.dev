import Dictate from "@/utilities/Dictionary"
import Drawer from "@/utilities/Drawer"
import Studio from "@/utilities/Studio"

const dictionary = Dictate.en

export const alt = dictionary.metadata.abstract
export const type = "image/png"
export const size = {
  width: 1200,
  height: 630
}

type GeneratorParams = {
  params: {
    category: string
    slug: string
  }
}

const generator = async ({ params }: GeneratorParams) => {
  const { slug } = params

  const blog = await Drawer.getBlogPost(slug)

  return Studio.coverImage(
    dictionary, blog.title
  )
}

export default generator
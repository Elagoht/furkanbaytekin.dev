import Dictate from "@/utilities/Dictionary"
import Studio from "@/utilities/Studio"

const dictionary = Dictate.en

export const alt = dictionary.metadata.abstract
export const type = "image/png"
export const size = {
  width: 1200,
  height: 630
}

const generator = () => Studio.coverImage(
  dictionary, dictionary.pages.blogs.metadata.title
)
export default generator
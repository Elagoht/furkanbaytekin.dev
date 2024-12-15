import Dictate from "@/utilities/Dictionary"
import Drawer from "@/utilities/Drawer"
import Spoon from "@/utilities/Spoon"

export const GET = async () => {
  const dictionary = Dictate.en

  const { data: blogs } = await Drawer.getBlogPosts()

  const feed = new Spoon(dictionary, blogs)

  return new Response(
    feed.xml(), {
    headers: { "Content-Type": "application/xml" }
  })
}
import { getBlog } from "@/services/blogs"
import Studio from "@/utility/Studio"

export const runtime = "edge"
export const contentType = "image/png"
export const size = { width: 1200, height: 630 }
export const alt = "Furkan Baytekin's blog post"

export const image = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const blog = await getBlog(slug)

  return Studio.openGraphImage(blog.title)
}

export default image
import Guardian, { GuardianError } from "@/utilities/Guardian"
import { revalidatePath, revalidateTag } from "next/cache"
import { NextRequest } from "next/server"

export const PATCH = (
  request: NextRequest
) => {
  try {
    const action = new Guardian(request.headers).askIntention()

    revalidateTag(action)
    revalidatePath("/")
    revalidatePath("/sitemap.xml")
    revalidatePath("/rss.xml")
    revalidatePath("/rss.json")
    revalidatePath("/blogs/[category]/[slug]", "page")

    return Response.json({
      message: `Webhook received, revalidation for ${action} tag fired`
    })
  }
  catch (error) {
    if (error instanceof GuardianError) {
      return Response.json({
        message: error.message
      }, {
        status: 400
      })
    }

    return Response.json({
      message: "An error occurred"
    }, {
      status: 500
    })
  }
}
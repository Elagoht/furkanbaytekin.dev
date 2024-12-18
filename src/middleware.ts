import { NextRequest, NextResponse } from "next/server"
import Observer from "./utilities/Observer"

const observer = Observer.getInstance()

const middleware = async (
  request: NextRequest
) => {
  await observer.observe(request)

  return NextResponse.next()
}

export default middleware

export const config = {
  matcher: "/blogs/:category/:slug"
}

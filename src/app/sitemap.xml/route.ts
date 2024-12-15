import Atlas from "@/utilities/Atlas"

const buildTime = new Date()

export const GET = async () => new Response(
  await Atlas.sitemapDotXML(buildTime), {
  headers: { "Content-Type": "application/xml" }
})
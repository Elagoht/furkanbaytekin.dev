import { MetadataRoute } from "next"
import Environment from "../Environment"
import Drawer from "../Drawer"

class Atlas {
  public static async sitemapDotXML(
    buildTime: Date
  ): Promise<string> {
    return Atlas.sitemapToXML(
      await Atlas.sitemap(buildTime)
    )
  }

  private static async sitemap(
    buildTime: Date
  ): Promise<MetadataRoute.Sitemap> {
    const { data } = await Drawer.getBlogPosts()
    const staticUrls: string[] = [
      "", // Home page
      "/blog"
    ]

    const blogs: MetadataRoute.Sitemap = data.map((item: BlogCardData) => ({
      url: `${Environment.HOST_URL}/blogs/${item.slug}`,
      lastModified: new Date(item.updatedAt).toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    }))

    const staticRoutes: MetadataRoute.Sitemap = staticUrls.map((url) => ({
      url: `${Environment.HOST_URL}/${url}`,
      lastModified: buildTime.toISOString(),
      changeFrequency: "yearly",
      priority: 0.8
    }))

    return [
      ...staticRoutes,
      ...blogs
    ]
  }

  private static sitemapToXML(sitemap: MetadataRoute.Sitemap): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${sitemap.map((item) => `<url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>${item.alternates?.languages
        ? Object.entries(
          item.alternates.languages
        ).map(([lang, url]) => `
    <xhtml:link rel="alternate" hreflang="${lang}" href="${url}"/>`).join("")
        : ""}
  </url>
  `).join("").trim()}
</urlset>`
  }
}

export default Atlas
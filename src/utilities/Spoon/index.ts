import { Feed } from "feed"
import Environment from "../Environment"

class Spoon {
  public data: Feed

  public constructor(
    dictionary: Dictionary,
    blogs: BlogCardData[]
  ) {
    this.data = new Feed({
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      id: `${Environment.HOST_URL}`,
      link: `${Environment.HOST_URL}`,
      language: dictionary.metadata.lang,
      image: `${Environment.HOST_URL}/android-chrome-512x512.png`,
      favicon: `${Environment.HOST_URL}/favicon.ico`,
      copyright: "All rights reversed!",
      generator: dictionary.metadata.title,
      author: {
        name: dictionary.metadata.author,
        email: dictionary.metadata.email,
        link: Environment.HOST_URL
      }
    })

    blogs.forEach(blog => {
      this.data.addItem({
        title: blog.title,
        link: new URL(
          `/blogs/${blog.slug}`,
          Environment.HOST_URL
        ).toString(),
        date: new Date(blog.createdAt),
        published: new Date(blog.createdAt),
        description: blog.spot,
        author: [{
          name: dictionary.metadata.author,
          email: dictionary.metadata.email,
          link: Environment.HOST_URL
        }],
        copyright: "GNU Free Documentation License",
        image: new URL(
          `/blogs/${blog.slug}/opengraph-image`,
          Environment.HOST_URL
        ).toString(),
        category: [{ name: blog.category }]
      })
    })

    this.data.addCategory("Blog")
    this.data.addCategory("Software")
    this.data.addCategory("Wiki")
  }

  public xml(): string {
    return this.data.rss2()
  }

  public json(): string {
    return this.data.json1()
  }
}

export default Spoon
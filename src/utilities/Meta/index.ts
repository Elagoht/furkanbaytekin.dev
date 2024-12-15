import { Metadata } from "next"
import Environment from "../Environment"
import Message from "../Message"
import Picture from "../Picture"

class Meta {
  public static readonly MAX_TITLE_LENGTH = 66
  public static readonly MIN_TITLE_LENGTH = 40
  public static readonly MAX_DESCRIPTION_LENGTH = 155
  public static readonly MIN_DESCRIPTION_LENGTH = 70
  public static readonly MAX_SPOT_LENGTH = 150

  public blogData(
    blog: BlogDocumentData
  ): Metadata {
    const title = Message.truncate(
      blog.title,
      Meta.MAX_TITLE_LENGTH
    )
    const description = Message.truncate(
      blog.description,
      Meta.MAX_DESCRIPTION_LENGTH,
      Meta.MIN_DESCRIPTION_LENGTH,
      blog.spot
    )

    return {
      title: Message.truncate(
        blog.title,
        Meta.MAX_TITLE_LENGTH,
        Meta.MIN_TITLE_LENGTH
      ),
      description: Message.truncate(
        blog.description,
        Meta.MAX_DESCRIPTION_LENGTH,
        Meta.MIN_DESCRIPTION_LENGTH
      ),
      abstract: blog.spot,
      category: blog.category,
      alternates: {
        canonical: `${Environment.HOST_URL}/blogs/${blog.slug}`
      },
      openGraph: {
        title,
        description,
        type: "article",
        images: [{
          url: Picture.resolve(blog.cover),
          width: 1280,
          height: 720
        }]
      },
      twitter: {
        title,
        description,
        card: "summary_large_image",
        site: "@abonesepeti",
        creator: "@abonesepeti",
        images: [{
          url: Picture.resolve(blog.cover),
          width: 1280,
          height: 720
        }]
      }
    }
  }

  public static blogNotFound(
    dictionary: Dictionary
  ): Metadata {
    return {
      title: dictionary.pages.blogs["404"].title,
      description: dictionary.pages.blogs["404"].description,
      openGraph: {
        title: dictionary.pages.blogs["404"].title,
        description: dictionary.pages.blogs["404"].description,
        type: "website",
        images: [{
          url: `${Environment.HOST_URL}/opengraph-image`,
          width: 1200,
          height: 630
        }]
      },
      twitter: {
        title: dictionary.pages.blogs["404"].title,
        description: dictionary.pages.blogs["404"].description,
        card: "summary_large_image",
        site: "@abonesepeti",
        creator: "@abonesepeti",
        images: [{
          url: `${Environment.HOST_URL}/twitter-image`,
          width: 1200,
          height: 630
        }]
      }
    }
  }


  public static data = (
    path: SitePaths,
    dictionary: Dictionary
  ): Metadata => {
    if (!Meta.pathMetadataMaps(dictionary)[path])
      throw new MetadataError(`${path} is not valid`)
    return {
      ...Meta.pathMetadataMaps(dictionary)[path],
      alternates: {
        // Self-referencing canonical URL is a good practice
        canonical: `${Environment.HOST_URL}/${path}`
      }
    }
  }

  private static readonly pathMetadataMaps = (
    dictionary: Dictionary
  ): Record<SitePaths, Metadata> => ({
    "/": {},
    "/blogs": {
      title: dictionary.pages.blogs.title,
      description: dictionary.pages.blogs.description,
    },
    "/contact": {
      title: dictionary.pages.contact.title,
      description: dictionary.pages.contact.description,
    },
    "/my-book": {
      title: dictionary.pages.myBook.title,
      description: dictionary.pages.myBook.description,
    },
    "/projects": {
      title: dictionary.pages.projects.title,
      description: dictionary.pages.projects.description,
    },
  })
}

class MetadataError extends Error {
  public constructor(path: string) {
    super(`Metadata not found for path: ${path}`)
  }
}

export default Meta
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

  public static blogData(
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
        canonical: `${Environment.HOST_URL}/blogs/${blog.category}/${blog.slug}`
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
          url: `${Environment.HOST_URL}/opengraph-image`,
          width: 1200,
          height: 630
        }]
      }
    }
  }


  public static data = (
    path: SitePaths,
    dictionary: Dictionary,
    messageModifier?: Record<string, string>,
    customPath?: string
  ): Metadata => {
    if (!Meta.pathMetadataMaps(dictionary)[path])
      throw new MetadataError(`${path} is not valid`)
    return {
      ...Meta.pathMetadataMaps(dictionary)[path],
      title: Message.format(
        String(Meta.pathMetadataMaps(dictionary)[path].title),
        messageModifier
      ),
      description: Message.format(
        String(Meta.pathMetadataMaps(dictionary)[path].description),
        messageModifier
      ),
      alternates: {
        // Self-referencing canonical URL is a good practice
        canonical: `${Environment.HOST_URL}${customPath ?? path}`
      },
      openGraph: {
        title: Message.format(
          String(Meta.pathMetadataMaps(dictionary)[path].title),
          messageModifier
        ),
        description: Message.format(
          String(Meta.pathMetadataMaps(dictionary)[path].description),
          messageModifier
        ),
        type: "website",
        images: [{
          url: `${Environment.HOST_URL}${customPath ?? path}/opengraph-image`,
          width: 1200,
          height: 630
        }]
      }
    }
  }

  private static readonly pathMetadataMaps = (
    dictionary: Dictionary
  ): Record<SitePaths, Metadata> => ({
    "/": {
      title: dictionary.pages.main.metadata.title,
      description: dictionary.pages.main.metadata.description
    },
    "/blogs": {
      title: dictionary.pages.blogs.metadata.title,
      description: dictionary.pages.blogs.metadata.description
    },
    "/contact": {
      title: dictionary.pages.contact.metadata.title,
      description: dictionary.pages.contact.metadata.description
    },
    "/book": {
      title: dictionary.pages.myBook.metadata.title,
      description: dictionary.pages.myBook.metadata.description
    },
    "/projects": {
      title: dictionary.pages.projects.metadata.title,
      description: dictionary.pages.projects.metadata.description
    },
    "/blogs/[category]": {
      title: dictionary.pages.blogCategories.metadata.title,
      description: dictionary.pages.blogCategories.metadata.description
    }
  })
}

class MetadataError extends Error {
  public constructor(path: string) {
    super(`Metadata not found for path: ${path}`)
  }
}

export default Meta
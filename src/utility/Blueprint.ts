import { BlogPosting, Person, WithContext } from "schema-dts"

class Blueprint {
  public static ofMe(): WithContext<Person> {
    return Blueprint.FurkanBaytekin
  }

  public static ofBlogPost(
    blogPost: BlogDocumentData
  ): WithContext<BlogPosting> {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: blogPost.title,
      url: `${process.env.HOST_URL}/blogs/${blogPost.slug}`,
      dateCreated: blogPost.createdAt,
      datePublished: blogPost.createdAt,
      dateModified: blogPost.updatedAt,
      abstract: blogPost.spot,
      description: blogPost.description,
      image: `${process.env.BLOG_API_URL}${blogPost.cover}`,
      inLanguage: "en",
      about: blogPost.category,
      keywords: blogPost.keywords.split(","),
      license: "https://www.gnu.org/licenses/fdl-1.3.html#license-text",
      isAccessibleForFree: true,
      articleBody: blogPost.content,
      associatedMedia: {
        "@type": "ImageObject",
        url: `${process.env.BLOG_API_URL}${blogPost.cover}`
      },
      author: Blueprint.FurkanBaytekin,
      publisher: {
        "@type": "Person",
        name: "Furkan Baytekin"
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${process.env.HOST_URL}/blog/${blogPost.slug}`
      },
      contentRating: "7+",
      contributor: {
        "@type": "Person",
        name: "Furkan Baytekin"
      },
      copyrightHolder: {
        "@type": "Person",
        name: "Furkan Baytekin"
      },
      creator: {
        "@type": "Person",
        name: "Furkan Baytekin"
      },
      editor: {
        "@type": "Person",
        name: "Furkan Baytekin"
      },
      encodingFormat: "text/html",
      genre: blogPost.category,
      isFamilyFriendly: true,
      learningResourceType: "blog",
      mentions: blogPost.keywords.split(","),
      wordCount: blogPost.content.split(/\s+/).length,
    }
  }

  private static readonly FurkanBaytekin: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Furkan Baytekin",
    givenName: "Furkan",
    familyName: "Baytekin",
    url: process.env.HOST_URL,
    image: `${process.env.HOST_URL}/assets/images/me.png`,
    sameAs: [
      "https://x.com/furkanbytekin",
      "http://github.com/Elagoht",
      "https://linkedin.com/in/furkan-baytekin"
    ],
    jobTitle: "Software Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ankara",
      addressRegion: "TR",
      addressCountry: "Türkiye"
    },
    email: "furkanbaytekin@gmail.com",
    birthDate: "2000-19-03",
    description: "A self-taught software developer, who is passionate about web technologies and open-source.",
    gender: "Male",
    knowsLanguage: ["Turkish", "English"]
  }
}

export default Blueprint
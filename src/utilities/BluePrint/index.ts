import { BlogPosting, Person, WithContext } from "schema-dts"

class BluePrint {
  private dictionary: Dictionary

  public constructor(dictionary: Dictionary) {
    this.dictionary = dictionary
  }

  public ofBlogPost(
    blogPost: BlogDocumentData,
  ): WithContext<BlogPosting> {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: blogPost.title,
      url: new URL(`/blogs/${blogPost.slug}`, process.env.HOST_URL).toString(),
      dateCreated: blogPost.createdAt,
      datePublished: blogPost.createdAt,
      dateModified: blogPost.updatedAt,
      abstract: blogPost.spot,
      description: blogPost.description,
      image: new URL(blogPost.cover, process.env.BLOG_API_URL).toString(),
      inLanguage: this.dictionary.metadata.lang,
      about: blogPost.category,
      keywords: blogPost.keywords.split(","),
      license: "https://www.gnu.org/licenses/fdl-1.3.html#license-text",
      isAccessibleForFree: true,
      articleBody: blogPost.content,
      associatedMedia: {
        "@type": "ImageObject",
        url: `${process.env.BLOG_API_URL}${blogPost.cover}`
      },
      author: this.owner(),
      publisher: {
        "@type": "Person",
        name: this.dictionary.metadata.author
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${process.env.HOST_URL}/blog/${blogPost.slug}`
      },
      contentRating: "7+",
      contributor: {
        "@type": "Person",
        name: this.dictionary.metadata.author
      },
      copyrightHolder: {
        "@type": "Person",
        name: this.dictionary.metadata.author
      },
      creator: {
        "@type": "Person",
        name: this.dictionary.metadata.author
      },
      editor: {
        "@type": "Person",
        name: this.dictionary.metadata.author
      },
      encodingFormat: "text/html",
      genre: blogPost.category,
      isFamilyFriendly: true,
      learningResourceType: "blog",
      mentions: blogPost.keywords.split(","),
      wordCount: blogPost.content.split(/\s+/).length,
    }
  }

  public owner(): WithContext<Person> {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: this.dictionary.metadata.author,
      url: process.env.HOST_URL,
      image: new URL("/assets/images/me.png", process.env.HOST_URL).toString(),
      sameAs: [
        "https://x.com/furkanbytekin",
        "http://github.com/Elagoht",
        "https://linkedin.com/in/furkan-baytekin"
      ],
      jobTitle: this.dictionary.metadata.job,
      email: this.dictionary.metadata.email,
      birthDate: this.dictionary.metadata.birthday,
      description: this.dictionary.metadata.description,
      gender: this.dictionary.metadata.gender
    }
  }
}

export default BluePrint
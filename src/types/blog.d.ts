type BlogCardData = {
  title: string
  slug: string
  spot: string
  cover: string
  createdAt: string
  updatedAt: string
  category: string
}

type BlogDocumentData = {
  id: string
  title: string
  slug: string
  content: string
  keywords: string
  description: string
  spot: string
  cover: string
  published: boolean
  createdAt: string
  updatedAt: string
  readTime: number
  readCount: number
  category: string
}

type BlogListData = {
  id: string
  slug: string
  title: string
  cover: string
  category: string
}

type BlogsResponse<Type = BlogCardData> = {
  data: Type[]
  page: number
  take: number
  total: number
}

type BlogSlugs = string[]
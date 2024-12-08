type BlogCardData = {
  title: string
  slug: string
  spot: string
  cover: string
  createdAt: string
  updatedAt: string
  category: string
}

type BlogsResponse = {
  data: BlogCardData[]
  page: number
  take: number
  total: number
}
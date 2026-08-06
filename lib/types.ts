export type TBlogPost = {
  slug: string
  title: string
  date: string
  updated?: string
  image?: string
  excerpt?: string
  tags: string[]
  published: boolean
  content: string
  featured: boolean
  readingTime: number
}

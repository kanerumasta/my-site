export type TBlogPost = {
slug: string
  title: string
  date: string
  image?: string
  excerpt?: string
  tags?: string[]
  published?: boolean
  content: string
  featured?: boolean
}
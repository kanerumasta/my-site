import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { TBlogPost } from './types'

const postsDirectory = path.join(process.cwd(), 'content')

export function getPosts(): TBlogPost[] {
  const files = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.mdx')) 

  const posts = files.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    const { data, content } = matter(fileContent)

    return {
      slug: filename.replace('.mdx', ''),
      title: data.title ?? 'No title',
      date: data.date ? new Date(data.date).toISOString() : '',
      image: data.image ?? '',
      excerpt: data.excerpt ?? '',
      tags: data.tags ?? [],
      published: data.published ?? true,
      content,
    }
  })

  const publishedPosts = posts.filter((post) => post.published)

  publishedPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return publishedPosts
}
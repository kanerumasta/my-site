import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { TBlogPost } from './types'

const postsDirectory = path.join(process.cwd(), 'content')

function requiredString(value: unknown, field: string, filename: string) {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`${filename}: frontmatter field "${field}" must be a non-empty string`)
  }
  return value.trim()
}

function toIsoDate(value: unknown, field: string, filename: string) {
  const raw = requiredString(value, field, filename)
  const date = new Date(raw)

  if (Number.isNaN(date.getTime())) {
    throw new Error(`${filename}: frontmatter field "${field}" is not a valid date`)
  }

  return date.toISOString()
}

function readingTime(content: string) {
  const words = content
    .replace(/<[^>]+>/g, ' ')
    .replace(/[^\p{L}\p{N}'’-]+/gu, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length

  return Math.max(1, Math.ceil(words / 220))
}

export function getPosts(): TBlogPost[] {
  const files = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.mdx')) 

  const posts = files.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    const { data, content } = matter(fileContent)

    if (data.tags !== undefined && (!Array.isArray(data.tags) || data.tags.some((tag) => typeof tag !== 'string'))) {
      throw new Error(`${filename}: frontmatter field "tags" must be an array of strings`)
    }

    return {
      slug: filename.replace('.mdx', ''),
      title: requiredString(data.title, 'title', filename),
      date: toIsoDate(data.date, 'date', filename),
      updated: data.updated ? toIsoDate(data.updated, 'updated', filename) : undefined,
      image: typeof data.image === 'string' ? data.image : undefined,
      excerpt: requiredString(data.excerpt, 'excerpt', filename),
      tags: (data.tags ?? []) as string[],
      published: data.published === true,
      featured: data.featured === true,
      content,
      readingTime: readingTime(content),
      format: (data.format === 'note' ? 'note' : 'article') as TBlogPost['format'],
      series: typeof data.series === 'string' ? data.series.trim() : undefined,
    }
  })

  const publishedPosts = posts.filter((post) => post.published)

  publishedPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return publishedPosts
}

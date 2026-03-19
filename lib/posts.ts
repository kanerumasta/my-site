import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content')

export function getPosts() {
  const files = fs.readdirSync(postsDirectory)

  return files.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    const { data, content } = matter(fileContent)

    return {
        slug: filename.replace('.mdx', ''),
        title: data.title || 'No title',
        date: data.date || '',
        image: data.image, 
        excerpt: data.excerpt || '',
        content,
        }
  })
}
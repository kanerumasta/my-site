import { getPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import BlogLayout from '@/components/BlogLayout'
import { Note } from '@/components/Note'
import CodeBlock from '@/components/CodeBlock'
import { BlogImage } from '@/components/BlogImage'

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const posts = getPosts()
  const post = posts.find(p => p.slug === slug)

  if (!post) return notFound()

  // Define your custom components
  const components = {
    Note,
    CodeBlock,
    BlogImage,
  }

  return (
    <BlogLayout post={post}>
      <MDXRemote 
        source={post.content} 
        components={components}  // Pass the components here
      />
    </BlogLayout>
  )
}
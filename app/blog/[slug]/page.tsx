import { getPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import BlogLayout from '@/components/BlogLayout'

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const posts = getPosts()
  const post = posts.find(p => p.slug === slug)

  if (!post) return notFound()

  return (
        <BlogLayout post={post}>
            <MDXRemote source={post.content} />
    </BlogLayout>
  )
}
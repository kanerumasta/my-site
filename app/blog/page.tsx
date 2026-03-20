import BlogCard from '@/components/BlogCard'
import { getPosts } from '@/lib/posts'

export default function BlogPage() {
  const posts = getPosts()

  return (
    <div>
      <h1>Blog</h1>
      <div className='space-y-3'>
      {posts.map((post) => (
        <BlogCard
            key={post.slug}
            post={post}
          />
          
      ))}
      {posts.map((post) => (
        <BlogCard
            key={post.slug}
            post={post}
          />
          
      ))}
      {posts.map((post) => (
        <BlogCard
            key={post.slug}
            post={post}
          />
          
      ))}
      </div>
    </div>
  )
}
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
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt='This is the one that we are looking for..... '
          />
          
      ))}
      {posts.map((post) => (
        <BlogCard
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt='This is the one that we are looking for..... '
          />
          
      ))}
      {posts.map((post) => (
        <BlogCard
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt='This is the one that we are looking for..... '
          />
          
      ))}
      </div>
    </div>
  )
}
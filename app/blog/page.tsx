import BlogTabs from '@/components/BlogTabs'
import { getPosts } from '@/lib/posts'

export default function BlogPage() {
  const posts = getPosts()

  return (
    <div className="py-8">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Build Logs</h1>
        <p className="text-gray-500 text-sm">
          Thoughts, learnings, and things I’m building.
        </p>
      </div>

      <BlogTabs posts={posts} />

    </div>
  )
}
import { TBlogPost } from "@/lib/types"
import Link from "next/link"



type TBlogCard = Pick<
  TBlogPost,
  'slug' | 'title' | 'date' | 'excerpt' | 'image'
>

type BlogCardProps = {
  post: TBlogCard
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
  href={`/blog/${post.slug}`}
  className="block border-b flex justify-between border-white/10 py-5 hover:shadow-md transition"

>

    <div>
        <div className="flex items-center space-x-2 mb-3">
            <div className="h-6 w-6 rounded-full bg-blue-300"/>
            <p>Mac Ibale</p>
        </div>
      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>

      <p className="text-md text-gray-500 mb-3">{new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })}</p>

      {post.excerpt && (
        <p className="text-gray-600 text-md line-clamp-2">
          {post.excerpt}
        </p>
      )}
      </div>
      <div className="">
        {post.image && (
  <img
    src={post.image}
    alt={post.title}
    className="w-[200px] rounded-xl mb-6"
  />
)}
      </div>

    </Link>
  )
}
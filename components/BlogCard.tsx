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
  className="block border-b py-3  border-foreground/10 hover:scale-101 transition"

>
        <div className="flex items-center space-x-2 mb-3">
            <div className="h-6 w-6 rounded-md bg-blue-300"/>
            <p>Mac Ibale</p>
        </div>
<div className="flex justify-between gap-6">
    <div>
      <h3 className="md:text-xl text-lg font-semibold mb-2">{post.title}</h3>

      <p className="text-sm md:text-md text-gray-500 mb-3">{new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })}</p>

      {post.excerpt && (
        <p className="text-gray-600 text-sm md:text-md line-clamp-2">
          {post.excerpt}
        </p>
      )}
      </div>
      <div className="">
        {post.image && (
  <img
    src={post.image}
    alt={post.title}
    className="min-w-25 max-w-38 md:max-w-50 rounded-xl mb-6"
  />
)}
      </div>
</div>
    </Link>
  )
}
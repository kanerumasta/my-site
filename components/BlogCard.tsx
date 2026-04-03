import { TBlogPost } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"



type TBlogCard = Pick<
  TBlogPost,
  'slug' | 'title' | 'date' | 'excerpt' | 'image' | 'tags'
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
            <div className="bg-green-300 rounded-full w-6 h-6 overflow-hidden">
              <Image src={"/images/hero.png"} alt="Author" width={24} height={24}/>
            </div>
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
        <p className="text-foreground/75 text-sm md:text-md line-clamp-2 mb-4">
          {post.excerpt}
        </p>
      )}
      {post.tags && post.tags.map((tag, index) => (
        <span key={index} className="text-xs p-1 px-3 border text-foreground/80 rounded-full mr-2 border-foreground/30">
          #{tag}
        </span>
      ))}
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
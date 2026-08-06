import type { TBlogPost } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"

type BlogCardProps = {
  post: Pick<TBlogPost, 'slug' | 'title' | 'date' | 'excerpt' | 'image' | 'tags' | 'readingTime'>
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  }).format(new Date(post.date))

  return (
    <article className="border-b border-foreground/10 py-7">
      <Link href={`/blog/${post.slug}`} className="group grid gap-5 sm:grid-cols-[1fr_180px] sm:items-center">
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm text-foreground/50">
            <time dateTime={post.date}>{formattedDate}</time><span aria-hidden="true">·</span><span>{post.readingTime} min read</span>
          </div>
          <h2 className="text-xl font-semibold tracking-tight group-hover:text-primary md:text-2xl">{post.title}</h2>
          {post.excerpt && <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-foreground/65 md:text-base">{post.excerpt}</p>}
          {post.tags.length > 0 && <ul className="mt-4 flex flex-wrap gap-2" aria-label="Post topics">{post.tags.map((tag) => <li key={tag} className="text-xs text-foreground/50">#{tag}</li>)}</ul>}
        </div>
        {post.image && <div className="relative order-first aspect-[16/9] overflow-hidden rounded-xl bg-foreground/5 sm:order-last"><Image src={post.image} alt="" fill sizes="(min-width: 640px) 180px, 100vw" className="object-cover transition duration-300 group-hover:scale-[1.02]" /></div>}
      </Link>
    </article>
  )
}

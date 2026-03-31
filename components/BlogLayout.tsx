import { TBlogPost } from "@/lib/types";

type BlogLayoutProps = {
  post: TBlogPost
  children: React.ReactNode
}

export default function BlogLayout({ post, children }: BlogLayoutProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      
      {/* Header */}
      <div className="mb-10 border-b border-foreground/20 pb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
          {post.title}
        </h1>
        <h2 className="text-xl text-foreground/60 mt-2">
          {post.excerpt}
        </h2>

        <p className="text-gray-500 mt-3 text-sm">
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
      </div>

      {/* Cover Image */}
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-xl my-8 shadow-md"
        />
      )}

      {/* Content */}
      <article className="prose prose-lg max-w-none dark:prose-invert">
        {children}
      </article>
    </div>
  )
}
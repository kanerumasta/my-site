import { TBlogPost } from "@/lib/types";

type BlogLayoutProps = {
  post: TBlogPost
  children: React.ReactNode
}

export default function BlogLayout(
  {post, children}: BlogLayoutProps
) {
  return (
    <div className="">
      
      {/* Header */}
      <div className="mb-12 border-b pb-6">
        <h1 className="text-5xl font-extrabold">{post.title}</h1>
        <p className="text-gray-500 mt-3">{new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })}</p>
        </div>
    
    {post.image && (
  <img
    src={post.image}
    alt={post.title}
    className="w-full rounded-md md:rounded-xl my-8"
  />
)}

      {/* Content */}
      <article className="prose">
        {children}
      </article>
    </div>
  )
}
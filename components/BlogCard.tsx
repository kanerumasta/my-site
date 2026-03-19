type BlogCardProps = {
  title: string
  date: string
  slug: string
  excerpt?: string
}

export default function BlogCard({ title, date, slug, excerpt }: BlogCardProps) {
  return (
    <a
      href={`/blog/${slug}`}
      className="block border-b-[1px] border-white/10 py-5 hover:shadow-md transition"
    >
        <div className="flex items-center space-x-2 mb-3">
            <div className="h-6 w-6 rounded-full bg-blue-300"/>
            <p>Mac Ibale</p>
        </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-sm text-gray-500 mb-3">{date}</p>

      {excerpt && (
        <p className="text-gray-600 text-sm line-clamp-2">
          {excerpt}
        </p>
      )}
    </a>
  )
}
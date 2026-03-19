export default function BlogLayout({ children, title, date, image}:{children: React.ReactNode, title:string, date: string, image:string}) {
  return (
    <div className="">
      
      {/* Header */}
      <div className="mb-12 border-b pb-6">
        <h1 className="text-5xl font-extrabold">{title}</h1>
        <p className="text-gray-500 mt-3">{date}</p>
        </div>
    {image && (
  <img
    src={image}
    alt={title}
    className="w-full rounded-xl mb-6"
  />
)}

      {/* Content */}
      <article className="prose">
        {children}
      </article>
    </div>
  )
}
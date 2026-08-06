import Image from "next/image"
import Link from "next/link"
import type { TBlogPost } from "@/lib/types"
import { siteConfig } from "@/lib/site"
import ReadingProgress from "@/components/ReadingProgress"

type BlogLayoutProps = {
  post: TBlogPost
  relatedPosts: TBlogPost[]
  children: React.ReactNode
}

export default function BlogLayout({ post, relatedPosts, children }: BlogLayoutProps) {
  const date = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(post.date))

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <ReadingProgress />
      <article id="blog-article">
        <header className="mb-10">
          <Link href="/blog" className="text-sm text-foreground/55 hover:text-foreground">← All build logs</Link>
          {post.tags.length > 0 && <ul className="mt-8 flex flex-wrap gap-2" aria-label="Post topics">{post.tags.map((tag) => <li key={tag} className="rounded-full border border-foreground/15 px-3 py-1 text-xs text-foreground/60">{tag}</li>)}</ul>}
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">{post.title}</h1>
          <p className="mt-4 text-xl leading-relaxed text-foreground/60">{post.excerpt}</p>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-foreground/50">
            <span>By {siteConfig.author}</span><span aria-hidden="true">·</span>
            <time dateTime={post.date}>{date}</time><span aria-hidden="true">·</span>
            <span>{post.readingTime} min read</span>
          </div>
        </header>

        {post.image && <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl bg-foreground/5"><Image src={post.image} alt={`Cover image for ${post.title}`} fill priority sizes="(min-width: 768px) 768px, 100vw" className="object-cover" /></div>}

        <div className="prose prose-lg max-w-none dark:prose-invert">{children}</div>
      </article>

      <aside className="mt-16 rounded-2xl border border-primary/20 bg-primary/[0.05] p-7" aria-labelledby="article-cta">
        <h2 id="article-cta" className="text-xl font-semibold">Building a workflow where the edge cases matter?</h2>
        <p className="mt-2 leading-relaxed text-foreground/65">I work on document automation, AI-assisted workflows, integrations, and internal tools.</p>
        <Link href="/services" className="mt-5 inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">See how I can help</Link>
      </aside>

      {relatedPosts.length > 0 && <aside className="mt-14" aria-labelledby="related-posts"><h2 id="related-posts" className="text-2xl font-bold">Related posts</h2><ul className="mt-4 divide-y divide-foreground/10">{relatedPosts.map((related) => <li key={related.slug} className="py-4"><Link className="font-medium hover:text-primary" href={`/blog/${related.slug}`}>{related.title}</Link><p className="mt-1 text-sm text-foreground/55">{related.excerpt}</p></li>)}</ul></aside>}
    </main>
  )
}

import Image from "next/image"
import Link from "next/link"
import type { TBlogPost } from "@/lib/types"
import { siteConfig } from "@/lib/site"
import ReadingProgress from "@/components/ReadingProgress"
import NewsletterSignup from "@/components/NewsletterSignup"
import ShareArticle from "@/components/ShareArticle"
import ArticleReaction from "@/components/ArticleReaction"
import BlogCard from "@/components/BlogCard"

type BlogLayoutProps = {
  post: TBlogPost
  relatedPosts: TBlogPost[]
  children: React.ReactNode
}

export default function BlogLayout({ post, relatedPosts, children }: BlogLayoutProps) {
  const date = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(post.date))
  const articleUrl = `${siteConfig.url}/blog/${post.slug}`
  const prompt = post.tags.includes('AI')
    ? 'Where do you draw the line between AI judgment and predictable code?'
    : post.tags.includes('Work') || post.tags.includes('Enterprise')
      ? 'What helps you do your best work when the environment feels restrictive?'
      : 'What is one lesson from your own work that you would add?'

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

        <aside className="mt-12 rounded-2xl border-l-4 border-primary bg-primary/[0.055] p-6" aria-labelledby="your-turn">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Your turn</p>
          <h2 id="your-turn" className="mt-2 text-xl font-semibold">{prompt}</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/60">Keep the question with you—or share the article with someone whose answer you would like to hear.</p>
        </aside>

        <ArticleReaction slug={post.slug} />
        <ShareArticle title={post.title} url={articleUrl} />
      </article>

      <div className="mt-16">
        <NewsletterSignup afterArticle />
      </div>

      <aside className="mt-8 rounded-2xl border border-primary/20 bg-primary/[0.05] p-7" aria-labelledby="article-cta">
        <h2 id="article-cta" className="text-xl font-semibold">Building a workflow where the edge cases matter?</h2>
        <p className="mt-2 leading-relaxed text-foreground/65">I work on document automation, AI-assisted workflows, integrations, and internal tools.</p>
        <Link href="/services" className="mt-5 inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">See how I can help</Link>
      </aside>

      {relatedPosts.length > 0 && <aside className="mt-14" aria-labelledby="related-posts"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Keep reading</p><h2 id="related-posts" className="mt-2 text-2xl font-bold">Related posts</h2><div className="mt-2">{relatedPosts.map((related) => <BlogCard key={related.slug} post={related} />)}</div></aside>}
    </main>
  )
}

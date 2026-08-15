import type { Metadata } from 'next'
import BlogTabs from '@/components/BlogTabs'
import NewsletterSignup from '@/components/NewsletterSignup'
import { getPosts } from '@/lib/posts'
import BlogCard from '@/components/BlogCard'

export const metadata: Metadata = {
  title: 'Build Logs',
  description: 'Practical case studies and notes about automation, AI workflows, document processing, and software engineering.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Build Logs',
    description: 'Practical case studies and notes about building reliable software systems.',
    url: '/blog',
  },
}

export default function BlogPage() {
  const posts = getPosts()
  const startHere = posts.filter(post => post.featured).slice(0, 3)
  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <header className="mb-8">
        <h1 className="mb-3 text-4xl font-bold tracking-tight">Build Logs</h1>
        <p className="text-foreground/60">Practical notes, architecture decisions, and lessons from things I’m building.</p>
      </header>
      {startHere.length > 0 && <section className="mb-14" aria-labelledby="start-here">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">New here?</p>
        <h2 id="start-here" className="mt-2 text-2xl font-bold tracking-tight">Start here</h2>
        <p className="mt-2 text-foreground/55">Three pieces that best explain what I write about.</p>
        <div className="mt-3">{startHere.map(post => <BlogCard key={post.slug} post={post} />)}</div>
      </section>}
      <section aria-labelledby="all-writing"><h2 id="all-writing" className="mb-1 text-2xl font-bold tracking-tight">Explore all writing</h2><p className="mb-5 text-sm text-foreground/50">Choose a topic or browse everything.</p><BlogTabs posts={posts} /></section>
      <div className="mt-14">
        <NewsletterSignup />
      </div>
    </main>
  )
}

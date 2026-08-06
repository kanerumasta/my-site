import type { Metadata } from 'next'
import BlogTabs from '@/components/BlogTabs'
import { getPosts } from '@/lib/posts'

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
  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <header className="mb-8">
        <h1 className="mb-3 text-4xl font-bold tracking-tight">Build Logs</h1>
        <p className="text-foreground/60">Practical notes, architecture decisions, and lessons from things I’m building.</p>
      </header>
      <BlogTabs posts={getPosts()} />
    </main>
  )
}

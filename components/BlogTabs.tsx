'use client'

import { useState } from 'react'
import BlogCard from './BlogCard'
import { TBlogPost } from '@/lib/types'

export default function BlogTabs({ posts }: { posts: TBlogPost[] }) {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'AI', label: 'AI' },
    { id: 'Software Engineering', label: 'Engineering' },
    { id: 'Work', label: 'Work' },
    { id: 'notes', label: 'Quick notes' },
  ] as const
  const [activeTab, setActiveTab] = useState<string>('all')
  const visiblePosts = posts.filter(post => activeTab === 'all' || (activeTab === 'notes' ? post.format === 'note' : post.tags.includes(activeTab)))

  return (
    <>
      {/* TABS */}
      <div role="tablist" aria-label="Filter posts" className="sticky top-15 z-20 mb-8 flex gap-2 overflow-x-auto border-b border-foreground/10 bg-background/90 pt-2 backdrop-blur">
        {filters.map(filter => <button key={filter.id} role="tab" aria-selected={activeTab === filter.id} onClick={() => setActiveTab(filter.id)} className={`shrink-0 cursor-pointer px-2 pb-2 text-sm ${activeTab === filter.id ? 'border-b-2 border-primary font-medium text-foreground' : 'text-foreground/50'}`}>{filter.label}</button>)}
      </div>

      {/* CONTENT */}
      <div role="tabpanel" className="px-2">
        {visiblePosts.length > 0 ? visiblePosts.map(post => <BlogCard key={post.slug} post={post} />) : <div className="rounded-xl border border-dashed border-foreground/15 p-8 text-center"><p className="font-medium">Nothing here yet.</p><p className="mt-1 text-sm text-foreground/50">A new note is probably being learned the hard way.</p></div>}
      </div>
    </>
  )
}

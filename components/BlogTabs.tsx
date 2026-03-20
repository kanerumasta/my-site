'use client'

import { useState } from 'react'
import BlogCard from './BlogCard'
import { TBlogPost } from '@/lib/types'

export default function BlogTabs({ posts }: { posts: TBlogPost[] }) {
  const featuredPosts = posts.filter(post => post.featured)
  const regularPosts = posts.filter(post => !post.featured)

  const [activeTab, setActiveTab] = useState<'all' | 'featured'>('all')

  return (
    <>
      {/* TABS */}
      <div className="z-20 flex gap-4 mb-8 border-b sticky top-15 pt-2 bg-background/80 backdrop-blur border-foreground/10">
        <button
          onClick={() => setActiveTab('all')}
          className={`cursor-pointer pb-2 text-sm ${
            activeTab === 'all'
              ? 'border-b-2 border-primary font-medium'
              : 'text-gray-500'
          }`}
        >
          All
        </button>

        <button
          onClick={() => setActiveTab('featured')}
          className={`pb-2 cursor-pointer text-sm ${
            activeTab === 'featured'
              ? 'border-b-2 border-primary font-medium'
              : 'text-gray-500'
          }`}
        >
          Featured
        </button>
      </div>

      {/* CONTENT */}
      <div className="space-y-6 px-2">
        {activeTab === 'all' &&
          posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}

        {activeTab === 'featured' &&
          (featuredPosts.length > 0 ? (
            featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))
          ) : (
            <p className="text-gray-500 text-sm">
              No featured posts yet.
            </p>
          ))}
      </div>
    </>
  )
}
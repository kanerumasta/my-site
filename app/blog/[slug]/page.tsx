import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import BlogLayout from '@/components/BlogLayout'
import { Note } from '@/components/Note'
import CodeBlock from '@/components/CodeBlock'
import { BlogImage } from '@/components/BlogImage'
import { Callout } from '@/components/Callout'
import { LinkPreview } from '@/components/LinkPreview'
import { Terminal } from '@/components/Terminal'
import { getPosts } from '@/lib/posts'
import { absoluteUrl, siteConfig } from '@/lib/site'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPosts().find((candidate) => candidate.slug === slug)
  if (!post) notFound()
  const url = `/blog/${post.slug}`

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    authors: [{ name: siteConfig.author, url: siteConfig.linkedIn }],
    openGraph: {
      type: 'article', url, title: post.title, description: post.excerpt,
      publishedTime: post.date, modifiedTime: post.updated, tags: post.tags,
      images: post.image ? [{ url: post.image, alt: post.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image', title: post.title, description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const posts = getPosts()
  const post = posts.find((candidate) => candidate.slug === slug)
  if (!post) notFound()
  const relatedPosts = posts.filter((candidate) => candidate.slug !== post.slug && candidate.tags.some((tag) => post.tags.includes(tag))).slice(0, 2)
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title,
    description: post.excerpt, image: post.image ? absoluteUrl(post.image) : undefined,
    datePublished: post.date, dateModified: post.updated ?? post.date,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: { '@type': 'Person', name: siteConfig.author, url: siteConfig.linkedIn },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <BlogLayout post={post} relatedPosts={relatedPosts}>
        <MDXRemote source={post.content} components={{ Note, CodeBlock, BlogImage, Callout, LinkPreview, Terminal }} />
      </BlogLayout>
    </>
  )
}

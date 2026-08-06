import type { MetadataRoute } from "next"
import { getPosts } from "@/lib/posts"
import { absoluteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/blog", "/projects", "/about", "/services"].map((path) => ({
    url: absoluteUrl(path || "/"),
    lastModified: new Date(),
  }))

  const posts = getPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.updated ?? post.date),
  }))

  return [...pages, ...posts]
}

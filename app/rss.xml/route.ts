import { getPosts } from "@/lib/posts"
import { absoluteUrl, siteConfig } from "@/lib/site"

function escapeXml(value: string) {
  const entities: Record<string, string> = {
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    "\"": "&quot;",
  }
  return value.replace(/[<>&'\"]/g, (character) => entities[character])
}

export function GET() {
  const items = getPosts().map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${absoluteUrl(`/blog/${post.slug}`)}</link>
      <guid>${absoluteUrl(`/blog/${post.slug}`)}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt ?? "")}</description>
    </item>`).join("")

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>${escapeXml(siteConfig.name)}</title>
      <link>${siteConfig.url}</link>
      <description>${escapeXml(siteConfig.description)}</description>
      ${items}
    </channel>
  </rss>`

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  })
}

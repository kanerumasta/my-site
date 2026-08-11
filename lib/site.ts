const productionUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined)
  ?? "http://localhost:3000"

export const siteConfig = {
  name: "Mac Ibale",
  shortName: "Mac",
  title: "Mac Ibale — Software Engineer | Automation & AI Systems",
  description:
    "Practical notes and case studies about automation, AI workflows, document processing, and building reliable software systems.",
  url: productionUrl,
  author: "Mac Ibale",
  linkedIn: "https://www.linkedin.com/in/kanerumasta/",
  github: "https://github.com/kanerumasta",
} as const

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString()
}

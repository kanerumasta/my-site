import Link from "next/link"
import { siteConfig } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Built by hand.</p>
        <div className="flex flex-wrap gap-5">
          <Link className="hover:text-foreground" href="/blog">Blog</Link>
          <Link className="hover:text-foreground" href="/books">Books</Link>
          <Link className="hover:text-foreground" href="/projects">Projects</Link>
          <Link className="hover:text-foreground" href="/about">About</Link>
          <Link className="hover:text-foreground" href="/services">Work with me</Link>
          <a className="hover:text-foreground" href="/rss.xml">RSS</a>
        </div>
      </div>
    </footer>
  )
}

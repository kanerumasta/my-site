import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import { siteConfig } from "@/lib/site"

export default function Navbar() {
  return (
    <nav aria-label="Primary navigation" className="sticky top-0 z-30 w-full border-b border-foreground/10 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-15 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-primary" aria-label={`${siteConfig.name}, home`}>
          <Image
            src="/mac-ibale-brand-logo.png"
            width={32}
            height={32}
            alt=""
            priority
            className="rounded-md"
          />
          <span>{siteConfig.shortName}</span>
        </Link>

        <div className="flex items-center gap-1">
          <Link href="/about" className="rounded-md px-2 py-2 text-sm hover:bg-foreground/5">About</Link>
          <Link href="/blog" className="mr-2 rounded-md px-2 py-2 text-sm hover:bg-foreground/5">Blog</Link>
          <Link href="/services" className="mr-2 hidden rounded-md px-2 py-2 text-sm hover:bg-foreground/5 sm:block">Work with me</Link>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="Mac on GitHub" className="rounded-full border border-foreground/10 p-2 hover:bg-foreground/10">
            <Github aria-hidden="true" size={18} />
          </a>
          <a href={siteConfig.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="Mac on LinkedIn" className="rounded-full border border-foreground/10 p-2 hover:bg-foreground/10">
            <Linkedin aria-hidden="true" size={18} />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

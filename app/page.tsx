import Link from "next/link"
import ProjectCard from "@/components/ProjectCard"
import BlogCard from "@/components/BlogCard"
import { getPosts } from "@/lib/posts"
import { projects } from "@/lib/projects"

export default function Home() {
  const recentPosts = getPosts().slice(0, 2)

  return (
    <main>
      <section className="mx-auto flex min-h-[calc(85vh-60px)] max-w-5xl flex-col justify-center px-6 py-24">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-primary">Automation · AI workflows · Reliable systems</p>
        <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          I turn complicated workflows into systems that work smarter.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/65 sm:text-xl">
          I’m Mac, a software engineer building automation, document-processing pipelines, and modern web applications. I share the architecture, tradeoffs, and lessons behind the work.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/blog" className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">Read the build logs</Link>
          <Link href="/services" className="rounded-lg border border-foreground/20 px-6 py-3 text-sm font-semibold hover:bg-foreground/5">Work with me</Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20" aria-labelledby="selected-work">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Selected work</p>
            <h2 id="selected-work" className="mt-2 text-3xl font-bold tracking-tight">Systems built around real constraints</h2>
          </div>
          <Link href="/projects" className="hidden text-sm text-foreground/60 hover:text-foreground sm:block">View all projects →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20" aria-labelledby="latest-writing">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Latest writing</p>
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 id="latest-writing" className="mt-2 text-3xl font-bold tracking-tight">Notes from the workbench</h2>
          <Link href="/blog" className="text-sm text-foreground/60 hover:text-foreground">All posts →</Link>
        </div>
        <div>{recentPosts.map((post) => <BlogCard key={post.slug} post={post} />)}</div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl border border-primary/25 bg-primary/[0.06] p-8 sm:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Have a difficult workflow?</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight">Let’s find the smallest reliable system that solves it.</h2>
          <p className="mt-4 max-w-2xl text-foreground/65">I’m interested in document automation, internal tools, AI-assisted workflows, and integrations where the edge cases matter.</p>
          <Link href="/services" className="mt-7 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">See how I can help</Link>
        </div>
      </section>
    </main>
  )
}

import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About",
  description: "About Mac Ibale, a developer focused on automation, document processing, AI workflows, and modern web applications.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">About</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">I like making complicated work feel simple.</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/70">
        <p>I’m Mac, a software developer focused on efficient systems and real-world constraints. My work spans PDF processing, workflow automation, AI-assisted tools, integrations, and modern web applications.</p>
        <p>This site is both a workbench and a record: I publish the architecture decisions, mistakes, and reusable lessons behind the systems I build.</p>
      </div>
      <Link href="/services" className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Work with me</Link>
    </main>
  )
}

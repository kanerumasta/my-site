import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Work with me",
  description: "Get help designing and building document automation, AI-assisted workflows, integrations, and reliable internal tools.",
  alternates: { canonical: "/services" },
}

const services = [
  { title: "Workflow architecture", description: "Turn a manual or fragile process into a clear system with sensible boundaries, failure handling, and room to grow." },
  { title: "Document automation", description: "Design pipelines for PDF processing, structured extraction, transformation, validation, and downstream integrations." },
  { title: "AI-assisted systems", description: "Use prompts, configuration, tools, and deterministic code where each is strongest—without asking one model to do everything." },
]

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Work with me</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Let’s make your difficult workflow more reliable.</h1>
        <p className="mt-5 text-lg leading-relaxed text-foreground/65">I’m a good fit when a process has too many manual steps, a document pipeline keeps breaking on edge cases, or an AI prototype needs production-minded architecture.</p>
      </header>

      <section className="mt-12 grid gap-5 md:grid-cols-3" aria-label="Services">{services.map((service) => <article key={service.title} className="rounded-2xl border border-foreground/10 p-6"><h2 className="text-xl font-semibold">{service.title}</h2><p className="mt-3 leading-relaxed text-foreground/60">{service.description}</p></article>)}</section>

      <section className="mt-14 rounded-3xl border border-primary/25 bg-primary/[0.06] p-8 sm:p-12">
        <h2 className="text-3xl font-bold tracking-tight">Start with the problem, not a giant specification.</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-foreground/65">Send me a short description of the workflow, what currently fails, and what a useful outcome looks like. We can work out whether there is a sensible next step.</p>
        <a href={siteConfig.linkedIn} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Message me on LinkedIn <ArrowUpRight aria-hidden="true" size={17} /></a>
      </section>
    </main>
  )
}

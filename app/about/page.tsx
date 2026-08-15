import type { Metadata } from "next"
import Link from "next/link"
import {
  AppWindow,
  Bot,
  BrainCircuit,
  Braces,
  Code2,
  Database,
  FileCheck2,
  FileText,
  Layers3,
  MessagesSquare,
  Network,
  PlugZap,
  Route,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description: "About Mac Ibale, a software engineer focused on automation, document processing, AI workflows, and modern web applications.",
  alternates: { canonical: "/about" },
}

const capabilities = [
  {
    title: "Application development",
    icon: AppWindow,
    description: "Building maintainable web applications and APIs around real business workflows.",
    skills: ["Python", "TypeScript", "Next.js", "Django", "FastAPI", "REST APIs"],
  },
  {
    title: "AI engineering",
    icon: BrainCircuit,
    description: "Hands-on project work and structured training in designing useful, controlled AI features.",
    skills: [
      "Copilot agent creation",
      "OpenAI API integration",
      "GPT-4.1",
      "RAG prototypes",
      "Prompt and context design",
      "Structured outputs",
    ],
  },
  {
    title: "Automation and platforms",
    icon: Workflow,
    description: "Turning repetitive, document-heavy processes into traceable and reliable systems.",
    skills: [
      "Copilot Studio",
      "Power Apps",
      "Workflow automation",
      "Document processing",
      "System integration",
      "Validation and fallbacks",
    ],
  },
] as const

const skillIcons: Record<string, LucideIcon> = {
  Python: Code2,
  TypeScript: Braces,
  "Next.js": Layers3,
  Django: AppWindow,
  FastAPI: Route,
  "REST APIs": PlugZap,
  "Copilot agent creation": Bot,
  "OpenAI API integration": Sparkles,
  "GPT-4.1": BrainCircuit,
  "RAG prototypes": Database,
  "Prompt and context design": MessagesSquare,
  "Structured outputs": FileCheck2,
  "Copilot Studio": Bot,
  "Power Apps": AppWindow,
  "Workflow automation": Workflow,
  "Document processing": FileText,
  "System integration": Network,
  "Validation and fallbacks": ShieldCheck,
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">About</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">I like making complicated work feel simple.</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/70">
        <p>I&apos;m Mac, a software engineer focused on efficient systems and real-world constraints. My work spans PDF processing, workflow automation, AI-assisted tools, integrations, and modern web applications.</p>
        <p>This site is both a workbench and a record: I publish the architecture decisions, mistakes, and reusable lessons behind the systems I build.</p>
      </div>

      <section className="mt-14" aria-labelledby="capabilities-heading">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Capabilities</p>
        <h2 id="capabilities-heading" className="mt-2 text-3xl font-bold tracking-tight">
          Tools are useful. What I build with them matters more.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-foreground/65">
          These are the technologies and practices I use across project work, prototypes, and structured technical training.
        </p>

        <div className="mt-8 grid gap-5">
          {capabilities.map((capability) => (
            <article key={capability.title} className="rounded-2xl border border-foreground/10 bg-foreground/[0.025] p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary" aria-hidden="true">
                  <capability.icon size={20} strokeWidth={1.8} />
                </span>
                <h3 className="text-lg font-semibold">{capability.title}</h3>
              </div>
              <p className="mt-2 leading-relaxed text-foreground/60">{capability.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${capability.title} skills`}>
                {capability.skills.map((skill) => {
                  const SkillIcon = skillIcons[skill] ?? Wrench
                  return (
                    <li key={skill} className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background px-3 py-2 text-sm text-foreground/75 shadow-sm transition-colors hover:border-primary/30 hover:text-foreground">
                      <SkillIcon size={15} strokeWidth={1.8} className="text-primary" aria-hidden="true" />
                      <span>{skill}</span>
                    </li>
                  )
                })}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/projects" className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">See my work</Link>
        <Link href="/services" className="rounded-lg border border-foreground/20 px-6 py-3 text-sm font-semibold hover:bg-foreground/5">Work with me</Link>
      </div>
    </main>
  )
}

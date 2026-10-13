import Link from "next/link"
import Image from "next/image"
import {
  AppWindow,
  Bot,
  BrainCircuit,
  Braces,
  Database,
  FileText,
  MessagesSquare,
  Network,
  PlugZap,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react"
import { siDjango, siFastapi, siNextdotjs, siPython, siTypescript } from "simple-icons"
import type { SimpleIcon } from "simple-icons"
import ProjectCard from "@/components/ProjectCard"
import BlogCard from "@/components/BlogCard"
import BookCover from "@/components/BookCover"
import { getPosts } from "@/lib/posts"
import { projects } from "@/lib/projects"
import styles from "./home.module.css"

type CapabilitySkill =
  | { label: string; brand: SimpleIcon }
  | { label: string; icon: LucideIcon }

const capabilities = [
  {
    title: "Application development",
    icon: AppWindow,
    description: "Web applications and APIs built around real business workflows.",
    skills: [
      { label: "Python", brand: siPython },
      { label: "TypeScript", brand: siTypescript },
      { label: "Next.js", brand: siNextdotjs },
      { label: "Django", brand: siDjango },
      { label: "FastAPI", brand: siFastapi },
      { label: "REST APIs", icon: PlugZap },
    ],
  },
  {
    title: "AI engineering",
    icon: BrainCircuit,
    description: "Focused AI features with clear boundaries and dependable outputs.",
    skills: [
      { label: "OpenAI API", icon: BrainCircuit },
      { label: "Copilot agents", icon: Bot },
      { label: "RAG prototypes", icon: Database },
      { label: "Prompt design", icon: MessagesSquare },
      { label: "Structured outputs", icon: Braces },
    ],
  },
  {
    title: "Automation & platforms",
    icon: Workflow,
    description: "Document-heavy processes made more reliable and easier to manage.",
    skills: [
      { label: "Copilot Studio", icon: Bot },
      { label: "Power Apps", icon: AppWindow },
      { label: "Document processing", icon: FileText },
      { label: "System integration", icon: Network },
      { label: "Validation & fallbacks", icon: ShieldCheck },
    ],
  },
]

function SkillMark({ skill }: { skill: CapabilitySkill }) {
  return (
    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white" aria-hidden="true">
      {"brand" in skill ? (
        <svg className="size-5" viewBox="0 0 24 24" focusable="false">
          <path d={skill.brand.path} fill={`#${skill.brand.hex}`} />
        </svg>
      ) : (
        <skill.icon size={19} strokeWidth={1.9} className="text-primary" />
      )}
    </span>
  )
}

export default function Home() {
  const recentPosts = getPosts().slice(0, 2)

  return (
    <main>
      <section className={`${styles.hero} min-h-[calc(85vh-60px)]`}>
        <div className={styles.dotField} aria-hidden="true" />
        <div className={`${styles.heroContent} mx-auto min-h-[calc(85vh-60px)] max-w-5xl px-6 py-24`}>
          <div className={`${styles.heroCopy} relative z-10`}>
            <p className={styles.heroGreeting}>Hey, I’m Mac</p>
            <h1 className={styles.heroHeadline}>
              <span>I make complicated</span>
              <span className={styles.heroHeadlineAccent}>work feel simple.</span>
            </h1>
            <p className={styles.heroDescription}>
              Software engineer building document pipelines, AI-assisted tools, and modern web applications.
            </p>
            <div className={`${styles.heroActions} mt-9 flex flex-wrap gap-3`}>
              <Link href="/blog" className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_32px_color-mix(in_srgb,var(--primary)_20%,transparent)] hover:opacity-90">Read my writing</Link>
              <Link href="/services" className="rounded-lg border border-foreground/20 bg-background/55 px-6 py-3 text-sm font-semibold backdrop-blur-sm hover:bg-foreground/5">Work with me</Link>
            </div>
          </div>
          <div className={styles.portraitFrame}>
            <Image
              src="/images/mac-profile.png"
              alt="Portrait of Mac in a navy suit"
              width={1024}
              height={1536}
              priority
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 34vw, 360px"
              className={styles.portrait}
            />
          </div>
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

      <section id="capabilities" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16 sm:py-20" aria-labelledby="capabilities-heading">
        <div className="mb-9 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Capabilities</p>
          <h2 id="capabilities-heading" className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">What I can help you build</h2>
          <p className="mt-4 leading-relaxed text-foreground/65">Across project work, prototypes, and hands-on technical training.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon

            return (
              <article key={capability.title} className="group rounded-3xl border border-foreground/10 bg-foreground/[0.025] p-6 transition-colors hover:border-primary/30 hover:bg-primary/[0.035] sm:p-7">
                <span className="mb-6 grid size-16 place-items-center rounded-2xl border border-primary/20 bg-primary/[0.08] text-primary" aria-hidden="true">
                  <Icon size={36} strokeWidth={1.6} />
                </span>
                <h3 className="text-xl font-semibold tracking-tight">{capability.title}</h3>
                <p className="mt-3 min-h-12 leading-relaxed text-foreground/60">{capability.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2.5" aria-label={`${capability.title} technologies and practices`}>
                  {capability.skills.map((skill) => (
                    <li key={skill.label} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-foreground/10 bg-background/70 py-1.5 pl-1.5 pr-3 text-xs font-medium text-foreground/75">
                      <SkillMark skill={skill} />
                      <span>{skill.label}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20" aria-labelledby="latest-writing">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">The blog</p>
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 id="latest-writing" className="mt-2 text-3xl font-bold tracking-tight">Latest articles</h2>
          <Link href="/blog" className="text-sm text-foreground/60 hover:text-foreground">All posts →</Link>
        </div>
        <div>{recentPosts.map((post) => <BlogCard key={post.slug} post={post} />)}</div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20" aria-labelledby="book-heading">
        <div className="grid items-center gap-9 overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.025] p-7 sm:p-10 md:grid-cols-[1fr_13rem] md:gap-14">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Available now on Google Play</p>
            <h2 id="book-heading" className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Before You Automate It</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/65">
              A practical book about finding the hidden rules, exceptions, spreadsheets, and human knowledge behind a workflow before choosing tools or writing code.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://play.google.com/store/books/details?id=lHIaEgAAQBAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Get it on Google Play
              </a>
              <Link href="/books/before-you-automate-it#excerpt" className="inline-block rounded-lg border border-primary/35 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/[0.07]">
                Read an excerpt →
              </Link>
            </div>
          </div>
          <BookCover compact className="mx-auto w-full max-w-[13rem]" />
        </div>
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

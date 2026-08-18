import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowDown,
  ArrowRight,
  BookOpenText,
  Braces,
  CheckCircle2,
  FileSpreadsheet,
  ShieldCheck,
  Users,
} from "lucide-react"
import BookCover from "@/components/BookCover"
import NewsletterSignup from "@/components/NewsletterSignup"
import { siteConfig } from "@/lib/site"

const title = "Before You Automate It"
const subtitle = "A Field Guide to Finding the Hidden Rules, Exceptions, and Spreadsheets That Actually Run the Work"
const description = "A practical book for discovering the real workflow before choosing tools, writing code, or adding AI."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/books/before-you-automate-it" },
  openGraph: {
    type: "website",
    title,
    description,
    url: "/books/before-you-automate-it",
    images: [
      {
        url: "/images/secret-spreadsheet-peeking-hero.png",
        alt: "A spreadsheet peeking from behind a wall, representing a hidden workflow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/secret-spreadsheet-peeking-hero.png"],
  },
}

const chapters = [
  ["The Process That Exists Only in PowerPoint", "Follow the work instead of trusting the cleanest diagram."],
  ["The Excel File Nobody Mentioned", "Treat unofficial tools as evidence before replacing them."],
  ["Ask What Happens on a Bad Day", "Use difficult cases to reveal assumptions and exceptions."],
  ["The Person Who Is Secretly the Database", "Find important decisions stored only in someone’s memory."],
  ["Turn Clues Into Rules and Responsibilities", "Name sources, states, rules, owners, and evidence."],
  ["AI, Code, or a Human With Context?", "Give interpretation, guarantees, and accountability the right owners."],
  ["The Design Must Fit Through the Door", "Treat data, access, security, and support as architecture."],
  ["When Automation Needs a Full-Time Babysitter", "Count the human work surrounding an automated run."],
  ["Build the Smallest System People Can Trust", "Start narrow, close the reliability loop, and expand carefully."],
] as const

const bookUrl = `${siteConfig.url}/books/before-you-automate-it`

export default function BeforeYouAutomateItPage() {
  const bookJsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: title,
    alternateName: subtitle,
    description,
    author: {
      "@type": "Person",
      name: siteConfig.author,
      url: siteConfig.url,
    },
    inLanguage: "en",
    url: bookUrl,
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd).replace(/</g, "\\u003c") }}
      />

      <section className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-14 md:grid-cols-[minmax(15rem,20rem)_1fr] md:py-20">
        <BookCover className="mx-auto w-full max-w-[20rem]" />

        <div>
          <Link href="/books" className="text-sm text-foreground/55 hover:text-foreground">
            ← All books
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-3 py-1.5 text-xs font-semibold text-primary">
            <CheckCircle2 aria-hidden="true" size={14} />
            First draft complete · Reader review next
          </div>
          <h1 className="mt-5 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
            Before You Automate It
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-foreground/68">{subtitle}</p>
          <p className="mt-6 max-w-2xl leading-relaxed text-foreground/60">
            For developers, analysts, operations leads, and process owners asked to automate work before anyone has fully explained how that work survives exceptions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#excerpt" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Read the excerpt <ArrowDown aria-hidden="true" size={17} />
            </a>
            <a href="#book-updates" className="rounded-lg border border-foreground/20 px-6 py-3 text-sm font-semibold hover:bg-foreground/5">
              Get launch updates
            </a>
          </div>
          <p className="mt-4 text-sm text-foreground/45">Not for sale yet. The manuscript is being refined before release.</p>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025]">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">The central idea</p>
          <blockquote className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            “The hardest part of automation is rarely writing the code. It is discovering the real process hiding behind the documented one.”
          </blockquote>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-foreground/10 bg-background p-6">
              <FileSpreadsheet aria-hidden="true" className="text-primary" size={24} />
              <h2 className="mt-4 text-lg font-semibold">Find the hidden system</h2>
              <p className="mt-2 leading-relaxed text-foreground/60">Read spreadsheets, side files, and workarounds as evidence of missing requirements.</p>
            </article>
            <article className="rounded-2xl border border-foreground/10 bg-background p-6">
              <Braces aria-hidden="true" className="text-primary" size={24} />
              <h2 className="mt-4 text-lg font-semibold">Assign the right responsibility</h2>
              <p className="mt-2 leading-relaxed text-foreground/60">Use AI for interpretation, code for guarantees, and people for accountable judgment.</p>
            </article>
            <article className="rounded-2xl border border-foreground/10 bg-background p-6">
              <ShieldCheck aria-hidden="true" className="text-primary" size={24} />
              <h2 className="mt-4 text-lg font-semibold">Design for trust</h2>
              <p className="mt-2 leading-relaxed text-foreground/60">Make exceptions, failure, ownership, validation, and recovery part of the first useful version.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16" aria-labelledby="chapters-heading">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Inside the book</p>
        <h2 id="chapters-heading" className="mt-2 text-3xl font-bold tracking-tight">Nine chapters from discovery to dependable delivery</h2>
        <ol className="mt-8 divide-y divide-foreground/10 border-y border-foreground/10">
          {chapters.map(([chapter, takeaway], index) => (
            <li key={chapter} className="grid gap-2 py-5 sm:grid-cols-[2.5rem_1fr]">
              <span className="font-mono text-sm text-primary">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-semibold">{chapter}</h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground/55">{takeaway}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="excerpt" className="scroll-mt-24 border-y border-foreground/10 bg-foreground/[0.025]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
              <BookOpenText aria-hidden="true" size={20} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Free excerpt</p>
              <h2 className="text-2xl font-bold">The question before “Can we automate this?”</h2>
            </div>
          </div>

          <div className="prose prose-lg mt-9 max-w-none dark:prose-invert">
            <p>“Can we automate this?” sounds like a technical question. It invites technical answers.</p>
            <p>Should you write a script? Build an application? Connect an API? Use an AI agent? How long will development take?</p>
            <p>Those questions matter, but they arrive too early.</p>
            <p>Before deciding how to automate a process, someone has to determine what the process actually is. Not what the diagram says. Not what happens during a prepared demonstration. Not what the procedure looked like when it was approved two years ago.</p>
            <p>What happens on an ordinary, slightly inconvenient Tuesday?</p>
            <p>Consider an automation that appears to be correct. It follows every documented rule, moves information through the expected steps, and produces the required result.</p>
            <p>Then someone asks whether it also updates an Excel tracker.</p>
            <blockquote>What Excel tracker?</blockquote>
            <p>The workbook did not appear in the requirements or workflow diagrams. Yet it contains information the official process does not: real statuses, reference values, manual corrections, special cases, and colors that apparently carry legally binding emotional authority.</p>
            <p>The automation understands how the process is supposed to work.</p>
            <p>The spreadsheet understands how people are actually completing it.</p>
            <p>This does not make the spreadsheet bad or the automation a failure. It means another part of the system has been discovered—one operating quietly outside the official description.</p>
            <p>That discovery is the beginning of the real engineering work.</p>
            <h3>Automation magnifies your understanding</h3>
            <p>Automation makes a process faster and more consistent. That is useful when the process is understood.</p>
            <p>When it is not, automation makes incomplete assumptions faster and more consistent.</p>
            <p>A person can notice that something feels wrong, open another file, ask a colleague, or delay a decision. Ordinary code follows the path it has been given. An AI system may interpret an unclear case, but it cannot recover rules nobody included in its context.</p>
            <p>The quality of an automation therefore depends on more than code. It depends on the quality of the investigation that happened before the code.</p>
            <blockquote>Before you automate the work, earn the right to describe it.</blockquote>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16" aria-labelledby="source-ideas">
        <div className="flex items-center gap-3">
          <Users aria-hidden="true" className="text-primary" size={24} />
          <h2 id="source-ideas" className="text-2xl font-bold">Read the ideas behind the book</h2>
        </div>
        <div className="mt-6 grid gap-3">
          <Link href="/blog/the-excel-file-nobody-mentioned" className="group flex items-center justify-between gap-4 rounded-xl border border-foreground/10 p-5 hover:border-primary/30">
            <span>The Excel File Nobody Mentioned</span><ArrowRight aria-hidden="true" className="shrink-0 text-primary transition-transform group-hover:translate-x-1" size={18} />
          </Link>
          <Link href="/blog/where-should-ai-stop-and-code-begin" className="group flex items-center justify-between gap-4 rounded-xl border border-foreground/10 p-5 hover:border-primary/30">
            <span>Where Should AI Stop and Ordinary Code Begin?</span><ArrowRight aria-hidden="true" className="shrink-0 text-primary transition-transform group-hover:translate-x-1" size={18} />
          </Link>
          <Link href="/blog/how-i-built-1pager" className="group flex items-center justify-between gap-4 rounded-xl border border-foreground/10 p-5 hover:border-primary/30">
            <span>How I Built 1Pager</span><ArrowRight aria-hidden="true" className="shrink-0 text-primary transition-transform group-hover:translate-x-1" size={18} />
          </Link>
        </div>
      </section>

      <section id="book-updates" className="mx-auto max-w-3xl scroll-mt-24 px-6 pb-20">
        <NewsletterSignup
          eyebrow="Before You Automate It"
          heading="Get the sample and launch update."
          description="Join the newsletter for one useful excerpt during editing and a single message when the finished book is available. No daily launch countdown."
          buttonLabel="Keep me posted"
        />
      </section>
    </main>
  )
}


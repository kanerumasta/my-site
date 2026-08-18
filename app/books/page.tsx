import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpenText, CheckCircle2 } from "lucide-react"
import BookCover from "@/components/BookCover"

export const metadata: Metadata = {
  title: "Books",
  description: "Practical books by Mac Ibale about automation, AI boundaries, hidden workflows, and reliable software systems.",
  alternates: { canonical: "/books" },
  openGraph: {
    title: "Books by Mac Ibale",
    description: "Practical field guides about automation, AI boundaries, and reliable software systems.",
    url: "/books",
  },
}

export default function BooksPage() {
  return (
    <main>
      <header className="mx-auto max-w-5xl px-6 pb-12 pt-16">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Books</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Practical field guides for the work behind the workflow.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/65">
          Longer, structured guides about discovering real processes, assigning responsibility, and building systems people can trust.
        </p>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-20" aria-labelledby="before-you-automate-it">
        <article className="grid items-center gap-10 overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.025] p-6 sm:p-9 md:grid-cols-[minmax(14rem,18rem)_1fr] md:gap-14">
          <BookCover className="mx-auto w-full max-w-[18rem]" />

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-3 py-1.5 text-xs font-semibold text-primary">
              <CheckCircle2 aria-hidden="true" size={14} />
              First draft complete
            </div>
            <h2 id="before-you-automate-it" className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Before You Automate It
            </h2>
            <p className="mt-3 text-lg font-medium text-foreground/70">
              A field guide to finding the hidden rules, exceptions, and spreadsheets that actually run the work.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-foreground/60">
              For anyone who has been asked, “Can we automate this?” before anyone has clearly explained what “this” includes when the work does not go perfectly.
            </p>

            <ul className="mt-6 grid gap-3 text-sm text-foreground/70 sm:grid-cols-2">
              <li className="flex items-start gap-2"><BookOpenText aria-hidden="true" className="mt-0.5 shrink-0 text-primary" size={17} />Nine practical chapters</li>
              <li className="flex items-start gap-2"><BookOpenText aria-hidden="true" className="mt-0.5 shrink-0 text-primary" size={17} />Reusable field checklist</li>
              <li className="flex items-start gap-2"><BookOpenText aria-hidden="true" className="mt-0.5 shrink-0 text-primary" size={17} />AI, code, and human boundaries</li>
              <li className="flex items-start gap-2"><BookOpenText aria-hidden="true" className="mt-0.5 shrink-0 text-primary" size={17} />Accessible real-world examples</li>
            </ul>

            <Link
              href="/books/before-you-automate-it"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Preview the book <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </article>
      </section>
    </main>
  )
}


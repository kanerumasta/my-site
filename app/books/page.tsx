import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpenText, CheckCircle2, ExternalLink } from "lucide-react"
import BookCover from "@/components/BookCover"
import { absoluteUrl, siteConfig } from "@/lib/site"

const publishedBooks = [
  {
    title: "100 Business Problems AI Could Help Solve",
    subtitle: "Real Problems. Smarter Solutions.",
    fullTitle: "100 Business Problems AI Could Help Solve: Real Problems. Smarter Solutions.",
    description:
      "A practical idea book covering 100 business problems, where AI could help, one small experiment to try, and a boundary that keeps it responsible.",
    cover: "/images/books/100-business-problems-ai-cover.jpg",
    googlePlayUrl: "https://play.google.com/store/books/details?id=xwYDEgAAQBAJ",
  },
  {
    title: "Copilot Studio for Beginners",
    subtitle: "Build Your First AI Agent Step by Step. No AI Experience Required.",
    fullTitle:
      "Copilot Studio for Beginners: Build Your First AI Agent Step by Step — No AI Experience Required",
    description:
      "A jargon-free guide to building useful agents with Microsoft Copilot Studio, from instructions and knowledge to tools, flows, and troubleshooting.",
    cover: "/images/books/copilot-studio-for-beginners-cover.jpg",
    googlePlayUrl: "https://play.google.com/store/books/details?id=qAUDEgAAQBAJ",
  },
  {
    title: "Your Life Has No Search Bar",
    subtitle: "A Book About Memory, Time, People, and the Ordinary Days We Learn to Miss.",
    fullTitle:
      "Your Life Has No Search Bar: A Book About Memory, Time, People, and the Ordinary Days We Learn to Miss",
    description:
      "A reflective book about memory, growing older, relationships, forgotten dreams, and noticing ordinary life before it becomes something you miss.",
    cover: "/images/books/your-life-has-no-search-bar-cover.jpg",
    googlePlayUrl: "https://play.google.com/store/books/details?id=h_YCEgAAQBAJ",
  },
] as const

export const metadata: Metadata = {
  title: "Books",
  description:
    "Published books by Mac Ibale about practical AI, Copilot Studio, memory, automation, and reliable software systems.",
  alternates: { canonical: "/books" },
  openGraph: {
    title: "Books by Mac Ibale",
    description:
      "Published books about practical AI, useful agents, memory, automation, and reliable software systems.",
    url: "/books",
  },
}

export default function BooksPage() {
  const booksJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Published books by Mac Ibale",
    itemListElement: publishedBooks.map((book, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Book",
        name: book.fullTitle,
        description: book.description,
        image: absoluteUrl(book.cover),
        bookFormat: "https://schema.org/EBook",
        author: {
          "@type": "Person",
          name: siteConfig.author,
          url: siteConfig.url,
        },
        url: book.googlePlayUrl,
      },
    })),
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(booksJsonLd).replace(/</g, "\\u003c") }}
      />

      <header className="mx-auto max-w-5xl px-6 pb-12 pt-16">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Books</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Practical ideas for technology, work, and the life around them.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/65">
          Published guides about useful AI and agents, plus reflections on the ordinary moments technology cannot retrieve for us.
        </p>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-24" aria-labelledby="published-books-heading">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Available now</p>
            <h2 id="published-books-heading" className="mt-2 text-3xl font-bold tracking-tight">
              Published on Google Play
            </h2>
          </div>
          <p className="text-sm text-foreground/45">Ebook prices may vary by country.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {publishedBooks.map((book) => (
            <article
              key={book.googlePlayUrl}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.025] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-foreground/5"
            >
              <div className="flex justify-center border-b border-foreground/10 bg-foreground/[0.025] p-7 sm:p-8">
                <Image
                  src={book.cover}
                  alt={`Cover of ${book.fullTitle} by Mac Ibale`}
                  width={600}
                  height={900}
                  sizes="(max-width: 639px) 240px, (max-width: 1023px) 280px, 240px"
                  className="h-auto w-full max-w-[15rem] rounded-md shadow-2xl shadow-black/20 transition duration-500 group-hover:scale-[1.015]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.08] px-3 py-1.5 text-xs font-semibold text-primary">
                  <CheckCircle2 aria-hidden="true" size={14} />
                  Available now
                </div>
                <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight">{book.title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-foreground/65">{book.subtitle}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/55">{book.description}</p>
                <a
                  href={book.googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buy ${book.title} on Google Play. Opens in a new tab.`}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Buy on Google Play <ExternalLink aria-hidden="true" size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20" aria-labelledby="coming-next-heading">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Coming next</p>
          <h2 id="coming-next-heading" className="mt-2 text-3xl font-bold tracking-tight">
            A deeper field guide in progress
          </h2>
        </div>

        <article className="grid items-center gap-10 overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.025] p-6 sm:p-9 md:grid-cols-[minmax(14rem,18rem)_1fr] md:gap-14">
          <BookCover className="mx-auto w-full max-w-[18rem]" />

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-3 py-1.5 text-xs font-semibold text-primary">
              <CheckCircle2 aria-hidden="true" size={14} />
              First draft complete
            </div>
            <h3 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Before You Automate It
            </h3>
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

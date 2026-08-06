export type Project = {
  title: string
  description: string
  outcome: string
  stack: string[]
  image?: string
  href?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: "1Pager",
    description:
      "A legal-document pipeline that converts PDFs into venue-specific XML across more than 100 formats.",
    outcome:
      "Replaced one overloaded AI prompt with targeted venue configuration and a reliable Python transformation layer.",
    stack: ["Copilot Studio", "FastAPI", "Python", "Power Apps"],
    image: "/images/1pager-hero.png",
    href: "/blog/how-i-built-1pager",
    featured: true,
  },
  {
    title: "Echoease",
    description:
      "A booking marketplace where singers can build stronger portfolios and venue owners can discover and hire talent for live gigs.",
    outcome:
      "Brings performer profiles, talent discovery, gig bookings, and payments into one streamlined platform for singers and venue owners.",
    stack: ["Django", "Next.js", "Backend"],
    image: "/images/echoease.png",
  },
]

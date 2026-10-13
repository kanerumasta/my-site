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
    title: "Document Processing Workflow",
    description:
      "An AI-assisted workflow for turning variable documents into structured data for downstream systems.",
    outcome:
      "Separated flexible interpretation from deterministic validation and transformation for more consistent output.",
    stack: ["AI-assisted processing", "Workflow design", "Data validation"],
    image: "/images/document-workflow-hero.png",
    href: "/blog/from-complex-documents-to-reliable-data",
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

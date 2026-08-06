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
      "A document-processing system designed to handle large PDF workloads efficiently and reliably.",
    outcome:
      "Built around repeatable processing, clear failure handling, and scalable backend workflows.",
    stack: ["Django", "Next.js", "Backend"],
    image: "/images/echoease.png",
  },
]

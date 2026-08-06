import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/projects"

export default function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      {project.image && (
        <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl bg-foreground/5">
          <Image src={project.image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" />
        </div>
      )}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold group-hover:text-primary">{project.title}</h3>
        {project.href && <ArrowUpRight aria-hidden="true" className="mt-1 shrink-0" size={18} />}
      </div>
      <p className="mt-3 leading-relaxed text-foreground/70">{project.description}</p>
      <p className="mt-4 text-sm leading-relaxed text-foreground/55"><strong className="text-foreground/80">Result:</strong> {project.outcome}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
        {project.stack.map((technology) => <li key={technology} className="rounded-full border border-foreground/15 px-3 py-1 text-xs text-foreground/65">{technology}</li>)}
      </ul>
    </>
  )

  const classes = "group block rounded-2xl border border-foreground/10 p-6 transition hover:border-primary/40 hover:bg-foreground/[0.02]"

  return project.href ? <Link href={project.href} className={classes}>{content}</Link> : <article className={classes}>{content}</article>
}

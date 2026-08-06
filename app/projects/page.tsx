import type { Metadata } from "next"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected automation, AI workflow, document-processing, and web application projects by Mac Ibale.",
  alternates: { canonical: "/projects" },
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10 max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Selected work</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Systems built around real constraints</h1>
        <p className="mt-4 leading-relaxed text-foreground/60">A growing collection of projects in automation, document processing, AI workflows, and reliable web systems.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
    </main>
  )
}

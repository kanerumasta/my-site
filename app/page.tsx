import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-5">

      {/* HERO */}
      <section className="mb-20">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Hi, I'm Mac 👋
        </h1>

        <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-6">
          I build systems, automate workflows, and create modern web applications.
        </p>

        <div className="flex gap-4">
          <a
            href="/blog"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm hover:opacity-90 transition"
          >
            Read Blog
          </a>

          <a
            href="#projects"
            className="border border-white/10 px-5 py-2 rounded-md text-sm hover:bg-white/10 transition"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mb-20">
        <h2 className="text-xl font-semibold mb-4 text-gray-400 uppercase tracking-wide">
          About
        </h2>

        <p className="text-gray-300 leading-7">
          I'm a developer focused on building efficient systems and solving real-world problems.
          I enjoy working with Next.js, automation, and backend integrations. I like turning complex
          workflows into simple, scalable solutions.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2 className="text-xl font-semibold mb-6 text-gray-400 uppercase tracking-wide">
          Projects
        </h2>

        <div className="grid gap-6">

          <div className="border border-white/10 p-5 rounded-xl hover:bg-white/5 transition">
            <h3 className="font-semibold text-lg mb-2">
              PDF Processing System
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              A system that processes large-scale PDF documents efficiently, optimized for performance and scalability.
            </p>
          </div>

          <div className="border border-white/10 p-5 rounded-xl hover:bg-white/5 transition">
            <h3 className="font-semibold text-lg mb-2">
              Workflow Automation Tool
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Automation platform designed to streamline administrative processes and reduce manual work.
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}
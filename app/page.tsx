import Image from "next/image";
export default function Home() {
  return (
    <main className="">
      <section className="h-[calc(100vh-60px)] py-30 relative">
        
        <h1 className="text-5xl font-bold tracking-tight mb-6 leading-tight">
          Building systems that <span className="text-primary">work smarter</span>
        </h1>

        <p className="text-lg text-gray-400 max-w-xl leading-relaxed mb-8">
          I'm Mac — a developer focused on automation, scalable systems, and modern web apps.
        </p>

        <div className="flex gap-4">
          <a
            href="/blog"
            className="bg-primary px-5 py-2 rounded-md text-sm hover:opacity-90 transition"
          >
            Read Blog
          </a>

          <a
            href="#projects"
            className="border border-foreground/20 px-5 py-2 rounded-md text-sm hover:bg-white/10 transition"
          >
            View Projects
          </a>
        </div>

{/* <div className="bottom-0 right-0 w-150 aspect-square relative"> */}

  {/* BLOB BACKGROUND */}
  {/* <img */}
    {/* src="/images/blob.png" */}
    {/* className="absolute inset-0 w-full translate-y-4 h-full object-contain" */}
  {/* /> */}

  {/* HERO IMAGE */}
  {/* <img */}
    {/* src="/images/hero.png" */}
    {/* className="absolute inset-0 w-full h-full object-contain blob-clip" */}
  {/* /> */}

{/* </div> */}


      </section>

      {/* ABOUT */}
      <section className="mb-24">
        <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
          About
        </h2>

        <p className="text-gray-300 leading-7 max-w-2xl">
          I specialize in building efficient systems and solving real-world problems.
          From PDF processing pipelines to workflow automation, I enjoy simplifying
          complex processes into scalable solutions.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-6">
          Projects
        </h2>

        <div className="grid grid-cols-2 gap-6">

          {/* PROJECT CARD */}
          <div className="row-span-2 group border border-white/10 p-6 rounded-2xl hover:bg-white/5 transition">
         
            <div>
               <img
                  src="/images/echoease.png"
                  className="w-100"
                />
            </div>
             <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition">
              Echoease
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              High-performance pipeline for processing large-scale PDF documents with efficiency and reliability.
            </p>

            <span className="text-xs text-gray-500">
              Django · Nextjs · Backend
            </span>
          </div>
          <div className="group border border-white/10 p-6 rounded-2xl hover:bg-white/5 transition">
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition">
              PDF Processing System
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              High-performance pipeline for processing large-scale PDF documents with efficiency and reliability.
            </p>

            <span className="text-xs text-gray-500">
              Python · Automation · Backend
            </span>
          </div>

          <div className="group border border-white/10 p-6 rounded-2xl hover:bg-white/5 transition">
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition">
              Workflow Automation Tool
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              System designed to streamline admin workflows and reduce manual processes.
            </p>

            <span className="text-xs text-gray-500">
              Next.js · Dataverse · Automation
            </span>
          </div>

          <div className="group border border-white/10 p-6 rounded-2xl hover:bg-white/5 transition">
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition">
              Workflow Automation Tool
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              System designed to streamline admin workflows and reduce manual processes.
            </p>

            <span className="text-xs text-gray-500">
              Next.js · Dataverse · Automation
            </span>
          </div>

          <div className="group border border-white/10 p-6 rounded-2xl hover:bg-white/5 transition">
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition">
              Workflow Automation Tool
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              System designed to streamline admin workflows and reduce manual processes.
            </p>

            <span className="text-xs text-gray-500">
              Next.js · Dataverse · Automation
            </span>
          </div>

        </div>
      </section>

    </main>
  )
}
import Image from "next/image";
export default function Home() {
  return (
    <main className="">
      
      {/* HERO */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Mac 👋
        </h1>
        <p className="text-lg text-gray-600">
          I build systems, automate workflows, and create web apps.
        </p>
      </section>

      {/* ABOUT */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-7">
          I'm a developer focused on building efficient systems and solving real-world problems.
          I enjoy working with Next.js, automation, and backend integrations.
        </p>
      </section>

      {/* PROJECTS */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>

        <div className="grid gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold">Project One</h3>
            <p className="text-sm text-gray-600">
              A system that processes large-scale PDF documents efficiently.
            </p>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold">Project Two</h3>
            <p className="text-sm text-gray-600">
              Automation tool for optimizing admin workflows.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
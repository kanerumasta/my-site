export default function ProjectsPage(){
    return (
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
    )
}
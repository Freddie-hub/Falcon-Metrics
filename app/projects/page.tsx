import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Projects — Falcon Labs Solutions",
  description:
    "Selected work across industries showcasing adaptable AI systems: strategy, custom models, automation, and integration.",
}

type Project = {
  title: string
  sector: string
  summary: string
  image: string
  tags: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: "Venda.ai",
    sector: "E-commerce",
    summary:
      "Connects distributors and buyers using an AI-powered marketplace with intelligent product discovery and pricing recommendations.",
    image: "/Vendai.png", // Updated to use local image from public folder
    tags: ["LLM", "Marketplace", "E-commerce"],
    link: "https://www.vendai.digital",
  },
  {
    title: "AgriGuide",
    sector: "Agriculture",
    summary:
      "AI platform for diagnosing plant diseases and pests with actionable recommendations for plant care.",
    image: "/agriguide.png", // Updated to use local image from public folder
    tags: ["React", "Node.js", "Supabase", "PostgreSQL", "OpenAI API"],
    link: "https://agriguide-sys.vercel.app/",
  },
  {
    title: "Predictive Maintenance Vision",
    sector: "Manufacturing",
    summary:
      "Quality inspection and early failure prediction on the edge for industrial operations.",
    image: "/placeholder.svg?height=400&width=720",
    tags: ["Vision", "Edge AI", "Pipelines"],
  },
]

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-neutral-950 text-white">
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.06] mix-blend-overlay"
        style={{ backgroundImage: "url(/textures/grain.png)" }}
        aria-hidden="true"
      />
      <Navbar />
      <section className="mx-auto w-[92%] pt-16">
        <header className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-white/50">Selected Work</span>
            <h1 className="mt-2 text-3xl font-bold md:text-4xl">Projects</h1>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              Compact highlights of how we assemble modular AI across industries.
            </p>
          </div>
          <Link href="/contact" className="group inline-flex items-center text-sm text-white/80">
            <span className="relative">
              Start your project
              <span className="absolute -bottom-0.5 left-0 block h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
            </span>
            <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">{"→"}</span>
          </Link>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ParallelogramCard key={p.title} project={p} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}

function ParallelogramCard({ project }: { project: Project }) {
  return (
    <article className="relative overflow-visible transition-transform duration-300 ease-out hover:-translate-y-0.5">
      <div className="relative -skew-x-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_16px_48px_-28px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rotate-6 bg-gradient-to-br from-emerald-500/12 to-fuchsia-500/12 blur-3xl" />
        <div className="relative h-28 w-full overflow-hidden sm:h-32">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent" />
        </div>
        <div className="skew-x-6 p-4">
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-white/80">
            {project.sector}
          </span>
          <h3 className="mt-2 line-clamp-2 text-base font-semibold">{project.title}</h3>
          <p className="mt-1 line-clamp-3 text-xs text-white/70">{project.summary}</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 bg-black/30 px-2 py-0.5 text-[10px] text-white/70"
              >
                {t}
              </li>
            ))}
          </ul>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-[11px] text-emerald-400 hover:underline"
            >
              View in browser →
            </a>
          )}
          <div className="mt-3 h-[2px] w-16 bg-gradient-to-r from-emerald-400 to-fuchsia-500" />
        </div>
      </div>
    </article>
  )
}

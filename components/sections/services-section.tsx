import { Brain, Bot, Workflow, LineChart, PlugZap, ShieldCheck } from "lucide-react"
import Reveal from "../reveal"

const pillars = [
  {
    title: "AI Strategy & Consulting",
    desc: "Roadmaps, adoption strategies, risk analysis tailored to your org.",
    icon: Brain,
    accent: "from-emerald-400/30 to-emerald-500/10",
  },
  {
    title: "Custom AI Models",
    desc: "Domain-specific LLMs, predictive models, intelligent automation.",
    icon: Bot,
    accent: "from-fuchsia-400/30 to-fuchsia-500/10",
  },
  {
    title: "Process Automation",
    desc: "RPA, workflow orchestration, AI copilots, and chatbots.",
    icon: Workflow,
    accent: "from-lime-300/30 to-lime-500/10",
  },
  {
    title: "Data Intelligence",
    desc: "Pipelines, analytics dashboards, and decision support.",
    icon: LineChart,
    accent: "from-rose-300/30 to-rose-500/10",
  },
  {
    title: "AI Integration",
    desc: "Embed into CRMs, ERPs, websites, and mobile apps.",
    icon: PlugZap,
    accent: "from-amber-300/30 to-amber-500/10",
  },
  {
    title: "AI Governance & Safety",
    desc: "Policy, oversight, evaluations, and risk controls built-in.",
    icon: ShieldCheck,
    accent: "from-teal-300/30 to-teal-500/10",
  },
]

export default function ServicesSection() {
  return (
    <section className="relative mx-auto mt-24 w-[92%]">
      <div className="mb-8 flex items-baseline justify-between">
        <Reveal direction="left">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Services</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="max-w-xl text-sm text-white/70">
            Designed to adapt across sectors. Compose what you need, when you need it.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 80} direction={i % 3 === 0 ? "left" : i % 3 === 1 ? "up" : "right"}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className={`pointer-events-none absolute -inset-8 -z-10 rotate-12 bg-gradient-to-br ${p.accent}`} />
              <div className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-white/10">
                <p.icon className="size-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-emerald-400 to-fuchsia-500" />
            </div>
          </Reveal>
        ))}
      </div>

      <div className="relative my-16 h-10">
        <div className="absolute left-1/2 h-10 w-[120%] -translate-x-1/2 -skew-y-3 bg-gradient-to-r from-emerald-500/10 via-white/5 to-fuchsia-500/10 blur-md" />
      </div>
    </section>
  )
}

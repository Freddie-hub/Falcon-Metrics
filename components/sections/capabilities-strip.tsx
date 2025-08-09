import { Brain, Bot, Workflow, LineChart, PlugZap } from "lucide-react"

const items = [
  { label: "Strategy", icon: Brain },
  { label: "Custom Models", icon: Bot },
  { label: "Automation", icon: Workflow },
  { label: "Data Intelligence", icon: LineChart },
  { label: "Integration", icon: PlugZap },
]

export default function CapabilitiesStrip() {
  return (
    <section className="relative mx-auto mt-10 w-[92%]">
      <div className="flex w-full snap-x snap-mandatory items-center gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {items.map((it) => (
          <div
            key={it.label}
            className="group relative inline-flex snap-start items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 shadow-[0_8px_28px_-18px_rgba(0,0,0,0.9)] backdrop-blur transition-all duration-300 hover:scale-[1.03] hover:bg-white/10"
          >
            <it.icon className="size-4 text-white/90" />
            <span className="font-semibold">{it.label}</span>
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-fuchsia-500/0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  )
}

import { Star } from "lucide-react"

type Review = {
  quote: string
  name: string
  role: string
  company: string
}

const reviews: Review[] = [
  {
    quote: "Their approach let us pilot quickly and scale with confidence. Measurable ROI within a quarter.",
    name: "Maya P.",
    role: "VP Engineering",
    company: "FinServe",
  },
  {
    quote: "We integrated AI into critical workflows without disrupting ops. Thoughtful, pragmatic, and fast.",
    name: "Alex R.",
    role: "COO",
    company: "Global Logistics Co.",
  },
  {
    quote: "From roadmap to deployment, they were a true partner. Safety and governance built-in from day one.",
    name: "Dr. Liam K.",
    role: "Chief Medical Officer",
    company: "CareNet",
  },
]

export default function ReviewsSection() {
  return (
    <section className="relative mx-auto mt-20 w-[92%]">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <span className="block text-[11px] uppercase tracking-[0.25em] text-white/50">Reviews</span>
          <h2 className="mt-1 text-2xl font-bold text-white md:text-3xl">Trusted by teams across industries</h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <div
            key={r.name + r.company}
            className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/80 backdrop-blur ${
              i === 1 ? "md:-translate-y-2" : ""
            }`}
          >
            <div className="mb-2 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="size-4 text-amber-400" fill="currentColor" />
              ))}
            </div>
            <p className="text-white/90">“{r.quote}”</p>
            <div className="mt-4 h-[1px] w-10 bg-gradient-to-r from-emerald-400 to-fuchsia-500" />
            <p className="mt-3 font-medium text-white">
              {r.name}{" "}
              <span className="text-white/60">
                — {r.role}, {r.company}
              </span>
            </p>
            <div className="pointer-events-none absolute -right-10 -top-12 size-40 rotate-12 bg-gradient-to-br from-emerald-500/10 to-fuchsia-500/10 blur-3xl" />
          </div>
        ))}
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"

type Stat = {
  value: number
  suffix?: string
  label: string
  duration?: number
}

const stats: Stat[] = [
  { value: 3, suffix: "+", label: "years in business", duration: 1200 },
  { value: 25, suffix: "+", label: "project contracts", duration: 1400 },
  { value: 7, label: "organizations served", duration: 1200 },
]

export default function StatsStrip() {
  return (
    <section className="relative mx-auto mt-10 w-[92%]">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-4 backdrop-blur md:p-6">
        <div className="absolute -right-16 -top-16 size-64 rotate-6 bg-gradient-to-br from-emerald-500/10 to-fuchsia-500/10 blur-2xl" />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <li key={s.label} className="flex items-baseline gap-3">
              <CountUp target={s.value} duration={s.duration ?? 1200} suffix={s.suffix} />
              <span className="text-sm text-white/70">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function CountUp({ target, duration = 1200, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      setValue(target)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            animate()
            io.disconnect()
          }
        })
      },
      { threshold: 0.4 },
    )
    io.observe(el)

    let raf = 0
    const start = performance.now()
    function animate() {
      raf = requestAnimationFrame((now) => {
        const t = Math.min(1, (now - start) / duration)
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - t, 3)
        const current = Math.round(eased * target)
        setValue(current)
        if (t < 1) animate()
      })
    }

    return () => cancelAnimationFrame(raf)
  }, [target, duration])

  return (
    <span ref={ref} className="text-3xl font-extrabold tracking-tight text-white md:text-4xl" aria-live="polite">
      {value}
      {suffix}
    </span>
  )
}

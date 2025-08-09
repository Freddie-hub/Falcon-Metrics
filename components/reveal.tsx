"use client"

import type React from "react"

import { useEffect, useRef } from "react"

type Direction = "up" | "left" | "right"

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: Direction
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const initial = direction === "left" ? "-translate-x-6" : direction === "right" ? "translate-x-6" : "translate-y-6"

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transitionDelay = `${delay}ms`
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("opacity-100", "translate-x-0", "translate-y-0")
            el.classList.remove("opacity-0", "translate-y-6", "translate-x-6", "-translate-x-6")
          }
        })
      },
      { threshold: 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`opacity-0 ${initial} transition-all duration-700 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  )
}

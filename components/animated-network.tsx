"use client"

import { useEffect, useRef } from "react"

type Point = { x: number; y: number; vx: number; vy: number }

export default function AnimatedNetwork({
  density = 0.00025,
  lineColor = "rgba(80,255,180,0.35)",
  accentColor = "rgba(236,72,153,0.28)",
  className = "",
}: {
  density?: number
  lineColor?: string
  accentColor?: string
  className?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const pointsRef = useRef<Point[]>([])
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!
    let w = (canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1))
    let h = (canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1))

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1)
      h = canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1)
      buildPoints()
    }
    const buildPoints = () => {
      const count = Math.max(50, Math.floor(w * h * density))
      pointsRef.current = Array.from({ length: count }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      }))
    }
    buildPoints()
    let mouse = { x: -9999, y: -9999 }

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = (e.clientX - rect.left) * (window.devicePixelRatio || 1)
      mouse.y = (e.clientY - rect.top) * (window.devicePixelRatio || 1)
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      // Gradient wash
      const grad = ctx.createLinearGradient(0, 0, w, h)
      grad.addColorStop(0, "rgba(16,185,129,0.06)")
      grad.addColorStop(1, "rgba(217,70,239,0.05)")
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      const pts = pointsRef.current
      // Move points
      for (const p of pts) {
        p.x += p.vx
        p.y += p.vy
        if (p.x <= 0 || p.x >= w) p.vx *= -1
        if (p.y <= 0 || p.y >= h) p.vy *= -1

        // Mouse repulsion
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d2 = dx * dx + dy * dy
        if (d2 < 12000) {
          p.vx += dx * 0.00002
          p.vy += dy * 0.00002
        }
      }

      // Draw links
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d2 = dx * dx + dy * dy
          if (d2 < 9000) {
            const t = 1 - d2 / 9000
            ctx.strokeStyle = t > 0.6 ? accentColor : lineColor
            ctx.lineWidth = Math.max(0.5, t * 1.5)
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw points
      for (const p of pts) {
        ctx.fillStyle = "rgba(255,255,255,0.45)"
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    canvas.addEventListener("mousemove", onMove)
    canvas.addEventListener("mouseleave", onLeave)
    window.addEventListener("resize", resize)
    draw()

    return () => {
      canvas.removeEventListener("mousemove", onMove)
      canvas.removeEventListener("mouseleave", onLeave)
      window.removeEventListener("resize", resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [density, lineColor, accentColor])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="size-full" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25] mix-blend-overlay"
        style={{ backgroundImage: "url(/textures/grain.png)" }}
        aria-hidden="true"
      />
    </div>
  )
}

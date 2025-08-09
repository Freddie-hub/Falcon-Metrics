"use client"

import type React from "react"

import Link from "next/link"
import {
  GraduationCap,
  Scale,
  Factory,
  ShoppingCart,
  Landmark,
  Stethoscope,
  BadgeDollarSign,
  Truck,
} from "lucide-react"

type Pill = {
  label: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const PILLS: Pill[] = [
  { label: "Education", icon: GraduationCap },
  { label: "Manufacturing", icon: Factory },
  { label: "Retail", icon: ShoppingCart },
  { label: "Public Sector", icon: Landmark },
  { label: "Healthcare", icon: Stethoscope },
  { label: "Finance", icon: BadgeDollarSign },
  { label: "Logistics", icon: Truck },
]

export default function IndustriesSection() {
  // Duplicate the pills to create a seamless marquee
  const loop = [...PILLS, ...PILLS]

  return (
    <section className="relative mx-auto mt-16 w-[92%]">
      <div className="mb-5 flex items-end justify-between gap-6">
        <div>
          <span className="block text-[11px] uppercase tracking-[0.25em] text-white/50">INDUSTRIES</span>
          <h2 className="mt-1 text-2xl font-bold text-white md:text-3xl">AI that meets you where you are</h2>
        </div>
        <Link href="/contact" className="group hidden text-sm text-white/80 md:inline-flex">
          <span className="relative">
            Discuss your use case
            <span className="absolute -bottom-0.5 left-0 block h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
          </span>
          <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-0.5">{"→"}</span>
        </Link>
      </div>

      {/* Marquee */}
      <div className="group/marquee relative overflow-hidden rounded-xl">
        <div className="marquee-track flex w-[200%] min-w-max items-center">
          {loop.map((p, idx) => (
            <MarqueePill key={`${p.label}-${idx}`} icon={p.icon} label={p.label} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: scroll 38s linear infinite;
        }
        .group\\/marquee:hover .marquee-track {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}

function MarqueePill({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
}) {
  return (
    <div className="mx-2 my-2 inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-[linear-gradient(135deg,#121212,40%,#171717)] px-4 py-2 text-sm text-white/90 shadow-[0_6px_24px_-18px_rgba(0,0,0,0.9)] transition-all duration-300 hover:scale-[1.03] hover:bg-[linear-gradient(135deg,#171717,40%,#1f1f1f)] hover:shadow-[0_8px_28px_-16px_rgba(0,0,0,1)] md:px-5 md:py-2.5">
      <Icon className="size-4 text-white/90 [filter:drop-shadow(0_0_6px_rgba(255,255,255,0.15))]" />
      <span className="font-semibold">{label}</span>
    </div>
  )
}

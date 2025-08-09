"use client"

import AnimatedNetwork from "./animated-network"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-16 md:pb-24">
      {/* Animated gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-0 h-[60vh] w-[60vw] rounded-[50%] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.25),transparent_60%)] blur-2xl" />
        <div className="absolute -right-32 bottom-0 h-[60vh] w-[60vw] rounded-[50%] bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.22),transparent_60%)] blur-2xl" />
        <AnimatedNetwork />
      </div>

      <div className="mx-auto w-[92%] pt-20 md:pt-28">
        <div className="grid items-end gap-10 md:grid-cols-[1.2fr_.8fr]">
          <div className="relative">
            <div className="inline-block -rotate-1 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-[11px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
              AI is everybody's business
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Adaptable, intelligent AI systems for every industry.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
              We help organizations and businesses build and integrate AI—from strategy to deployment so industries like healthcare, finance, logistics, education, and manufacturing can work smarter, faster, and with greater impact.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="group relative overflow-hidden bg-blue-600 text-white transition-transform hover:scale-[1.02] hover:bg-blue-700"
              >
                <Link href="/contact">
                  <span className="relative z-10">Get a Quote</span>
                  <ArrowRight className="ml-2 inline size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>

          {/* Angled glass panel */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <div className="absolute -left-10 -top-10 size-40 rotate-12 bg-gradient-to-br from-emerald-500/20 to-fuchsia-500/20 blur-3xl" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">Vision</h3>
              <p className="mt-2 text-lg font-medium text-white">
                {
                  "We build adaptable, intelligent AI systems that empower every organization across every industry to work smarter, faster, and with greater impact."
                }
              </p>
            </div>
            <div className="absolute -right-6 -top-6 h-20 w-24 -skew-y-6 rounded-xl bg-white/10 blur-sm" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  )
}
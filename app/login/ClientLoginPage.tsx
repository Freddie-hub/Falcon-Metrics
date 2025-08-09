"use client"

import type React from "react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ClientLoginPage() {
  const [loading, setLoading] = useState(false)

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 600))
    setLoading(false)
  }

  return (
    <main className="relative min-h-screen overflow-x-clip bg-neutral-950 text-white">
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.06] mix-blend-overlay"
        style={{ backgroundImage: "url(/textures/grain.png)" }}
        aria-hidden="true"
      />
      <Navbar />
      <section className="mx-auto grid w-[92%] max-w-lg place-items-center pt-16">
        <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="absolute -left-10 -top-10 size-56 rotate-12 bg-gradient-to-br from-emerald-400/15 to-fuchsia-500/15 blur-2xl" />
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="mb-4 mt-1 text-sm text-white/70">Login to manage your projects.</p>
          <form onSubmit={submit} className="grid gap-4">
            <LabeledInput label="Email" name="email" type="email" />
            <LabeledInput label="Password" name="password" type="password" />
            <div className="flex items-center justify-between">
              <Link href="/signup" className="text-xs text-white/70 hover:text-white">
                Create account
              </Link>
              <Button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 text-black hover:opacity-90"
              >
                {loading ? "Signing in…" : "Sign in"}
              </Button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  )
}

function LabeledInput({
  label,
  name,
  type,
}: {
  label: string
  name: string
  type: string
}) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-white/80">{label}</span>
      <input
        name={name}
        type={type}
        className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-sm text-white outline-none transition focus:border-fuchsia-400/50 focus:shadow-[0_0_0_4px_rgba(236,72,153,0.15)]"
        placeholder={"Enter " + label.toLowerCase()}
      />
    </label>
  )
}

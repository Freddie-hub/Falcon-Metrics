"use client"

import type React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactPageClient() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setError(null)

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", "a83017ae-d6ad-4470-88fa-8e1b37b5a4d3")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      const data = await res.json()

      if (data.success) {
        setStatus("success")
        e.currentTarget.reset()
      } else {
        setStatus("error")
        setError(data.message || "Something went wrong.")
      }
    } catch {
      setStatus("error")
      setError("Network error. Please try again.")
    }
  }

  return (
    <main className="relative min-h-screen overflow-x-clip bg-neutral-950 text-white">
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.06] mix-blend-overlay"
        style={{ backgroundImage: "url(/textures/grain.png)" }}
        aria-hidden="true"
      />
      <Navbar />

      <section className="mx-auto w-[92%] pt-16 max-w-3xl">
        <h1 className="text-3xl font-bold md:text-4xl mb-4">Start a Project</h1>
        <p className="text-sm text-white/70 mb-6">
          Tell us about your goals. We'll respond within 1–2 business days.
        </p>

        {/* WhatsApp Button (number hidden visually) */}
        <a
          href="https://wa.me/254768094564"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-8 bg-green-500 text-black px-4 py-2 rounded-lg font-medium hover:opacity-90"
        >
          Chat on WhatsApp
          <span className="sr-only">+254 768094564</span>
        </a>

        <form
          onSubmit={onSubmit}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          {/* Hidden inputs for Web3Forms */}
          <input type="hidden" name="subject" value="New Contact Form Submission" />
          <input type="hidden" name="from_name" value="Falcon Metrics" />

          <div className="grid gap-4">
            <Field label="Name" name="name" type="text" />
            <Field label="Email" name="email" type="email" />
            <Field label="Company (optional)" name="company" type="text" />
            <Field label="Phone Number (optional)" name="phone" type="tel" />
            <Field label="Message" name="message" as="textarea" rows={5} />

            <div className="flex items-center justify-between">
              {status === "success" && (
                <span className="text-sm text-emerald-400">Thanks! We'll be in touch.</span>
              )}
              {status === "error" && <span className="text-sm text-rose-400">{error}</span>}
              <Button
                type="submit"
                disabled={status === "loading"}
                className="ml-auto bg-blue-600 text-white hover:bg-blue-700"
              >
                {status === "loading" ? "Sending…" : "Send"}
              </Button>
            </div>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  )
}

function Field({
  label,
  name,
  type = "text",
  as,
  rows = 4,
}: {
  label: string
  name: string
  type?: string
  as?: "textarea"
  rows?: number
}) {
  const base =
    "w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-emerald-400/50 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.15)]"
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-white/80">{label}</span>
      {as === "textarea" ? (
        <textarea name={name} rows={rows} className={base} placeholder={"Enter " + label.toLowerCase()} />
      ) : (
        <input name={name} type={type} className={base} placeholder={"Enter " + label.toLowerCase()} />
      )}
    </label>
  )
}
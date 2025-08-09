"use client"

import type React from "react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { submitContact } from "./actions"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ContactPageClient() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setError(null)
    const form = e.currentTarget
    const res = await submitContact(new FormData(form))
    if (res.ok) {
      setStatus("success")
      form.reset()
    } else {
      setStatus("error")
      setError(res.error ?? "Something went wrong.")
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
      <section className="mx-auto w-[92%] pt-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h1 className="text-3xl font-bold md:text-4xl">Start a Project</h1>
            <p className="mt-2 text-sm text-white/70">
              Tell us about your goals. We’ll respond within 1–2 business days.
            </p>
            <div className="mt-6 grid gap-3 text-sm">
              <ContactRow
                icon={<MessageSquare className="size-4" />}
                label="WhatsApp"
                href="https://wa.me/254768094564"
                value="+254 768094564"
              />
              <ContactRow
                icon={<Mail className="size-4" />}
                label="Email"
                href="mailto:hello@falconmetrics.com"
                value="hello@falconmetrics.com"
              />
            </div>
            <div className="absolute -right-10 -top-10 size-56 rotate-6 bg-gradient-to-br from-emerald-400/15 to-fuchsia-500/15 blur-2xl" />
          </div>

          <form
            onSubmit={onSubmit}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid gap-4">
              <Field label="Name" name="name" type="text" />
              <Field label="Email" name="email" type="email" />
              <Field label="Company" name="company" type="text" />
              <Field label="Message" name="message" as="textarea" rows={5} />
              <div className="flex items-center justify-between">
                {status === "success" && <span className="text-sm text-emerald-400">Thanks! We’ll be in touch.</span>}
                {status === "error" && <span className="text-sm text-rose-400">{error}</span>}
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="ml-auto bg-gradient-to-r from-emerald-500 to-fuchsia-500 text-black hover:opacity-90"
                >
                  {status === "loading" ? "Sending…" : "Send"}
                </Button>
              </div>
            </div>
          </form>
        </div>
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

function ContactRow({
  icon,
  label,
  href,
  value,
}: {
  icon: React.ReactNode
  label: string
  href: string
  value: string
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-between rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white/80 transition-colors hover:bg-white/10"
      target="_blank"
    >
      <span className="inline-flex items-center gap-2">
        <span className="inline-grid size-6 place-items-center rounded-md bg-white/10 text-white">{icon}</span>
        <span className="text-white">{label}</span>
      </span>
      <span className="text-white/70">{value}</span>
    </Link>
  )
}

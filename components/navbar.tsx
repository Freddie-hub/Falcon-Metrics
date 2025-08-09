"use client"

import Link from "next/link"
import ThemeToggle from "./theme-toggle"
import { Menu, Sparkles } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Navbar({
  brand = "Falcon Metrics",
}: {
  brand?: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="relative mx-auto mt-0 w-[92%] rounded-xl border border-white/10 bg-transparent px-4 py-3 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] backdrop-blur-xl dark:border-white/10 dark:bg-transparent">
        <div className="pointer-events-none absolute inset-x-0 -bottom-4 mx-6 h-4 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm dark:via-white/10" />
        <nav className="flex items-center justify-between">
          <Link href="/" className="group inline-flex items-center gap-2">
            <div className="relative grid size-8 place-items-center rounded-md bg-gradient-to-br from-emerald-400 to-fuchsia-500 text-black transition-transform group-hover:rotate-3">
              <Sparkles className="size-4" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-white/90">{brand}</span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About" />
            <NavLink href="/services" label="Services" />
            <NavLink href="/projects" label="Projects" />
            <NavLink href="/contact" label="Contact" />
            <Link href="/login" className="text-sm text-white/70 hover:text-white">
              Login
            </Link>
            <Button asChild className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 text-black hover:opacity-90">
              <Link href="/signup">Start a Project</Link>
            </Button>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>

        {open && (
          <div className="mt-3 grid gap-2 rounded-lg border border-white/10 bg-black/40 p-3 text-sm backdrop-blur md:hidden">
            <Link className="rounded-md px-3 py-2 text-white/90 hover:bg-white/5" href="/">
              Home
            </Link>
            <Link className="rounded-md px-3 py-2 text-white/90 hover:bg-white/5" href="/about">
              About
            </Link>
            <Link className="rounded-md px-3 py-2 text-white/90 hover:bg-white/5" href="/services">
              Services
            </Link>
            <Link className="rounded-md px-3 py-2 text-white/90 hover:bg-white/5" href="/projects">
              Projects
            </Link>
            <Link className="rounded-md px-3 py-2 text-white/90 hover:bg-white/5" href="/contact">
              Contact
            </Link>
            <div className="flex items-center justify-between gap-3">
              <Link className="rounded-md px-3 py-2 text-white/70 hover:bg-white/5" href="/login">
                Login
              </Link>
              <Button asChild className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 text-black hover:opacity-90">
                <Link href="/signup">Start a Project</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="relative text-sm text-white/80 transition-colors hover:text-white">
      <span>{label}</span>
      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-fuchsia-500 transition-all group-hover:w-full" />
    </Link>
  )
}

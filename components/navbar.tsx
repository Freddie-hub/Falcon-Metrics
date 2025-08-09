"use client"

import Link from "next/link"
import Image from "next/image"
import ThemeToggle from "./theme-toggle"
import { Menu } from "lucide-react"
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
          {/* Brand Logo & Text */}
          <Link href="/" className="group inline-flex items-center gap-2">
            <div className="relative grid size-8 place-items-center rounded-md bg-gradient-to-br from-emerald-400 to-fuchsia-500 text-black transition-transform group-hover:rotate-3 overflow-hidden">
              <Image
                src="/logo.png"
                alt="Falcon Metrics Logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-sm font-semibold tracking-wide text-white/90">
              {brand}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About" />
            <NavLink href="/services" label="Services" />
            <NavLink href="/contact" label="Contact" />
            <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
              <Link href="/contact">Book Demo</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>

        {/* Mobile Slide Menu Overlay */}
        {open && (
          <div 
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Mobile Slide Menu */}
        <div
          className={`fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] transform !bg-sidebar shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ backgroundColor: 'oklch(0.1 0 0)' }} // true solid fallback
        >
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 p-6 bg-sidebar">
              <span className="text-lg font-semibold text-white">{brand}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 p-6">
              <div className="space-y-4">
                <MobileLink href="/" label="Home" setOpen={setOpen} />
                <MobileLink href="/about" label="About" setOpen={setOpen} />
                <MobileLink href="/services" label="Services" setOpen={setOpen} />
                <MobileLink href="/contact" label="Contact" setOpen={setOpen} />
              </div>
            </nav>

            {/* Bottom Actions */}
            <div className="border-t border-white/10 p-6">
              <div className="space-y-3">
                <Link 
                  className="block rounded-lg px-4 py-3 text-center text-white/70 hover:bg-white/5 transition-colors" 
                  href="/login"
                  onClick={() => setOpen(false)}
                >
                  Book demo
                </Link>
                <Button 
                  asChild 
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => setOpen(false)}
                >
                  <Link href="/signup">Book demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative text-sm text-white/80 transition-colors hover:text-white"
    >
      <span>{label}</span>
      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-fuchsia-500 transition-all group-hover:w-full" />
    </Link>
  )
}

function MobileLink({
  href,
  label,
  setOpen
}: {
  href: string
  label: string
  setOpen: (open: boolean) => void
}) {
  return (
    <Link 
      className="block rounded-lg px-4 py-3 text-lg text-white/90 hover:bg-white/10 transition-colors" 
      href={href}
      onClick={() => setOpen(false)}
    >
      {label}
    </Link>
  )
}

import Link from "next/link"
import { Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_0%,rgba(16,185,129,0.08),transparent)]" />
      <div className="relative mx-auto w-[92%] py-10 text-sm text-white/70">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p>
            {"© "} {new Date().getFullYear()} {"Falcon Metrics. All rights reserved."}
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex gap-6">
              <Link className="hover:text-white" href="/">
                Home
              </Link>
              <Link className="hover:text-white" href="/about">
                About
              </Link>
              <Link className="hover:text-white" href="/services">
                Services
              </Link>
              <Link className="hover:text-white" href="/projects">
                Projects
              </Link>
              <Link className="hover:text-white" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

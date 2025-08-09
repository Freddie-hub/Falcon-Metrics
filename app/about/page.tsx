import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "About — Falcon Metrics",
  description: "Our mission and story. We are the AI backbone for every business.",
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-neutral-950 text-white">
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.06] mix-blend-overlay"
        style={{ backgroundImage: "url(/textures/grain.png)" }}
        aria-hidden="true"
      />
      <Navbar />

      <section className="mx-auto w-[92%] pt-16">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="absolute -right-16 -top-16 size-64 rotate-6 bg-gradient-to-br from-emerald-400/15 to-fuchsia-500/15 blur-2xl" />
          <h1 className="text-3xl font-bold md:text-4xl">Our Story</h1>
          <p className="mt-3 max-w-3xl text-sm text-white/70 md:text-base">
            Falcon Metrics was founded on a simple belief: AI should empower every organization, not just the few with
            specialized teams. We build modular systems—from strategy through integration—that flex to your domain and
            scale with your needs.
          </p>
        </div>

        <div className="relative my-16 rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-fuchsia-500/10 p-8">
          <h2 className="text-xl font-semibold">Mission</h2>
          <p className="mt-2 max-w-3xl text-sm text-white/80">
            To deliver trustworthy, adaptable AI that unlocks measurable value across every industry. We believe in
            pragmatic roadmaps, robust safety, and integrations that fit your reality.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

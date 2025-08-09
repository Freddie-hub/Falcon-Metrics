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
        <h1 className="text-3xl font-bold md:text-4xl">Our Story</h1>
        <p className="mt-3 max-w-3xl text-sm text-white/70 md:text-base">
          Falcon Metrics was founded on a simple belief: AI should empower every organization, not just the few with
          specialized teams. We build systems from strategy through integration that flex to your domain and
          scale with your needs.
        </p>

        <div className="my-16">
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

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServicesSection from "@/components/sections/services-section"

export const metadata = {
  title: "Services — Falcon Metrics",
  description: "AI strategy, custom models, automation, data intelligence, integration, and governance.",
}

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-neutral-950 text-white">
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.06] mix-blend-overlay"
        style={{ backgroundImage: "url(/textures/grain.png)" }}
        aria-hidden="true"
      />
      <Navbar />
      <section className="mx-auto w-[92%] pt-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold md:text-4xl">What We Do</h1>
          <p className="mt-3 max-w-3xl text-sm text-white/70">
            From executive strategy to on-device inference, we assemble AI systems that fit your stack, your team, and
            your regulatory landscape.
          </p>
        </div>
        <ServicesSection />
        <div className="mx-auto mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 backdrop-blur">
          <p>
            Need a tailored roadmap? We run discovery sprints to map opportunities, quantify value, and de-risk
            implementation—from pilots to enterprise scale.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

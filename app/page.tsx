import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ServicesSection from "@/components/sections/services-section"
import StatsStrip from "@/components/sections/stats-strip"
import IndustriesSection from "@/components/sections/industries-section"
import ReviewsSection from "@/components/sections/reviews-section"
import Footer from "@/components/footer"
import Reveal from "@/components/reveal"

export const metadata = {
  title: "Falcon Metrics — The AI Backbone for Every Business",
  description:
    "We design and integrate adaptable AI systems across healthcare, finance, logistics, education, legal, manufacturing, and beyond.",
}

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-clip overscroll-none bg-neutral-950 text-white">
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.06] mix-blend-overlay"
        style={{ backgroundImage: "url(/textures/grain.png)" }}
        aria-hidden="true"
      />
      <Navbar />
      <Hero />
      <Reveal direction="up">
        <ServicesSection />
      </Reveal>
      <Reveal direction="left" delay={80}>
        <StatsStrip />
      </Reveal>
      <Reveal direction="right" delay={120}>
        <IndustriesSection />
      </Reveal>
      <Reveal direction="up" delay={160}>
        <ReviewsSection />
      </Reveal>
      <Footer />
    </main>
  )
}

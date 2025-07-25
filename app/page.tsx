import Hero from "@/components/hero"
import Features from "@/components/features"
import Benefits from "@/components/benefits"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Benefits />
      <CallToAction />
      <Footer />
    </main>
  )
}

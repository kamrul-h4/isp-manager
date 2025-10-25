import { FeaturesSection } from "@/app/(site)/features-section"
import { Footer } from "@/app/(site)/footer"
import { Header } from "@/app/(site)/header"
import { HeroSection } from "@/app/(site)/hero-section"

export const experimental_ppr = true

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}

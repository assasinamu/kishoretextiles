import { LoadingScreen } from '@/components/loading-screen'
import { CursorGlow } from '@/components/cursor-glow'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { About } from '@/components/about'
import { TrustCounters } from '@/components/trust-counters'
import { Collections } from '@/components/collections'
import { WhyChooseUs } from '@/components/why-choose-us'
import { FabricShowcase } from '@/components/fabric-showcase'
import { ReviewsCarousel } from '@/components/reviews-carousel'
import { Gallery } from '@/components/gallery'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { FloatingActions } from '@/components/floating-actions'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <Navbar />
      <main className="relative overflow-x-hidden">
        <Hero />
        <Marquee />
        <About />
        <TrustCounters />
        <Collections />
        <WhyChooseUs />
        <FabricShowcase />
        <ReviewsCarousel />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}

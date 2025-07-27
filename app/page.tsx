import { Navigation } from '@/components/Navigation'
import { EnhancedHero } from '@/components/EnhancedHero'
import { EnhancedMenuPreview } from '@/components/EnhancedMenuPreview'
import { Services } from '@/components/Services'
import { About } from '@/components/About'
import { SpecialOffers } from '@/components/SpecialOffers'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <EnhancedHero />
      <EnhancedMenuPreview />
      <Services />
      <About />
      <SpecialOffers />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
} 
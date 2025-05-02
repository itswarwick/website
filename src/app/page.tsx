import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main>
      <Navigation />
      
      {/* Home Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Featured Projects Section */}
      <section id="projects">
        <FeaturedProjects />
      </section>
    </main>
  )
}

import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import FeaturedProjects from '@/components/FeaturedProjects'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <FeaturedProjects />
      
      
    </main>
  )
}

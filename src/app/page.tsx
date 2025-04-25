import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Hello! I'm Warwick Gorman
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              A data-driven professional on a journey toward a $250K+ career in data/product analytics 
              and product management. Currently focused on leveraging data to drive business growth 
              and product decisions.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 border border-black text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
              >
                See my work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-black text-base font-medium rounded-md text-black hover:bg-black hover:text-white transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
          <div className="lg:text-right">
            <div className="inline-block text-left bg-gray-50 p-6 rounded-lg">
              <h2 className="font-semibold text-lg">Career Roadmap</h2>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>A.S. in Computer Science</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>B.S. in Statistics</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Online Master's in Analytics (OMSA)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <span>Senior Product Analytics Role</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

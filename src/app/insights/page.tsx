import Navigation from '@/components/Navigation'

export default function Insights() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <h1 className="text-4xl font-bold tracking-tight">Insights</h1>
        <p className="mt-4 text-lg text-gray-600">
          Thoughts and analysis on data analytics, product management, and tech career growth.
        </p>
        
        <div className="mt-12 space-y-12">
          {/* Blog Post 1 */}
          <article className="border-b border-gray-200 pb-12">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <time>March 15, 2024</time>
              <span>5 min read</span>
              <span className="px-2 py-1 bg-gray-100 rounded">Analytics</span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold">
              From Raw Data to Actionable Insights: A Product Analytics Journey
            </h2>
            <p className="mt-4 text-gray-600">
              How to transform complex datasets into clear, actionable insights that drive 
              product decisions and business growth. A practical guide based on real-world experience.
            </p>
            <a
              href="/insights/product-analytics-journey"
              className="mt-4 inline-flex items-center text-black font-medium hover:underline"
            >
              Read more →
            </a>
          </article>

          {/* Blog Post 2 */}
          <article className="border-b border-gray-200 pb-12">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <time>March 1, 2024</time>
              <span>7 min read</span>
              <span className="px-2 py-1 bg-gray-100 rounded">Career Growth</span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold">
              Transitioning to Product Analytics: A Strategic Career Guide
            </h2>
            <p className="mt-4 text-gray-600">
              Key steps, skills, and strategies for moving into product analytics roles. 
              Including certification paths, learning resources, and salary expectations.
            </p>
            <a
              href="/insights/transitioning-to-product-analytics"
              className="mt-4 inline-flex items-center text-black font-medium hover:underline"
            >
              Read more →
            </a>
          </article>

          {/* Blog Post 3 */}
          <article className="border-b border-gray-200 pb-12">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <time>February 15, 2024</time>
              <span>6 min read</span>
              <span className="px-2 py-1 bg-gray-100 rounded">Technical</span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold">
              Building Effective Data Pipelines: Best Practices and Pitfalls
            </h2>
            <p className="mt-4 text-gray-600">
              Technical deep-dive into creating robust data pipelines. Covering ETL processes,
              data quality checks, and scalability considerations.
            </p>
            <a
              href="/insights/data-pipeline-best-practices"
              className="mt-4 inline-flex items-center text-black font-medium hover:underline"
            >
              Read more →
            </a>
          </article>
        </div>
      </div>
    </main>
  )
} 
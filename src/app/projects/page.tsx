import Navigation from '@/components/Navigation'

export default function Projects() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="mt-4 text-lg text-gray-600">
          A collection of my work in data analytics, product management, and web development.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PlusEV Webapp */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-black transition-colors">
            <h3 className="text-xl font-semibold">PlusEV Webapp</h3>
            <p className="mt-2 text-gray-600">
              A web application for data-driven decision making in sports analytics.
              Built with modern web technologies and advanced statistical models.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 rounded text-sm">Python</span>
              <span className="px-2 py-1 bg-gray-100 rounded text-sm">React</span>
              <span className="px-2 py-1 bg-gray-100 rounded text-sm">API Integration</span>
            </div>
          </div>

          {/* Tableau Dashboards */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-black transition-colors">
            <h3 className="text-xl font-semibold">Analytics Dashboards</h3>
            <p className="mt-2 text-gray-600">
              Interactive Tableau dashboards for business intelligence and customer insights.
              Focused on user behavior and revenue metrics.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 rounded text-sm">Tableau</span>
              <span className="px-2 py-1 bg-gray-100 rounded text-sm">SQL</span>
              <span className="px-2 py-1 bg-gray-100 rounded text-sm">Data Visualization</span>
            </div>
          </div>

          {/* Marketing Analytics */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-black transition-colors">
            <h3 className="text-xl font-semibold">Marketing Analytics Framework</h3>
            <p className="mt-2 text-gray-600">
              End-to-end analytics solution for marketing campaign optimization
              and customer lifecycle analysis.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 rounded text-sm">Python</span>
              <span className="px-2 py-1 bg-gray-100 rounded text-sm">SQL</span>
              <span className="px-2 py-1 bg-gray-100 rounded text-sm">Marketing Analytics</span>
            </div>
          </div>

          {/* Data Pipeline */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-black transition-colors">
            <h3 className="text-xl font-semibold">ETL Data Pipeline</h3>
            <p className="mt-2 text-gray-600">
              Automated data pipeline for processing and analyzing large-scale
              customer data across multiple sources.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 rounded text-sm">Python</span>
              <span className="px-2 py-1 bg-gray-100 rounded text-sm">AWS</span>
              <span className="px-2 py-1 bg-gray-100 rounded text-sm">Data Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
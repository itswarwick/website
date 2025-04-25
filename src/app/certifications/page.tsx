import Navigation from '@/components/Navigation'

export default function Certifications() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <h1 className="text-4xl font-bold tracking-tight">Certifications</h1>
        <p className="mt-4 text-lg text-gray-600">
          Professional certifications and credentials in data analytics, business intelligence, and product management.
        </p>
        
        <div className="mt-12 space-y-8">
          {/* Google Data Analytics */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">Google Data Analytics Professional Certificate</h3>
                <p className="mt-1 text-gray-600">Google</p>
              </div>
              <span className="text-sm text-gray-500">2023</span>
            </div>
            <p className="mt-4 text-gray-600">
              Comprehensive training in data analytics including SQL, R programming, 
              data visualization, and statistical analysis.
            </p>
          </div>

          {/* Tableau */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">Tableau Desktop Specialist</h3>
                <p className="mt-1 text-gray-600">Tableau</p>
              </div>
              <span className="text-sm text-gray-500">2023</span>
            </div>
            <p className="mt-4 text-gray-600">
              Expert-level certification in creating and delivering data visualizations
              and interactive dashboards using Tableau.
            </p>
          </div>

          {/* Power BI */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">Microsoft Power BI Data Analyst Associate</h3>
                <p className="mt-1 text-gray-600">Microsoft</p>
              </div>
              <span className="text-sm text-gray-500">2023</span>
            </div>
            <p className="mt-4 text-gray-600">
              Advanced certification in Power BI for data modeling, visualization,
              and business intelligence reporting.
            </p>
          </div>

          {/* Advanced Analytics */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">Advanced Analytics Professional</h3>
                <p className="mt-1 text-gray-600">DataCamp</p>
              </div>
              <span className="text-sm text-gray-500">2023</span>
            </div>
            <p className="mt-4 text-gray-600">
              Specialized training in advanced analytics techniques including 
              predictive modeling, machine learning, and statistical analysis.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 
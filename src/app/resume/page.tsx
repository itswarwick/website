import Navigation from '@/components/Navigation'

export default function Resume() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Resume</h1>
            <p className="mt-4 text-lg text-gray-600">
              Professional experience in data analytics, marketing operations, and product management.
            </p>
          </div>
          <a
            href="/resume.pdf"
            className="inline-flex items-center px-4 py-2 border border-black text-sm font-medium rounded-md text-black hover:bg-black hover:text-white transition-colors"
          >
            Download PDF
          </a>
        </div>

        {/* Experience Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="mt-6 space-y-8">
            <div className="border-l-2 border-gray-200 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium">Marketing Operations Analyst</h3>
                  <p className="text-gray-600">Company Name</p>
                </div>
                <span className="text-sm text-gray-500">2022 - Present</span>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Led CRM strategy and implementation, improving customer engagement by 40%</li>
                <li>• Developed automated marketing analytics dashboards using Tableau and Power BI</li>
                <li>• Optimized lifecycle marketing campaigns through data-driven insights</li>
              </ul>
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium">Data Analytics Associate</h3>
                  <p className="text-gray-600">Previous Company</p>
                </div>
                <span className="text-sm text-gray-500">2020 - 2022</span>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Built and maintained ETL pipelines for customer data processing</li>
                <li>• Created predictive models for customer behavior analysis</li>
                <li>• Collaborated with product teams to implement data-driven features</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Technical Skills</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Programming & Analysis</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Python</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">SQL</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">R</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">JavaScript</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">APIs</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Tableau</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Power BI</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">AWS</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Git</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">Jira</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="mt-6 space-y-6">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium">Online Master's in Analytics (OMSA)</h3>
                  <p className="text-gray-600">Georgia Institute of Technology</p>
                </div>
                <span className="text-sm text-gray-500">In Progress</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium">B.S. in Statistics</h3>
                  <p className="text-gray-600">University Name</p>
                </div>
                <span className="text-sm text-gray-500">2020</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium">A.S. in Computer Science</h3>
                  <p className="text-gray-600">College Name</p>
                </div>
                <span className="text-sm text-gray-500">2018</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
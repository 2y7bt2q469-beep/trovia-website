import BetaSignup from '@/components/BetaSignup'

export default function MarinePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container-responsive py-20 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <a href="/" className="text-trovia-blue hover:text-blue-700 font-medium transition-colors">
                ← Back to home
              </a>
            </div>
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Trovia Marine
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                Capture and preserve everything you know about your boat — from maintenance schedules
                to quirks and improvements. Create a comprehensive guide that travels with your vessel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Preserve your vessel's story
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Every boat has its unique characteristics, maintenance needs, and history.
                Trovia helps you document this knowledge systematically, creating an invaluable
                resource for yourself and future owners.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-trovia-blue rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Track maintenance schedules and service history</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-trovia-blue rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Document equipment specifications and preferences</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-trovia-blue rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Record seasonal care and storage procedures</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Example Use Cases</h3>
              <div className="space-y-4 text-gray-700">
                <p className="border-l-4 border-trovia-blue pl-4">
                  "My 1985 Catalina has a quirky electrical system. The port nav light flickers
                  when the engine is running above 2000 RPM due to a loose ground wire behind panel C."
                </p>
                <p className="border-l-4 border-trovia-blue pl-4">
                  "Annual haul-out checklist: Replace through-hulls every 7 years,
                  check prop shaft alignment, inspect rudder bushings for wear."
                </p>
                <p className="border-l-4 border-trovia-blue pl-4">
                  "Winterization procedure: Drain freshwater system completely,
                  add antifreeze to head, cover ventilation, remove electronics."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-responsive">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How Trovia Marine works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl font-bold text-trovia-blue">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Capture Knowledge</h3>
              <p className="text-gray-600">
                Document everything you know about your boat — maintenance, quirks,
                improvements, and operational knowledge.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl font-bold text-trovia-blue">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Validate & Improve</h3>
              <p className="text-gray-600">
                Trovia provides real guidance to help validate and enhance your knowledge,
                ensuring accuracy and completeness.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl font-bold text-trovia-blue">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Make It Accessible</h3>
              <p className="text-gray-600">
                Access your boat's knowledge through AI assistants, mobile apps,
                or share it with mechanics, crew, or future owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Your boat's knowledge, preserved forever
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Whether you're planning maintenance, troubleshooting an issue, or preparing to sell,
              having your vessel's complete history at your fingertips is invaluable. Trovia helps
              you build and maintain this knowledge systematically.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">For Current Owners</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Never forget maintenance schedules or procedures</li>
                  <li>• Quickly troubleshoot recurring issues</li>
                  <li>• Track improvements and their effectiveness</li>
                  <li>• Maintain detailed service records</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">For Future Owners</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Complete vessel history and quirks</li>
                  <li>• Established maintenance routines</li>
                  <li>• Known issues and their solutions</li>
                  <li>• Equipment specifications and preferences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Signup Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-responsive">
          <div className="max-w-2xl mx-auto">
            <BetaSignup defaultDomain="Marine" />
          </div>
        </div>
      </section>
    </>
  )
}
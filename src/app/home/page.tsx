import BetaSignup from '@/components/BetaSignup'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white">
        <div className="container-responsive py-20 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <a href="/" className="text-trovia-blue hover:text-blue-700 font-medium transition-colors">
                ← Back to home
              </a>
            </div>
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Trovia Home
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                Capture and preserve everything you know about your home — from maintenance schedules
                to improvements and quirks. Create a comprehensive guide that travels with your property.
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
                Your home's complete story
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Every home has its unique characteristics, systems, and history.
                Trovia helps you document this knowledge systematically, creating an invaluable
                resource for yourself and future residents.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-trovia-blue rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Track maintenance schedules and service records</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-trovia-blue rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Document improvements and their effectiveness</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-trovia-blue rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Record system locations and specifications</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Example Use Cases</h3>
              <div className="space-y-4 text-gray-700">
                <p className="border-l-4 border-trovia-blue pl-4">
                  "Main water shutoff is behind the furnace in the basement. Use the red-handled
                  valve, not the blue one — learned that during the 2022 pipe freeze."
                </p>
                <p className="border-l-4 border-trovia-blue pl-4">
                  "HVAC filter: 16x25x1 MERV 11. Replace every 3 months. Best source is
                  Home Supply Co. — they deliver and it's 30% cheaper than local stores."
                </p>
                <p className="border-l-4 border-trovia-blue pl-4">
                  "Kitchen faucet drips when temperature drops below 40°F. Temporary fix:
                  slightly open cabinet doors. Permanent fix scheduled for spring 2024."
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
            How Trovia Home works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl font-bold text-trovia-blue">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Capture Knowledge</h3>
              <p className="text-gray-600">
                Document everything you know about your home — systems, maintenance,
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
                Access your home's knowledge through AI assistants, mobile apps,
                or share it with contractors, family, or future residents.
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
              Never lose track of your home's details again
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Whether you're handling routine maintenance, dealing with emergencies, or preparing to sell,
              having your home's complete knowledge at your fingertips saves time, money, and stress.
              Trovia helps you build and maintain this knowledge systematically.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">For Current Residents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Never forget maintenance schedules or procedures</li>
                  <li>• Quickly locate shutoffs and system controls</li>
                  <li>• Track what improvements work (and which don't)</li>
                  <li>• Maintain detailed service and warranty records</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">For Future Residents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Complete home history and quirks</li>
                  <li>• Established maintenance routines</li>
                  <li>• Known issues and their solutions</li>
                  <li>• System specifications and preferences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Care Section */}
      <section className="bg-green-50 py-20">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Seasonal care made simple
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Spring</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• HVAC system tune-up</li>
                  <li>• Gutter cleaning</li>
                  <li>• Outdoor faucet check</li>
                  <li>• Garden prep</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Summer</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• AC filter replacement</li>
                  <li>• Deck maintenance</li>
                  <li>• Sprinkler system check</li>
                  <li>• Window cleaning</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Fall</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Leaf removal</li>
                  <li>• Furnace inspection</li>
                  <li>• Weatherstripping check</li>
                  <li>• Outdoor furniture storage</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Winter</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Pipe insulation check</li>
                  <li>• Snow removal plan</li>
                  <li>• Emergency kit update</li>
                  <li>• Humidity monitoring</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Trovia helps you customize these schedules based on your specific home and climate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Signup Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="max-w-2xl mx-auto">
            <BetaSignup defaultDomain="Home" />
          </div>
        </div>
      </section>
    </>
  )
}
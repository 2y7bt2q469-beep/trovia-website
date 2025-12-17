import BetaSignup from '@/components/BetaSignup'

export default function BusinessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container-responsive py-20 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <a href="/" className="text-trovia-blue hover:text-blue-700 font-medium transition-colors">
                ← Back to home
              </a>
            </div>
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Trovia for Business
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                Capture and preserve institutional knowledge before it walks out the door.
                Make critical processes, relationships, and operational expertise accessible
                across your organization and to your customers.
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
                Preserve what matters most
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                When employees leave, they take years of accumulated knowledge with them.
                Trovia helps you systematically capture and preserve this institutional knowledge,
                making it accessible where it's needed most — in customer support, training programs,
                and day-to-day operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-trovia-blue rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Capture critical processes and decision-making knowledge</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-trovia-blue rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Make expertise accessible in customer support systems</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-trovia-blue rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Accelerate training and onboarding processes</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Property Management Example</h3>
              <div className="space-y-4 text-gray-700">
                <p className="border-l-4 border-trovia-blue pl-4">
                  <strong>Building 425 Oak Street:</strong> "Water pressure drops in units 3A-3C every winter.
                  Root cause: old valve in basement needs replacement. Temporary fix: adjust pressure regulator
                  to 65 PSI. Schedule valve replacement for spring."
                </p>
                <p className="border-l-4 border-trovia-blue pl-4">
                  <strong>Tenant Relations:</strong> "Mrs. Johnson in 2B prefers text communication and pays
                  rent early every month in exchange for priority maintenance. She's been here 8 years and
                  is willing to help with tenant issues."
                </p>
                <p className="border-l-4 border-trovia-blue pl-4">
                  <strong>Vendor Knowledge:</strong> "For HVAC issues, call Martinez & Sons first.
                  They know our system and offer 20% discount for multi-unit buildings.
                  Average response time: 4 hours for emergencies."
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
            How Trovia for Business works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl font-bold text-trovia-blue">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Capture Knowledge</h3>
              <p className="text-gray-600">
                Systematically document processes, relationships, and operational expertise
                before it's lost to employee turnover.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl font-bold text-trovia-blue">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Validate & Organize</h3>
              <p className="text-gray-600">
                Trovia helps validate and structure knowledge for maximum accessibility
                and usefulness across your organization.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl font-bold text-trovia-blue">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Deploy & Access</h3>
              <p className="text-gray-600">
                Make knowledge accessible through AI assistants, customer support systems,
                training programs, and custom applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container-responsive">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Common business applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Property Management</h3>
              <p className="text-sm text-gray-600 mb-3">
                Maintain detailed records across portfolio properties, tenant relationships,
                and vendor knowledge.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Building-specific maintenance procedures</li>
                <li>• Tenant preference and history tracking</li>
                <li>• Vendor performance and contact details</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Professional Services</h3>
              <p className="text-sm text-gray-600 mb-3">
                Capture client preferences, project methodologies, and industry-specific expertise.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Client communication preferences</li>
                <li>• Project delivery frameworks</li>
                <li>• Industry regulatory requirements</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Customer Support</h3>
              <p className="text-sm text-gray-600 mb-3">
                Preserve solutions to complex problems and customer-specific knowledge.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Complex troubleshooting procedures</li>
                <li>• Customer-specific configurations</li>
                <li>• Escalation decision trees</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Manufacturing</h3>
              <p className="text-sm text-gray-600 mb-3">
                Document equipment knowledge, quality procedures, and safety protocols.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Machine-specific maintenance procedures</li>
                <li>• Quality control checkpoints</li>
                <li>• Safety incident response protocols</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Healthcare Administration</h3>
              <p className="text-sm text-gray-600 mb-3">
                Maintain operational procedures, patient care protocols, and regulatory compliance.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Patient care coordination procedures</li>
                <li>• Regulatory compliance checklists</li>
                <li>• Equipment operation protocols</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Financial Services</h3>
              <p className="text-sm text-gray-600 mb-3">
                Capture client relationship knowledge, compliance procedures, and risk assessment frameworks.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Client relationship history</li>
                <li>• Compliance procedure documentation</li>
                <li>• Risk assessment methodologies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Enterprise-ready knowledge management
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Security & Control</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-trovia-blue mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Your data remains under your complete control</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-trovia-blue mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Not training public AI models</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-trovia-blue mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Granular access controls and permissions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-trovia-blue mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Enterprise-grade security and compliance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Integration & Scale</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-trovia-blue mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>API access for custom integrations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-trovia-blue mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Seamless deployment across departments</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-trovia-blue mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Support for thousands of concurrent users</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-trovia-blue mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Analytics and usage reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Signup Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="max-w-2xl mx-auto">
            <BetaSignup defaultDomain="Business" />
          </div>
        </div>
      </section>
    </>
  )
}
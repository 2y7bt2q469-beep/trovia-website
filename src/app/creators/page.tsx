import BetaSignup from '@/components/BetaSignup'

export default function CreatorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white">
        <div className="container-responsive py-20 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <a href="/" className="text-trovia-blue hover:text-blue-700 font-medium transition-colors">
                ← Back to home
              </a>
            </div>
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Trovia for Content Creators
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                Turn your specialized knowledge into accessible resources. Help your audience get
                personalized guidance while maintaining complete control over how your expertise is shared.
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
                Your expertise, accessible everywhere
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're teaching photography, cooking, fitness, or any specialized skill,
                Trovia helps you capture and share your knowledge systematically. Create resources
                that provide personalized guidance to your audience while you maintain full control.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-trovia-blue rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Capture nuanced expertise and decision-making processes</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-trovia-blue rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Make knowledge accessible in AI assistants and custom apps</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-trovia-blue rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Maintain full control over your intellectual property</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Example Use Cases</h3>
              <div className="space-y-4 text-gray-700">
                <p className="border-l-4 border-trovia-blue pl-4">
                  <strong>Photography Instructor:</strong> "For portraits in harsh sunlight,
                  use a reflector at 45° below the subject's face. If shadows are still too strong,
                  bump ISO to 400 and use fill flash at -1 EV."
                </p>
                <p className="border-l-4 border-trovia-blue pl-4">
                  <strong>Fitness Coach:</strong> "When someone has knee issues, replace squats with
                  wall sits and glute bridges. Progress them to Bulgarian split squats only after
                  they can do 20 wall sits without pain."
                </p>
                <p className="border-l-4 border-trovia-blue pl-4">
                  <strong>Cooking Expert:</strong> "Pasta water should taste like seawater.
                  For every 100g of pasta, use 1L water + 10g salt. Reserve 1 cup pasta water
                  before draining — it's liquid gold for sauce."
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
            How Trovia for Creators works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl font-bold text-trovia-blue">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Capture Expertise</h3>
              <p className="text-gray-600">
                Document your knowledge, techniques, and decision-making processes.
                Capture the nuanced details that make you an expert.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl font-bold text-trovia-blue">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Validate & Enhance</h3>
              <p className="text-gray-600">
                Trovia helps you organize and validate your expertise,
                ensuring it's comprehensive and accessible to learners.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl font-bold text-trovia-blue">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Share Responsibly</h3>
              <p className="text-gray-600">
                Make your knowledge accessible through AI assistants, apps, and courses
                while maintaining control over how it's used and shared.
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
              Scale your expertise without losing the personal touch
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Traditional content creation forces you to choose between scale and personalization.
              With Trovia, your audience can get personalized guidance based on your expertise,
              available wherever they need it most.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">For You</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Scale your knowledge without constant availability</li>
                  <li>• Maintain control over your intellectual property</li>
                  <li>• Create deeper value for your audience</li>
                  <li>• Preserve your expertise permanently</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">For Your Audience</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Get personalized guidance when they need it</li>
                  <li>• Access your expertise through familiar tools</li>
                  <li>• Learn at their own pace with your methods</li>
                  <li>• Apply your knowledge to their specific situations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Types Section */}
      <section className="bg-purple-50 py-20">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Perfect for any type of creator
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Educators & Trainers</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Capture teaching methodologies, common student challenges, and proven solutions.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Course design principles</li>
                  <li>• Student assessment strategies</li>
                  <li>• Learning accommodation techniques</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Technical Experts</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Document troubleshooting processes, best practices, and decision frameworks.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Debugging methodologies</li>
                  <li>• Architecture decision records</li>
                  <li>• Code review standards</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Creative Professionals</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Share artistic techniques, creative processes, and industry insights.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Design principles</li>
                  <li>• Creative workflow optimization</li>
                  <li>• Client communication strategies</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Health & Wellness</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Capture personalized approaches, modification strategies, and safety protocols.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Exercise modifications</li>
                  <li>• Nutrition guidance frameworks</li>
                  <li>• Progress tracking methods</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Business Consultants</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Document frameworks, methodologies, and industry-specific expertise.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Strategic planning templates</li>
                  <li>• Industry analysis methods</li>
                  <li>• Change management approaches</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Hobbyist Experts</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Share specialized knowledge, tips, and hard-learned lessons with communities.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Technique refinements</li>
                  <li>• Equipment recommendations</li>
                  <li>• Common pitfall avoidance</li>
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
            <BetaSignup defaultDomain="Content Creators" />
          </div>
        </div>
      </section>
    </>
  )
}
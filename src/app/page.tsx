import BetaSignup from '@/components/BetaSignup'
import DomainCard from '@/components/DomainCard'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-responsive py-24 lg:py-32">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight text-balance leading-none">
                Capture, grow, and share expertise
              </h1>

              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed text-balance">
                Trovia helps people and businesses capture what they know, improve it with real guidance,
                and make it accessible where it's needed — for themselves, family and friends, or customers — across
                tools like ChatGPT, Claude, customer support systems, and custom applications.
              </p>

              <div className="flex justify-center">
                <a href="#beta-signup" className="btn-primary text-base">
                  Join the Beta
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where Trovia Works Best Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-responsive">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-balance">
              Where Trovia works best
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Trovia works anywhere institutional knowledge is present — where experience
              builds over time and context matters. Here are a few examples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <DomainCard
              title="Trovia Marine"
              description="Capture expertise about your boat."
              supportingText="Systems, maintenance, upgrades, service history, and the hard-won knowledge that usually lives in manuals, invoices, and memory."
              href="/marine"
              domain="Marine"
            />

            <DomainCard
              title="Trovia Home"
              description="Capture expertise about your home."
              supportingText="Renovations, appliances, contractor work, warranties, and the decisions and details that accumulate over years of ownership."
              href="/home"
              domain="Home"
            />

            <DomainCard
              title="Trovia for Content Creators"
              description="Capture and share your expertise."
              supportingText="Turn your knowledge into trusted answers your audience can access — while maintaining control over how your expertise is used and shared."
              href="/creators"
              domain="Content Creators"
            />

            <DomainCard
              title="Trovia for Business"
              description="Capture institutional knowledge."
              supportingText="Processes, playbooks, customer and property context, and operational know-how — accessible across support tools, internal systems, and custom apps."
              href="/business"
              domain="Business"
            />
          </div>
        </div>
      </section>

      {/* Trust & Control Section */}
      <section className="section-spacing bg-white">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-balance">
                Your expertise, on your terms
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Trovia is built for deliberate, scoped expertise. You decide what knowledge is included, how it's validated, and where it can be accessed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy to add, easy to refine</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Start with what you already have — documents, photos, notes, recordings, or links.
                  Trovia helps organize and connect that knowledge, improving accuracy over time with real guidance — without requiring technical setup or ongoing management.
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  You stay in control of what's captured and how it's used.
                </p>
              </div>

              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Your knowledge stays yours</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Trovia does not train a public AI or learn from your personal activity.
                  The expertise you share remains private, scoped, and accessible only in the ways you choose.
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  Nothing is inferred. Nothing is shared by default.
                </p>
              </div>

              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessible where it matters</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Make your expertise available wherever questions come up — in Trovia itself, through tools like ChatGPT or Claude, inside customer support systems, or embedded in your own applications.
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  One source of truth. Many ways to use it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Signup Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-20 lg:py-28">
        <div className="container-responsive">
          <div className="max-w-2xl mx-auto">
            <BetaSignup />
          </div>
        </div>
      </section>
    </>
  )
}
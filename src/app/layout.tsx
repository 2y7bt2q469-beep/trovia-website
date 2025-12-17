import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trovia - Capture, grow, and share expertise',
  description: 'Trovia helps people and businesses capture what they know, improve it with real guidance, and make it accessible where it\'s needed.',
  keywords: 'expertise, knowledge management, AI assistant, business intelligence',
  openGraph: {
    title: 'Trovia - Capture, grow, and share expertise',
    description: 'Trovia helps people and businesses capture what they know, improve it with real guidance, and make it accessible where it\'s needed.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <header className="border-b border-gray-200">
          <div className="container-responsive">
            <nav className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-trovia-blue">
                  Trovia
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#beta-signup" className="btn-primary">
                  Join the Beta
                </a>
              </div>
            </nav>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="container-responsive py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-trovia-blue">Trovia</span>
                </div>
                <p className="text-gray-600 max-w-md">
                  Capture, grow, and share expertise. Make knowledge accessible where it's needed most.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Domains</h4>
                <ul className="space-y-2">
                  <li><a href="/marine" className="text-gray-600 hover:text-trovia-blue transition-colors">Marine</a></li>
                  <li><a href="/home" className="text-gray-600 hover:text-trovia-blue transition-colors">Home</a></li>
                  <li><a href="/creators" className="text-gray-600 hover:text-trovia-blue transition-colors">Creators</a></li>
                  <li><a href="/business" className="text-gray-600 hover:text-trovia-blue transition-colors">Business</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#beta-signup" className="text-gray-600 hover:text-trovia-blue transition-colors">Join Beta</a></li>
                  <li><a href="/privacy" className="text-gray-600 hover:text-trovia-blue transition-colors">Privacy</a></li>
                  <li><a href="/terms" className="text-gray-600 hover:text-trovia-blue transition-colors">Terms</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
              <p>&copy; 2024 Trovia. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
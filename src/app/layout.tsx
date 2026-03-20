import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trovia - For when general AI just isn\'t enough',
  description: 'Trovia adds your domain knowledge, history, and nuance that general AI doesn\'t have on its own.',
  keywords: 'AI, domain expertise, knowledge management, context',
  openGraph: {
    title: 'Trovia - For when general AI just isn\'t enough',
    description: 'Trovia adds your domain knowledge, history, and nuance that general AI doesn\'t have on its own.',
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
        <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center justify-between h-18">
              <div className="flex items-center">
                <a href="/" className="flex items-center">
                  <svg className="w-7 h-7 mr-3 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    <path d="M8 11h8M10 15h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span className="text-xl font-medium text-gray-900 tracking-[-0.01em]">Trovia</span>
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-8">
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer className="bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="text-center text-gray-500">
              <div className="mb-4 flex flex-wrap justify-center gap-6">
                <a
                  href="/terms"
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Terms & Conditions
                </a>
                <a
                  href="/privacy"
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
              <p>&copy; 2025 Trovia.inc. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
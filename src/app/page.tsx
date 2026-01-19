'use client';

import { useState } from 'react';

export default function HomePage() {
  const [showExamples, setShowExamples] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
          <div className="text-center">
            <h1 className="hero-title">
              <span className="block">When General AI</span>
              <span className="text-blue-700">just isn't enough</span>
            </h1>

            <p className="hero-subhead">
              Trovia adds validated domain knowledge, history, and nuance — so the AI tools you already use behave the way you expect.
            </p>

            <div className="mt-8">
              <a href="/beta" className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200">
                Join the beta
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
              </svg>
            </div>
            <h2 className="section-heading">
              How it works
            </h2>
            <p className="section-subhead">
              Add your content, review what's relevant, use with existing tools.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/>
                </svg>
              </div>
              <h3 className="step-heading">Upload</h3>
              <p className="body-text">Add documents, notes, images, and records</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="step-heading">Review</h3>
              <p className="body-text">Validate and approve what gets used</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                </svg>
              </div>
              <h3 className="step-heading">Connect</h3>
              <p className="body-text">Access through your existing workflow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
            </svg>
          </div>
          <h2 className="section-heading mb-4">
            Works with your existing tools
          </h2>
          <p className="section-subhead mb-12">
            Trovia holds validated, domain-specific knowledge. Your AI tools use it wherever they already work.
          </p>

          <div className="flex justify-center items-center space-x-12">
            {/* ChatGPT Logo */}
            <div className="flex flex-col items-center space-y-2">
              <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142-.0852 4.783-2.7582a.7712.7712 0 0 0 .7806 0l5.8428 3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
              </svg>
              <span className="text-xs text-gray-400">ChatGPT</span>
            </div>

            {/* Claude Logo */}
            <div className="flex flex-col items-center space-y-2">
              <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.307 2.5C4.926 2.5 3 4.426 3 6.807v10.386C3 19.574 4.926 21.5 7.307 21.5h9.386c2.381 0 4.307-1.926 4.307-4.307V6.807C21 4.426 19.074 2.5 16.693 2.5H7.307z"/>
                <path d="M16.024 8.192c-1.536-2.304-4.608-2.88-6.912-1.344-2.304 1.536-2.88 4.608-1.344 6.912.192.288.384.576.624.816L12 18.24l3.608-3.664c.24-.24.432-.528.624-.816 1.536-2.304.96-5.376-1.344-6.912-.288-.192-.576-.336-.864-.456z" fill="white"/>
              </svg>
              <span className="text-xs text-gray-400">Claude</span>
            </div>

            {/* Microsoft Copilot Logo */}
            <div className="flex flex-col items-center space-y-2">
              <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.4 11.4H2V2h9.4v9.4z"/>
                <path d="M22 11.4h-9.4V2H22v9.4z"/>
                <path d="M11.4 22H2v-9.4h9.4V22z"/>
                <path d="M22 22h-9.4v-9.4H22V22z"/>
              </svg>
              <span className="text-xs text-gray-400">Copilot</span>
            </div>

            {/* Custom Apps Icon */}
            <div className="flex flex-col items-center space-y-2">
              <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M9 12h6m-6 4h4"/>
              </svg>
              <span className="text-xs text-gray-400">Custom</span>
            </div>
          </div>
        </div>
      </section>



      {/* Final CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="section-heading mb-4">
            Ready to get started?
          </h2>
          <p className="section-subhead mb-8">
            Join the beta and start adding context to AI today.
          </p>
          <div className="flex justify-center">
            <a href="/beta" className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
              Join the Beta
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
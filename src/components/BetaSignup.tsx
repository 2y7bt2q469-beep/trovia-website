'use client'

import { useState } from 'react'
import { BetaSignupData, BetaSignupProps, InterestType, DomainType } from '@/lib/types'

export default function BetaSignup({ defaultDomain, className = '' }: BetaSignupProps) {
  const getDefaultInterest = (domain?: DomainType): InterestType => {
    switch (domain) {
      case 'Marine': return 'Marine'
      case 'Home': return 'Home'
      case 'Business': return 'Business'
      case 'Content Creators': return 'Content creation'
      default: return 'Other'
    }
  }

  const [formData, setFormData] = useState<BetaSignupData>({
    name: '',
    email: '',
    interest: getDefaultInterest(defaultDomain)
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/beta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if (isSubmitted) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`} id="beta-signup">
        <div className="text-center">
          <div className="mb-4">
            <svg className="mx-auto h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank you for joining!</h3>
          <p className="text-gray-600">
            We'll keep you updated on Trovia's progress and let you know when you can start capturing expertise.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`} id="beta-signup">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Join the Beta</h3>
        <p className="text-gray-600">
          Get early access to Trovia and help shape the future of expertise capture.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-trovia-blue focus:border-trovia-blue"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-trovia-blue focus:border-trovia-blue"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
            What I am interested in *
          </label>
          <select
            id="interest"
            name="interest"
            required
            value={formData.interest}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-trovia-blue focus:border-trovia-blue"
          >
            <option value="Marine">Marine</option>
            <option value="Home">Home</option>
            <option value="Business">Business</option>
            <option value="Content creation">Content creation</option>
            <option value="Cooking">Cooking</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Join Beta'}
          </button>
        </div>

        <div className="text-xs text-gray-500 text-center">
          <p>
            By joining, you agree that your data will be stored securely and used only for Trovia beta communications.
            You are not training a public LLM — your expertise remains under your control.
          </p>
        </div>
      </form>
    </div>
  )
}
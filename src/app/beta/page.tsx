'use client';

import { useState } from 'react';

export default function BetaPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Personal',
    description: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/beta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          interest: formData.interest,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      console.log('Form submitted successfully:', data);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <section className="bg-white py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center">
            <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Thank you for joining the beta!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We'll be in touch soon with early access and updates on Trovia's development.
            </p>
            <a href="/" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to home
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Header Section */}
      <section className="bg-white py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Join the Beta
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Help us build Trovia by testing early features and sharing your feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-900 mb-2">
                  I'm interested in
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Personal">Personal</option>
                  <option value="Team">Team</option>
                  <option value="Company">Company</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-900 mb-2">
                  What do you want Trovia to help you capture?
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Tell us about the knowledge or expertise you'd like to capture and share..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                <p>
                  <strong>Consent:</strong> By joining, you agree your data will be stored securely and used only for Trovia beta communications. You are not training a public LLM — your knowledge remains under your control.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Join the Beta
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-white py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What to expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Early Access</h3>
              <p className="text-gray-600 text-sm">
                Get access to Trovia as we build it, with new features rolling out regularly.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Direct Feedback</h3>
              <p className="text-gray-600 text-sm">
                Share your thoughts directly with the team and help shape the product.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">No Commitment</h3>
              <p className="text-gray-600 text-sm">
                Participate as much or as little as you'd like. Opt out at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
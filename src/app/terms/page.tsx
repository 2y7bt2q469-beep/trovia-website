export default function TermsPage() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-lg text-gray-600 max-w-none">
          <p className="text-xl leading-relaxed mb-8">
            Last updated: December 2024
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <p className="text-blue-800 font-medium">
              Note: These are placeholder terms. Full legal terms will be provided before the beta launch.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Acceptance of Terms</h2>
          <p className="leading-relaxed mb-6">
            By accessing and using Trovia, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Use License</h2>
          <p className="leading-relaxed mb-6">
            Permission is granted to temporarily access Trovia for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Your Content</h2>
          <p className="leading-relaxed mb-6">
            You retain all rights to the content you upload to Trovia. We do not claim ownership of your content or use it to train public models.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Beta Service</h2>
          <p className="leading-relaxed mb-6">
            Trovia is currently in beta. The service is provided "as is" and may include bugs or service interruptions as we continue to develop the platform.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">SMS and Communication Consent</h2>
          <p className="leading-relaxed mb-6">
            By providing your phone number, you agree to receive one-time passcodes from Trovia. Providing a phone number is optional for our customers. You may opt out of SMS communications at any time by replying STOP to any message or contacting us directly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Privacy</h2>
          <p className="leading-relaxed mb-6">
            Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Contact Information</h2>
          <p className="leading-relaxed mb-6">
            If you have any questions about these Terms, please contact us at{' '}
            <a href="mailto:legal@trovia.com" className="text-blue-600 hover:text-blue-700 font-medium">
              legal@trovia.com
            </a>
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-12">
            <p className="text-sm text-gray-600">
              These terms are subject to change. Complete legal terms will be provided before the beta launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
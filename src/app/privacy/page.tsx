export default function PrivacyPage() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg text-gray-600 max-w-none">
          <p className="text-xl leading-relaxed mb-8">
            Last updated: December 2024
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Our Commitment</h2>
          <p className="leading-relaxed mb-6">
            Trovia is built on the principle that your knowledge belongs to you. We are committed to protecting your privacy and ensuring that your data is handled with the utmost care and transparency.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">What We Collect</h2>
          <p className="leading-relaxed mb-4">We collect only the information necessary to provide and improve our service:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Account information (name, email address) when you sign up</li>
            <li>Phone number (optional) for sending one-time passcodes for account verification</li>
            <li>Content you choose to add to Trovia (documents, notes, etc.)</li>
            <li>Usage data to improve our service (how you interact with the platform)</li>
            <li>Technical data (IP address, browser type) for security and optimization</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">How We Use Your Data</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <p className="font-semibold text-blue-900 mb-2">Core Principle:</p>
            <p className="text-blue-800">
              We do NOT use your content to train public AI models or improve services for other users. Your knowledge stays yours.
            </p>
          </div>

          <p className="leading-relaxed mb-4">We use your data only to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Provide and maintain the Trovia service</li>
            <li>Process your content to create your personal knowledge base</li>
            <li>Communicate with you about your account and our service</li>
            <li>Improve the technical infrastructure of our platform</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Data Security</h2>
          <p className="leading-relaxed mb-6">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is encrypted both in transit and at rest.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Your Rights</h2>
          <p className="leading-relaxed mb-4">You have complete control over your data:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Access and download all your data at any time</li>
            <li>Correct or update your information</li>
            <li>Delete your account and all associated data</li>
            <li>Control how your knowledge is accessed and shared</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Data Sharing</h2>
          <p className="leading-relaxed mb-6">
            We do not sell, trade, or otherwise transfer your personal information to third parties. We may share data only in these limited circumstances:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>With your explicit consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect the rights and safety of our users</li>
            <li>With service providers who help us operate our platform (under strict confidentiality agreements)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Contact Us</h2>
          <p className="leading-relaxed mb-6">
            If you have any questions about this Privacy Policy or how we handle your data, please contact us at{' '}
            <a href="mailto:privacy@trovia.com" className="text-blue-600 hover:text-blue-700 font-medium">
              privacy@trovia.com
            </a>
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-12">
            <p className="text-sm text-gray-600">
              This policy may be updated from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
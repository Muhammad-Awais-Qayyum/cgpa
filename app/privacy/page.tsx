import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | GPA to CGPA Calculator',
  description: 'Privacy policy for the GPA to CGPA Calculator application.',
};

// Static page - will be pre-rendered at build time
export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border-2 border-blue-200 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        
        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <p className="text-sm text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy describes how the GPA to CGPA Calculator ("we", "our", or "the application") 
              handles information when you use our web application. We are committed to protecting your privacy 
              and ensuring the security of your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Collection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>We do not collect, store, or transmit any personal data or GPA information.</strong> 
              All calculations are performed entirely in your web browser using client-side JavaScript. 
              Your data never leaves your device.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The application may collect standard web analytics data such as:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
              <li>Page views and navigation patterns (if analytics are enabled)</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>IP address (anonymized)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              This information is used solely for improving the application and understanding usage patterns. 
              It is not linked to any personal identifiers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Local Storage</h2>
            <p className="text-gray-700 leading-relaxed">
              The application may use browser local storage to remember your preferences (such as selected 
              grading scale) for convenience. This data is stored only on your device and can be cleared 
              at any time through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              This application may use essential cookies for functionality. We do not use tracking cookies 
              or third-party advertising cookies. You can disable cookies in your browser settings, though 
              this may affect some functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed">
              The application is built using Next.js and may be hosted on platforms like Vercel. These 
              services may collect standard server logs and analytics data. Please refer to their respective 
              privacy policies for more information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              Since all calculations are performed locally in your browser, your GPA data is never transmitted 
              over the internet. This ensures maximum security and privacy. However, you are responsible for 
              maintaining the security of your own device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our application is designed to be safe for users of all ages. Since we do not collect personal 
              information, we comply with children's privacy regulations. However, we recommend that children 
              under 13 use this application with parental supervision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page 
              with an updated "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through the appropriate 
              channels provided on the application.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}


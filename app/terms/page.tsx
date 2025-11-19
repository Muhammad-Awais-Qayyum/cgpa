import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | GPA to CGPA Calculator',
  description: 'Terms of service for the GPA to CGPA Calculator application.',
};

// Static page - will be pre-rendered at build time
export default function TermsPage() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border-2 border-blue-200 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        
        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <p className="text-sm text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using the GPA to CGPA Calculator ("the Service"), you accept and agree to be 
              bound by the terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Use License</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Permission is granted to temporarily use the GPA to CGPA Calculator for personal, non-commercial 
              transitory viewing only. This is the grant of a license, not a transfer of title, and under this 
              license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
              <li>Attempt to reverse engineer any software contained in the application</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The materials on the GPA to CGPA Calculator are provided on an 'as is' basis. We make no warranties, 
              expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, 
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
              of intellectual property or other violation of rights.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Further, we do not warrant or make any representations concerning the accuracy, likely results, or 
              reliability of the use of the materials on the application or otherwise relating to such materials or 
              on any sites linked to this application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitations</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall the GPA to CGPA Calculator or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business interruption) arising out 
              of the use or inability to use the materials on the application, even if we or an authorized 
              representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Accuracy of Materials</h2>
            <p className="text-gray-700 leading-relaxed">
              The materials appearing on the GPA to CGPA Calculator could include technical, typographical, or 
              photographic errors. We do not warrant that any of the materials on the application are accurate, 
              complete, or current. We may make changes to the materials contained on the application at any time 
              without notice. However, we do not make any commitment to update the materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Calculation Accuracy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we strive to provide accurate calculations, the CGPA results are provided for informational 
              purposes only. The calculation formula used is:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-4">
              <p className="text-gray-800 font-mono text-lg text-center">
                CGPA = Σ(GPA of each semester) / Number of semesters
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Different institutions may use different calculation methods or weighting systems. Always verify 
              your CGPA with your educational institution's official records. We are not responsible for any 
              discrepancies between calculated results and official institutional records.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Links</h2>
            <p className="text-gray-700 leading-relaxed">
              We have not reviewed all of the sites linked to the application and are not responsible for the 
              contents of any such linked site. The inclusion of any link does not imply endorsement by us of 
              the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Modifications</h2>
            <p className="text-gray-700 leading-relaxed">
              We may revise these terms of service for the application at any time without notice. By using this 
              application you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with applicable laws. Any 
              disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of 
              the courts in the applicable jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us through the appropriate 
              channels provided on the application.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}


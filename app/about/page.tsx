import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | GPA to CGPA Calculator',
  description: 'Learn about the GPA to CGPA Calculator application and how it works.',
};

// Static page - will be pre-rendered at build time
export default function AboutPage() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border-2 border-blue-200 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About</h1>
        
        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is this tool?</h2>
            <p className="text-gray-700 leading-relaxed">
              The GPA to CGPA Calculator is a professional web application designed to help students 
              calculate their Cumulative Grade Point Average (CGPA) from individual semester Grade 
              Point Averages (GPA). This tool supports multiple grading scale systems commonly used 
              in educational institutions worldwide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Supported Grading Scales</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>4.0 Scale:</strong> The standard North American grading system used by most universities in the United States and Canada.</li>
              <li><strong>5.0 Scale:</strong> Used by some international institutions and certain educational systems.</li>
              <li><strong>10.0 Scale:</strong> Common in European countries and equivalent to the ECTS grading system.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How it works</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The calculator uses a simple and accurate formula to compute your CGPA:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-4">
              <p className="text-gray-800 font-mono text-lg text-center">
                CGPA = Σ(GPA of each semester) / Number of semesters
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Simply select your grading scale, enter your semester GPAs, and click calculate. 
              The tool automatically validates your inputs and provides real-time feedback to ensure 
              accurate results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Support for multiple grading scales (4.0, 5.0, 10.0)</li>
              <li>Dynamic semester management (add or remove semesters as needed)</li>
              <li>Real-time input validation with helpful error messages</li>
              <li>Responsive design that works on all devices</li>
              <li>Accessible interface following WCAG 2.1 Level AA standards</li>
              <li>Fast and accurate calculations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Privacy & Data</h2>
            <p className="text-gray-700 leading-relaxed">
              All calculations are performed locally in your browser. We do not collect, store, or 
              transmit any of your GPA data. Your privacy is important to us, and all your 
              information remains on your device.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}


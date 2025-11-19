import { GPACalculator } from '@/components/calculator/GPACalculator';

// Server-rendered page with client-side calculator component
export default function Home() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">GPA</span> to <span className="text-blue-600">CGPA</span> Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate your Cumulative Grade Point Average (CGPA) from your semester GPAs. 
            Supports multiple grading scales including 4.0, 5.0, and 10.0 systems.
          </p>
        </div>
        <GPACalculator />
      </div>
    </div>
  );
}

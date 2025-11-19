import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GPA to CGPA Calculator | Calculate Your Cumulative GPA",
  description: "Professional GPA to CGPA calculator supporting 4.0, 5.0, and 10.0 scales. Calculate your cumulative grade point average with ease.",
  keywords: "GPA calculator, CGPA calculator, grade point average, cumulative GPA, GPA converter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white`}
      >
        <Navigation />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <footer className="bg-white border-t border-blue-100 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-sm text-gray-600">
              © {new Date().getFullYear()} GPA Calculator. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

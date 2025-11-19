import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for server-side rendering
  reactStrictMode: true,
  // Enable static page generation for static routes
  // Pages are automatically statically generated at build time
};

export default nextConfig;

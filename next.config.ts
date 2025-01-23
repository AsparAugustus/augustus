import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // If using the app directory structure
  },
  typescript: {
    ignoreBuildErrors: false, // Ensure TypeScript errors are caught during the build
  },
};

export default nextConfig;
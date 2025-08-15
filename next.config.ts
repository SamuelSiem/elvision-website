import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  optimizePackageImports: [
    "framer-motion",
    "@heroicons/react",
    "react-intersection-observer",
  ],
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;

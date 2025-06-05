import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  trailingSlash: true,
  basePath: '',
};

export default nextConfig;

// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true, 
  
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
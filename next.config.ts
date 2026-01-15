// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // O PPR agora é habilitado através do cacheComponents no Next 16
  experimental: {
    cacheComponents: true, 
  },
  // O ESLint agora é configurado fora do nextConfig ou ignorado assim:
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
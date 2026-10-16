import type { NextConfig } from "next";
import { REDIRECT_MAP } from "./src/data/redirects";

const nextConfig: NextConfig = {
  async redirects() {
    return REDIRECT_MAP.map((r) => ({
      source: r.source,
      destination: r.destination,
      permanent: true,
    }));
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "myesatherapist.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
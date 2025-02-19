import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "cricimages.kavachinnovations.com"
    }]
  }
};

export default nextConfig;

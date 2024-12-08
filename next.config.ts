import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: "http",
      hostname: "localhost",
      port: "2998"
    }]
  }
}

export default nextConfig

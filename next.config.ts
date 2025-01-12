import type { NextConfig } from "next"
import Picture from "@/utilities/Picture"
import TrafficSign from "@/utilities/TrafficSign"

const nextConfig: NextConfig = {
  async headers() {
    return await Promise.resolve([
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "User-Agent, X-Webhook-Action, X-Webhook-Secret" },
        ]
      }
    ])
  },
  rewrites: TrafficSign.getRewrites,
  redirects: TrafficSign.getRedirects,
  images: { remotePatterns: Picture.getRemotePaths() }
}

export default nextConfig

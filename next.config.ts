import type { NextConfig } from "next"
import Picture from "@/utilities/Picture"
import TrafficSign from "@/utilities/TrafficSign"

const nextConfig: NextConfig = {
  rewrites: TrafficSign.getRewrites,
  redirects: TrafficSign.getRedirects,
  images: { remotePatterns: Picture.getRemotePaths() }
}

export default nextConfig

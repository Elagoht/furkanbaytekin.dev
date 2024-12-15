import { NextConfig } from "next"
import typography from "@tailwindcss/typography"

const config: NextConfig = {
  content: [
    "./src/pages/**/*.{ts,tsx,}",
    "./src/app/**/*.{ts,tsx,}"
  ],
  theme: {},
  plugins: [typography]
}

export default config
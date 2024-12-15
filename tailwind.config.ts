import typography from "@tailwindcss/typography"
import { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "pinky": {
          "50": "#fbf7fc",
          "100": "#f6eff8",
          "200": "#ebdef0",
          "300": "#ddc4e3",
          "400": "#c9a1d1",
          "500": "#b07bba",
          "600": "#945c9d",
          "700": "#84508b",
          "800": "#663e6a",
          "900": "#563758",
          "950": "#341b37"
        },
        "fedora": {
          "50": "#f5f4f5",
          "100": "#eae9ea",
          "200": "#d2cfd3",
          "300": "#a9a5ab",
          "400": "#7d7980",
          "500": "#5f5b63",
          "600": "#4e4a52",
          "700": "#3b3840",
          "800": "#2d2a32",
          "900": "#232127",
          "950": "#161417"
        }
      }
    }
  },
  plugins: [typography]
}

export default config
import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

const config: Config = {
  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "nav-corner": "url('/assets/design/nav-corner.svg')",
        "nav-corner-dark": "url('/assets/design/nav-corner-dark.svg')"
      },
      colors: {
        primary: {
          50: "#f2f9f9",
          100: "#ddeff0",
          200: "#bfe0e2",
          300: "#92cace",
          400: "#5faab1",
          500: "#438e96",
          600: "#3b757f",
          700: "#356169",
          800: "#325158",
          900: "#2d464c",
          950: "#1a2c32"
        },
        secondary: {
          50: "#f2f7fb",
          100: "#e7f0f8",
          200: "#d3e2f2",
          300: "#b9cfe8",
          400: "#9cb6dd",
          500: "#839dd1",
          600: "#6a7fc1",
          700: "#6374ae",
          800: "#4a5989",
          900: "#414e6e",
          950: "#262c40",
        }
      },
      content: {
        "empty": "''"
      }
    }
  },
  plugins: [typography]
}

export default config
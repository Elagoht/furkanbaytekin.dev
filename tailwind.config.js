/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "geometric-shapes": "url('/src/assets/geometric_shapes.png')",
        "profile-picture": "url('/src/assets/profile_picture.png')"
      }
    },
  },
  plugins: [],
}

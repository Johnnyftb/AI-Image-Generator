/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#8a2be2",
        dark: "#171717",
        gray: "#6C757D"
      }
    },
  },
  plugins: [],
}

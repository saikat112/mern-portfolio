/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav": "#9D14F5",
        "primary": "#0A192F", // blue color
        "secondary": "#F97316",
        "tertiary": "#14F5EB"
      }
    },
    screens: {

      'lg': { 'max': '2023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
    }
  },
  plugins: [],
}

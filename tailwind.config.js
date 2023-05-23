/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/hero.jpg')",
      },
      colors:{
        "input-bg": "#323934"
      },
      margin:{
        "my": "auto"
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/main.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '476px',
      // => @media (min-width: 576px) { ... }

      'md': '760px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
        colors: {
          primary: '#010010',
          accent: 'rgba(255, 255, 255, 1)',
          secondary: 'rgba(115, 253, 170, 1)',
          background: 'rgba(187, 255, 255, 1)',
          dark_arches: 'rgba(55, 55, 66, 1)',
          light_green: '#CCFFE0',
          linear: '#C4C4C4',
          dark_green: '#0F1E22',
        }
    },
  },
  plugins: [],
}


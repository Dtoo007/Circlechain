/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/main.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens: {
          desktop: '1440px',
          ipad: '720px',
          mobile: '450px'
        },

        colors: {
          primary: '#010010',
          accent: 'rgba(255, 255, 255, 1)',
          secondary: 'rgba(115, 253, 170, 1)',
          background: 'rgba(187, 255, 255, 1)',
          dark_arches: 'rgba(55, 55, 66, 1)',
          light_green: '#CCFFE0',
          linear: '#C4C4C4',
        }
    },
  },
  plugins: [],
}


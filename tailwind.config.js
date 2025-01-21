/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      heading: ['HammersmithOne', 'sans-serif'],
      mont: ['Montserrat', 'sans-serif'],
    },
    fontSize: {
      'h-l': 61,
      'h-m': 39.1,
      'h-s': 25,
      'p-m': 16,
      'p-s': 11.1
    },
    colors: {
      accent: '#3DD2CC',
      primary: '#3E6B89',
      error: '#D1573D',
      update: '#D18B3D',
      link: '#5F5FFF',
    }
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        adamina: ['Adamina', 'serif'],
        sura: ['Sura', 'serif'],
        karma: ['Karma', 'serif'],
      },
    },
  },
  plugins: [],
};
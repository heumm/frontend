/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: [],
  content: ['./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
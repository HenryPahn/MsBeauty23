/** @type {import('tailwindcss').Config} */
export default {
  media: false, 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Abril_Fatface: ['Abril Fatface', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'class',
  content: [
    "./src/*.{html,js}",

],
  
theme: {
    extend: {

      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },

        pink: {
          100: "#fedeeb",
          200: "#febed7",
          300: "#fd9dc4",
          400: "#fd7db0",
          500: "#fc5c9c",
          600: "#ca4a7d",
          700: "#97375e",
          800: "#65253e",
          900: "#32121f"
      },
     
      }

    },
  },
  plugins: [],
}




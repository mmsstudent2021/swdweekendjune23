/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./js/**/*.{html,js}",
    "index.html",
    "text-editor.html",
    "more-event.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // preflight: false,
  },
};

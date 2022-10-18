/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: false,
 },
  plugins: [require("daisyui"),
  require('flowbite/plugin'),
  require("@tailwindcss/aspect-ratio"),
  require('tw-elements/dist/plugin')],
}

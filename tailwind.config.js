/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        'xsm': '544px',
        "xs":"450px",
        "ul":"1536px"
      },
      boxShadow: {
        '3xl': '.1px .1px 15px .1px #000',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/aspect-ratio'),

  ],
}

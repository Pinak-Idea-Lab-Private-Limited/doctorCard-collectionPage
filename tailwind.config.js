/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        'xsm': '544px',
        "xs":"450px"
      },
      boxShadow: {
        '3xl': '.1px .1px 15px .1px #000',
      }
    },
  },
  plugins: [],
}
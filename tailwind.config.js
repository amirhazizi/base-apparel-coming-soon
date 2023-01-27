/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html}", "./js/*.{js}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        lx: "1440px",
      },
    },
  },
  plugins: [],
}

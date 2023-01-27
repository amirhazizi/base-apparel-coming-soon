/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        lx: "1440px",
      },
      colors: {
        //  Primary
        cl_DesaturatedRed: "hsl(0, 36%, 70%)",
        cl_SoftRed: "hsl(0, 93%, 68%)",
        // Neutral
        cl_DarkGrayishRed: "hsl(0, 6%, 24%)",
      },
    },
  },
  plugins: [],
}

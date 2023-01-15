/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");



module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "blue-primary": "#7E33E0",
        "bg-button": "#FB2E86",
        "slider-bg": "#F2F0FF",
        "footer-bg-bootom": "#E7E4F8",
        "footer-bg-top": "#EEEFFB",
        "bg-sm": "#151875",
        "img-bg": "#F6F7FB",
        "page-header": "#F6F5FF",
      },
      fontSize: {
        sm: "14px",
        base: "24px",
        lg: "28px",
        xl: "32px",
      },
      colors: {
        smallFontColor: "#FB2E86",
        fontBlue: "#151875",
        footerText: "#8A8FB9",
        ratingColor: "#FFC416",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      border: {
        borderBottom: "#E8E6F1",
      },
    },
  },
  plugins: [],
})
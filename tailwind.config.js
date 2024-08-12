/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        lg: "1080px"
      },
      colors: {
        primary: "#FF4A17",
        secondary: "#1A1A2A",
        controller: "#F7F6FE",
        opct: "rgba(255, 74, 23, 0.2)"
      },
      fontFamily: {
        'roboto': ['"Roboto Condensed"', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'teko': ['Teko', 'sans-serif'],
      },
      width:{
        container: "70%"
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        green: "#0f7c72",
        black: "#2f2f2f",
        dgrey: "#707070",
        lgrey: "#b1b1b1",
        greywhite: "#f4f4f4",
        lgreen: "#3cb3aa"

      }
    },
  },
  plugins: [],
}


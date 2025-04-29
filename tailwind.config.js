/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,jsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          navy: "#003366",
          blue: "#006699",
          teal: "#89d1d6",
          gray: "#999999",
          red: "#cc1f36",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};

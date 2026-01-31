/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xlg: "1150px",
      },
      colors: {
        dark: "#1a1a1a",
      },
    },
  },
  plugins: [],
};

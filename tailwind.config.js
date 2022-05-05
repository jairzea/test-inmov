const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"], //font-lato
    },
    colors: {
      "special-gray": "#F5F0F0",
      ...defaultTheme.colors,
      red: "#d36868",
      blue: "#655ad3",
      white: "#ffffff",
      "red-hover": "#e13f3f",
      "blue-hover": "#2f2789",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

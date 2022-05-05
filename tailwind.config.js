module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"], //font-lato
    },
    colors: {
      "special-gray": "#F5F0F0",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
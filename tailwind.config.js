module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'martel': ['"Martel"', 'serif'],
        'raleway': ['"Raleway"', 'sans-serif'],
        'playfair': ['"Playfair Display"', 'serif']

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

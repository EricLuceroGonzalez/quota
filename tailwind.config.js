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
      colors: {
        background: '#f2f7f5',
        headline: '#00332c',
        para: '#2e2e2e',
        highlight:'#faae2b',
        secondary: '#4F46E5',
        tertiary: '#fbdd74'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

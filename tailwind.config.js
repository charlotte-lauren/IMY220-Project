/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this path based on where your components are located
    './public/index.html', // Add this line if you have an index.html in your public folder
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        cream: '#FFFCF2',     // FFFCF2
        coral: '#FF7F50',     // #FF7F50
        salmon: '#FA8072',    // #FA8072
        pink: '#FE64A3',      // #FE64A3
        lightPink: '#FF91A4', // #FF91A4
      },
    },
  },
  variants: {},
  plugins: [],
};

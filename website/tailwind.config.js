/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      colors: {
        'dark-gray': '#121212',
        'light-gray': '#4A545D',
        'orange': '#DC7726',
        'gold': '#DDC077',
        'green': '#57896A',
      },
      maxWidth: {
        '7xl': '80rem', 
        '8xl': '90rem',
        '9xl': '100rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  important: true,
};
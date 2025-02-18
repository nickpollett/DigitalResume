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
        'dark-gray': '#222222',
        'light-gray': '#EDEDED',
        accent: '#6a6548',
      },
      backgroundColor: {
        'dark': '#222222',
      },
      // Add gradient animation keyframes
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      // Add gradient animation utility
      animation: {
        gradient: 'gradient 10s ease infinite',
      },
      // Extend background size utilities
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  important: true,
};
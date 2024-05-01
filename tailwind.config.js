/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '16.67%, 83.33%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)'}
        },
        rise: {
          '0%': {
            transform: 'transkyY(150px)',
            opacity: 0,
            },
          '50%': {
            opacity: 0
          }
        }
      },
      animation: {
        wave: '1.25s wave 0.75s ease-in-out',
        rise1: 'rise 0.75s ease-in-out',
        rise2: 'rise 1.5s ease-in-out'
      }
    },
  },
  plugins: [],
}


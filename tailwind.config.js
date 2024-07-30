/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'icon1': {
          '0%': { transform: 'translateY(-20px)' },
          '50%': { transform: 'translateY(20px)' },
          '100%': { transform: 'translateY(-20px)' },
        },
        'icon2': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.4)' },
          '100%': { transform: 'scale(1)' },
        },
        'icon3': {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'icon4': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.4)' },
          '100%': { transform: 'scale(1)' },
        },
        'icon5': {
          '0%': { transform: 'translateX(-20px)' },
          '50%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(-20px)' },
        },
        fadeInOut: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '50%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
        'fade-in-out': {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        'icon1': 'icon1 2s infinite',
        'icon2': 'icon2 2s infinite',
        'icon3': 'icon3 3s infinite',
        'icon4': 'icon4 2s infinite',
        'icon5': 'icon5 2s infinite',
        'fade-in-out': 'fadeInOut 4s ease-in-out',
        'fade-out': 'fade-out 1s ease-in-out',
      },
    },
  },
  plugins: [],
}

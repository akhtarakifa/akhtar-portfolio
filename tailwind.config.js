/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        surface: '#141414',
        accent: '#ebdcc4',
        'accent-hover': '#d6c4a8',
        'text-primary': '#f5f0e8',
        'text-secondary': '#a09080',
        border: '#2a2218',
      },
      fontFamily: {
        heading: ['Roboto', 'sans-serif'],
        body: ['Google Sans', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.03em',
      },
      transitionDuration: {
        '1000': '1000ms',
      },
    },
  },
  plugins: [],
}

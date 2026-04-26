/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        polymath: ['"polymath"', 'sans-serif'],
        'polymath-display': ['"polymath-display"', 'sans-serif'],
        'polymath-text': ['"polymath-text"', 'sans-serif'],
      },
      colors: {
        accent: '#04a36e',
        'accent-dark': '#038a5c',
        light: {
          bg: '#EFEFEF',
          text: '#0A0A0A',
          muted: '#888888',
          border: '#D0D0D0',
        },
        dark: {
          bg: '#0A0A0A',
          text: '#F0F0F0',
          muted: '#555555',
          border: '#222222',
        },
      },
    },
  },
  plugins: [],
}
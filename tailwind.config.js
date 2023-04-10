/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'ma-p': '#5b41a0',
      'ma-s': '#e33ea7',
      'white': '#ffffff',
      'black': '#000000',
    }
  },
  plugins: [],
}

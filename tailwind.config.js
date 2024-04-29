/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        how: '#f8f8f2',
        string: '#fcfcd6',
        method: '#66d8ef'
      }
    },
  },
  plugins: [],
}


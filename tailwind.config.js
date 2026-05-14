/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          blue: {
            DEFAULT: '#008ddb',
            hover: '#337ab7',
            bg: '#EDF5FF',
          },
          dark: '#333333',
          border: '#bdbdbd',
        }
      }
    },
  },
  plugins: [],
}
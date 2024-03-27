/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#3D42DF',
        'gray': '#2C303A',
      }
    },
  },
  plugins: [],
}


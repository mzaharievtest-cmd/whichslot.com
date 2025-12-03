/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0A0E1A",
        neonBlue: "#4BB8F9",
        neonPurple: "#A259FF",
        gold: "#F4C542"
      }
    }
  },
  plugins: []
};

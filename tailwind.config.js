/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#050816",
        neonPurple: "#A259FF",
        neonBlue: "#4BB8F9",
        gold: "#F4C542",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: 0.3 },
          "50%": { opacity: 1 },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(0)" },
          "100%": { transform: "rotate(360deg) translateX(0)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-2deg)" },
          "75%": { transform: "rotate(2deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        orbit: "orbit 12s linear infinite",
        wiggle: "wiggle 1.1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

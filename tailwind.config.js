// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "rgb(var(--color-brand-dark) / <alpha-value>)",
          neon: "rgb(var(--color-brand-neon) / <alpha-value>)",
          pink: "rgb(var(--color-brand-pink) / <alpha-value>)",
          glass: "rgb(var(--color-glass) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 20px #00f7ff, 0 0 40px #ff00d4",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

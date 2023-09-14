
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      lightblue: "#84A4FC",
      darkblue: "#0046B3",
      black: "#1E1E1E",
      white: "#FFFFFF",
      lightgray: "#D9D9D9",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      cormorant: ["Cormorant Upright", "serif"],
      noto: ["Noto Serif", "serif"],
    },
    fontSize: {
      sm: "12.80px",
      base: "16px",
      xl: "20px",
      "2xl": "25px",
      "3xl": "31.25px",
      "4xl": "39.06px",
      "5xl": "48.83px",
      "6xl": "61.04px",
      "7xl": "76.29px",
    },
  },
  plugins: [],
};

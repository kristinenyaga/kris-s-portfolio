
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      lightblue: "#84A4FC",
      darkblue: "#0046B3",
      black: "#141414",
      white: "#FFFFFF",
      lightgray: "#f5f5f5",
      purple: "#3d155f",
      gray: "#F5F5F5",
      textgray: "#333333",
      bordergray: "#acacac",
      graay:"#808080"
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
    screens: {
      sm: "350px",
      smsm:"400px",// Small devices (e.g., smartphones)
      smmd: "500px",
      md: "728px", // Medium devices (e.g., tablets)
      lg: "1024px", // Large devices (e.g., laptops)
      xl: "1280px", // Extra-large devices (e.g., desktops)
    },
  },
  plugins: [],
};

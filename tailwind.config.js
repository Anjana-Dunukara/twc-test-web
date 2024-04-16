/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        futura: ["Futura", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
    },
    variants: {
      extend: {
        fontStyle: ["hover", "focus"],
      },
    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      primary: "#083F46",
    },
  },
  plugins: [],
};

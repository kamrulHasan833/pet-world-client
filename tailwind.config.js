/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(204, 42, 5)",
        secondary: "#CA334F",
        "title-color": "#293341",
        "product-title-color": "#222222",
        "desc-color": "#696969",
        "border-color": "#878787",
        dark: "#000000",
      },
      maxWidth: {
        standard: "90rem",
        secondary: "40rem",
        large: "125rem",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};

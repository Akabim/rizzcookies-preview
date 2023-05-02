/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        bgcolor: "#FFFFF0",
        primary: "#543031",
        secondary: "#8B6263",
      },
      animation: {
        "bounce-slow": "bounce 6s linear infinite",
      },
    },
  },
  plugins: [],
};

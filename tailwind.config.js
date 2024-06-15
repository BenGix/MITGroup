/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      textColor: {
        primary: "#2563EB",
        secondary: "#d91f27",
      },
      backgroundColor: {
        primary: "#2563EB",
        secondary: "#d91f27",
      },
      boxShadow: {
        main: "0px  0px  60px  0px rgba(128,  154,  204,  0.25)",
      },
    },
  },
  plugins: [],
};

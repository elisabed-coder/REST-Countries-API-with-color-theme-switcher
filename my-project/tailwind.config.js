/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-dark": "0 2px 8px 0 rgba(99, 99, 99, .2)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

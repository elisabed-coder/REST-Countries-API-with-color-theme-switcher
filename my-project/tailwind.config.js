/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      boxShadow: {
        "custom-dark": "0 2px 8px 0 rgba(99, 99, 99, .2)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

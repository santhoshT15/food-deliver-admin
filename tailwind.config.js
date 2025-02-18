/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-900": { max: "900px" },
        "max-600": { max: "600px" },
      },
    },
  },
  plugins: [],
};

/** @type {import(‘tailwindcss’).Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation : {
        "anime1":"anime1 15s infinite",
        "anime2":"anime2 15s infinite",
        "anime3":"anime3 15s infinite",
        "anime4":"anime4 10s infinite alternate",
        "anime5":"anime5 10s infinite alternate"
      }
    },
  },
  plugins: [],
};

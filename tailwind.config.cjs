/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flexBasis: {
        "4/13": "30.76%",
      },
      screens: {
        xs: "480px",
        // @media (min-width: 480px) {...}
      },
    },
  },
  plugins: [],
};

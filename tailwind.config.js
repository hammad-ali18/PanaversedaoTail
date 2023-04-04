/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#00616C"
      }
    },
  },
  screens:{
  xs: "200px",
  sm:"500px",
  md:"640px",
  lg:"1024px"
  },
  fontSize:{
    h1:"60px",
    h2:"50px",
    h3:"40px",
    h4:"30px"
  },
plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NRKSans: ["NRKSans", "sans-serif"],
      },
      colors: {
        blue: {
          default: "#176B87",
        },
        gray: {
          default: "#D9D9D9",
          darker: "#9B9B9B",
        },
      },
    },
  },
  plugins: [],
}
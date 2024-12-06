/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      colors: {
     
        'green': '#749B3F',
      },
    },
    extend: {
      fontFamily: {
        questrial: [" Questrial", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        'banner': "url('./src/assets/products/background.png')",
        'green-left': "url('./src/assets/products/bg-green.png')",
      },

    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};

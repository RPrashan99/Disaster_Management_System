/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        ControllerPrim: "#124E70",
        ControllerHov: "#2cac4c",
        ControllerSec: "#5CDB95",
        primary: "#124E70",
        secondary: "#DCAA15",
        grey: "#D9D9D9",
        dark: "#373B3F",
        linear: "#949079",
        white: "#FFFFFF",
        black: "#000000",
        lightblue: "#dbeafe",
        langGrey: "#6D6969",
        titleBlue: "#1E65A3",
        menuBlue: "#1D4176",
        green: "#18B05C",
        fontGray: "#050202",
        mapGreen: "#5CDB95",
        mapRed: "#E92660",
        userBlue: "#1D4176",
        sevHigh: "#FF0000",
        sevMedium: "#E8A31D",
        sevLow: "#20BF43",
        barContentLow: "#B8BBCF",
        reportDetailsBg: "#E4E4E4",
        reportTitleBg: "#62BB66"
      },
      fontFamily: {
        sans: ["Apple Color Emoji"],
        serif: ["Times"],
        mono: ["monospace"],
        Inter: ["Inter"]
      },

      keyframes: {
        blinkingBg: {
          "0%, 100%": { backgroundColor: "#ef4444" },
          "50%": { backgroundColor: "#fee2e2" }
        },
      },
      animation: {
        blinkingBg: "blinkingBg 2s infinite",
        //blinkingIcon: "blinkingIcon 1.5s infinite"
      }
    }
  },
  plugins: [require("flowbite/plugin")]
};

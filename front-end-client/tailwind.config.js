/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#124E70",
        'secondary':"#DCAA15",
        'grey':"#D9D9D9",
        'dark':"#373B3F",
        'linear':"#949079",
        'white':"#FFFFFF",
        'black':"#000000",
        'lightblue':"#dbeafe"
      },

      keyframes: {
        blinkingBg: {
          '0%, 100%': { backgroundColor: '#FF6347' }, // Red color
          '50%': { backgroundColor: '#FFA07A' },
        }
    },
    animation: {
        blinkingBg: 'blinkingBg 1s ease-in-out infinite',
    }
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}


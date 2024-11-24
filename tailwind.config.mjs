const colors = require('tailwindcss/colors')

//https://coolors.co/2a62ad-0c74bb-286fb7-2673ff-196bb4
//https://coolors.co/2a62ad-2673ff-286fb7-0c74bb-c93239

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Rubik"],
        sans: ['Montserrat'],
        lobster: ['Lobster'],
        vibes: ["'Great Vibes'"]
      },
      colors: {
        primary: "#1E1A1B",
        primary_bg: "#fffdf1",

        brand: {
          red: '#C93239',
          dark_red: '#b4193b',

          actual_red: "#E60045",

          dark_blue: '#1b50b3',
          // dark_blue: '#0029ad',
          // dark_blue_1: '#1b50b3',

          // blue: '#286fb7',
          blue: '#0c74bb',
          
          // green: '#73ff66',
          green: '#67E65C',
          // lime: '#a6ff00',
          lime: '#95E600',
          
          cyan: '#5CDAE6',
          // cyan: '#66f2ff',


          // blue: '#2a62ad',
          
          // blue: '#196bb4',
          

          // blue1: "#285EB7",
          // blue2: "#2a62ad",
          // blue: "#25408f",
          
          gray: colors.neutral[100],
          white: "#FFFFFF",

          text: {
            primary: "#000000",
            secondary: "#B3B3B3"
          }
        }
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        float: {
          "0%": {
            transform: "translate(0, 0) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0, 0) scale(1)"
          }
        }
      },
      animation: {
        wiggle: "wiggle 4s ease-in-out infinite",
        float: "float 20s ease-in-out infinite"
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

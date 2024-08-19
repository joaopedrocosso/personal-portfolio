import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage:{
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor:{
        blue: {
          1: '#4d4af9',
          2: '#12113b'
        },
        white: {
          1: '#E6E5F3',
          2: '#AAAAC4'
        }
      },
      backgroundColor:{
        blue: {
          1: '#4d4af9',
          2: '#12113b',
          3: '#0F172A'
        }
      },
      borderColor:{
        blue: {
          1: '#4d4af9',
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
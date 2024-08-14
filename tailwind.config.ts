import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
          3: '#011627'
        }
      },
      borderColor:{
        blue: {
          1: '#4d4af9',
        }
      }
    },
  },
  plugins: [],
};
export default config;

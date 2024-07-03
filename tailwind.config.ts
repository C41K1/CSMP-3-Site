import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        wiggle: "wiggle 5s infinite",
      },
      keyframes: {
        wiggle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(-45deg) scale(0.5)",
          },
          "50%": {
            transform: "rotate(0deg)",
          },
          "75%": {
            transform: "rotate(45deg) scale(0.5)",
          },
        },
      }
    },
  },
  plugins: [],
};
export default config;

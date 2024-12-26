/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-to-r": "linear-gradient(to right, #FF9900, #F2CB00)",
        'custom-gradient': 'linear-gradient(90deg, #F8A000, #925E00)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

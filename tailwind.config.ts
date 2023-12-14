import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#FA7902",
        red: "#FF4747",
      },
      spacing: {
        "50": "12.5rem",
        "90": "22rem",
      },
      screens: {
        sm: "590px",
      },
    },
  },
  plugins: [],
};
export default config;

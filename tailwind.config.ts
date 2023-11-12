import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        light: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        full: "100% 100%",
      },
      keyframes: {
        prjj: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.2" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        prjj: "prjj 1.5s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Basier: ["Basier", "sans-serif"],
        Novela: ["Novela", "sans-serif"],
      },
      colors: {
        light: {
          linen: "#e0d8cc",
          alabaster: "#ebe6df",
          blacktext: "#222",
          blackasset: "#444",
          white: "#fff",
          statehover: "#d47777",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

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
        triangle: "url('/images/bg-triangle.svg')",
        pentagon: "url('/images/bg-pentagon.svg')",
      },
      boxShadow: {
        "game-btn":
          "inset 0px 4px 2px 0px rgba(0,0,0, 0.25), 3px 3px 2px 0px rgba(0,0,0,0.25)",
      },
      fontFamily: {
        sans: ["Barlow Semi Condensed", "sans-serif"],
      },
      colors: {
        scissor: {
          from: "hsl(39, 89%, 49%)",
          to: "hsl(40, 84%, 53%)",
        },
        paper: {
          from: "hsl(230, 89%, 62%)",
          to: "hsl(230, 89%, 65%)",
        },
        rock: {
          from: "hsl(349, 71%, 52%)",
          to: "hsl(349, 70%, 56%)",
        },
        lizard: {
          from: "hsl(261, 73%, 60%)",
          to: "hsl(261, 72%, 63%)",
        },
        cyan: {
          from: "hsl(189, 59%, 53%)",
          to: "hsl(189, 58%, 57%)",
        },
        radial: {
          from: "hsl(214, 47%, 23%)",
          to: "hsl(237, 49%, 15%)",
        },
        "dark-text": "hsl(229, 25%, 31%)",
        "score-text": "hsl(229, 64%, 46%)",
        "header-outline": "hsl(217, 16%, 45%)",
      },
      aspectRatio: {
        triangle: "313/278",
      },
    },
  },
  plugins: [],
};
export default config;

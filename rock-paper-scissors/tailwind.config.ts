import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      translate: {
        "sign-user": "calc(50% - 14px)",
      },
      transitionDelay: {
        "1500": "1500ms",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "user-position": {
          to: {
            top: "0px",
            left: "0px",
            transform: "translateX(-50%) translateY(-50%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "user-position": "user-position 0.8s 0.2s ease-in-out",
      },
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
        selected:
          "0px 0px 5px 60px rgba(255,255,255,0.02), 0px 0px 5px 40px rgba(255,255,255,0.04), 0px 0px 5px 20px rgba(255,255,256,0.06)",
      },
      aspectRatio: {
        triangle: "313/278",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

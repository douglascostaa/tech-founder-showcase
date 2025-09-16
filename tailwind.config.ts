import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        border: {
          DEFAULT: "hsl(var(--border))",
          dark: "hsl(var(--border-dark))",
        },
        background: {
          DEFAULT: "hsl(var(--background))",
          dark: "hsl(var(--background-dark))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          light: "hsl(var(--foreground-light))",
        },
        "electric-blue": {
          DEFAULT: "hsl(var(--electric-blue))",
          glow: "hsl(var(--electric-blue-glow))",
          dark: "hsl(var(--electric-blue-dark))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          dark: "hsl(var(--muted-dark))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      backgroundImage: {
        "gradient-electric": "var(--gradient-electric)",
        "gradient-dark": "var(--gradient-dark)",
        "gradient-mesh": "var(--gradient-mesh)",
      },
      boxShadow: {
        electric: "var(--shadow-electric)",
        brutal: "var(--shadow-brutal)", 
        soft: "var(--shadow-soft)",
        glow: "var(--shadow-glow)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

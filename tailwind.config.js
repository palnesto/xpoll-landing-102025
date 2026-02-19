// tailwind.config.js
import tailwindcssAnimate from "tailwindcss-animate";
import containerQueries from "@tailwindcss/container-queries";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "system-ui", "sans-serif"],
        body: ["Manrope", "system-ui", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        plusjakarta: ['"Plus Jakarta Sans"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "475px", // extra small
        sm: "640px", // small
        md: "768px", // medium
        lg: "1024px", // large
        xl: "1280px", // extra large
        "2xl": "1536px", // double extra large
        "3xl": "1728px",
        "4xl": "1920px",
        "5xl": "2160px",
        "6xl": "2560px",
        "7xl": "3200px", // ultra-wide displays
      },

      keyframes: {
        floatStar: {
          "0%,100%": { opacity: "0.03", transform: "translateY(0px)" },
          "50%": { opacity: "0.06", transform: "translateY(-8px)" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "float-star": "floatStar 6s ease-in-out infinite",
        "float-star-delay": "floatStar 8s ease-in-out 2s infinite",
        "float-star-delay2": "floatStar 7s ease-in-out 4s infinite",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        navy: "#0A1628",
        "navy-light": "#1A2744",
        "navy-card": "#111D33",
        xred: "#DC143C",
        "xred-dark": "#B01030",
        xblue: "#0052CC",
        "xblue-dark": "#003D99",
        xteal: "#0F9BA3",
        "xteal-dark": "#0B7F86",
        "xteal-light": "#E6F5F6",
        xgold: "#C5A55A",
        cream: "#FAFAF8",
        "cream-dark": "#F3F2EF",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        "dark-sidebar": { DEFAULT: "hsl(var(--dark-sidebar))" },
      },
      backgroundImage: {
        "purple-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(40,29,58,0.65) 0%, rgba(40,29,58,0.35) 40%, rgba(0,0,0,0) 100%)",
        "stars-pattern-dots":
          "radial-gradient(circle, rgba(197, 165, 90, 0.04) 1px, transparent 1px), radial-gradient(circle, rgba(15, 155, 163, 0.03) 1px, transparent 1px)",
        "stars-pattern-stripes":
          "repeating-linear-gradient(180deg, rgba(220, 20, 60, 0.025) 0px, rgba(220, 20, 60, 0.025) 40px, rgba(255, 255, 255, 0) 40px, rgba(255, 255, 255, 0) 80px, rgba(0, 82, 204, 0.02) 80px, rgba(0, 82, 204, 0.02) 120px, rgba(255, 255, 255, 0) 120px, rgba(255, 255, 255, 0) 160px)",
        "navy-stars-dots":
          "radial-gradient(circle, rgba(197, 165, 90, 0.03) 1.2px, transparent 1.2px), radial-gradient(circle, rgba(255, 255, 255, 0.015) 1px, transparent 1px)",
        "navy-stars-stripes":
          "repeating-linear-gradient(180deg, rgba(220, 20, 60, 0.02) 0px, rgba(220, 20, 60, 0.02) 50px, transparent 50px, transparent 100px, rgba(0, 82, 204, 0.015) 100px, rgba(0, 82, 204, 0.015) 150px, transparent 150px, transparent 200px)",
        "white-patriotic-stripes":
          "repeating-linear-gradient(180deg, rgba(220, 20, 60, 0.018) 0px, rgba(220, 20, 60, 0.018) 60px, rgba(255, 255, 255, 0) 60px, rgba(255, 255, 255, 0) 120px, rgba(0, 82, 204, 0.015) 120px, rgba(0, 82, 204, 0.015) 180px, rgba(255, 255, 255, 0) 180px, rgba(255, 255, 255, 0) 240px)",
      },
      backgroundSize: {
        "stars-dots-size": "60px 60px, 40px 40px",
        "navy-dots-size": "48px 48px, 32px 32px",
      },
      backgroundPosition: {
        "stars-dots-pos": "0 0, 20px 20px",
        "navy-dots-pos": "0 0, 16px 16px",
      },
    },
  },
  plugins: [tailwindcssAnimate, containerQueries],
};

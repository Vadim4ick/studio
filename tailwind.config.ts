import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
        950: "#1e1b4b",
      },
      black: "#000",
      secondary: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
        950: "#052e16",
      },
      hover: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12",
        950: "#431407",
      },
      white: "#fff",
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
        950: "#172554",
      },
      bgDark: "#475569",
      cardBorderBottom: "#f97316",
      iconBg: "#94a3b8",
      gray: "#64748b",
      skeletonBg: "#2a323f",
    },
    extend: {
      fontFamily: {
        mono: ["var(--font-montserrat)"],
      },
      padding: {
        headerMobile: "70.5px",
      },
      height: {
        headerMobile: "70.5px",
      },

      screens: {
        mobileSmall: "450px",
        mobile: "768px",
        tablet: "991px",
        laptop: "1024px",
        desktop: "1150px",

        bigDesktop: "1400px",
      },
    },
  },

  plugins: [],
}
export default config

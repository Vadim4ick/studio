import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: colors.indigo,
        secondary: colors.green,
        hover: colors.red,

        "bg-dark": "#475569",
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
      },
    },
  },

  plugins: [],
};
export default config;

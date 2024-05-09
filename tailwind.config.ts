import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],

  theme: {
    extend: {
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

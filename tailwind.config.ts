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
      },
    },
    colors: {
      "darkBlue" : "#142D5F",
      "lightBlue": "#0EA7C9",
      "orange" : "#F27C4A",
      "white": "white",
      "fadDarkBlue":"rgba(20, 45, 95, 0.6)",
    },
    screens : {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1070px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '850px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '726px'},


      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
export default config;

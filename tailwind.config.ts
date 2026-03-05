import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      colors: {
        "finni-bg": "#080d1a",
        "finni-card": "#0e1628",
        "finni-phone": "#0d1525",
        "finni-green": "#00e676",
        "finni-green-dark": "#00c853",
        "finni-muted": "#8892a4",
        "finni-dark": "#0a0f1e",
      },
    },
  },
  plugins: [],
};

export default config;

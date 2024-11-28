import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "360px",
        xsm: "420px",
        sm: "640px",
        sml: "680px",
        md: "800px",
        mdl: "860px",
        lg: "1024px",
        lgl: "1060px",
        xl: "1250px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
} satisfies Config;

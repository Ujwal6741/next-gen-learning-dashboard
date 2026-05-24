import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 10px 30px rgba(0,0,0,0.35)"
      },
      backgroundImage: {
        "mesh-dark": "radial-gradient(circle at top left, rgba(99,102,241,0.18), transparent 35%), radial-gradient(circle at 80% 20%, rgba(6,182,212,0.12), transparent 30%), radial-gradient(circle at bottom right, rgba(168,85,247,0.12), transparent 35%)"
      }
    }
  },
  plugins: []
};

export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        glow: {
          cyan: "#FFFFFF",
          purple: "#AAAAAA",
          neon: "#CCCCCC",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#888888",
        },
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
        sora: ["var(--font-sora)"],
      },
      animation: {
        "glow-pulse": "glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "border-glow": "border-glow 2s linear infinite",
        "typing": "typing 3.5s steps(40, end), blink-caret .75s step-end infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: 1, filter: "brightness(1) blur(4px)" },
          "50%": { opacity: 0.8, filter: "brightness(1.5) blur(8px)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "border-glow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "typing": {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "cyan" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

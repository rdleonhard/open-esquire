/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0B1220",
          900: "#111C2F",
          800: "#1A2A45",
          700: "#24385C",
        },
        stone: {
          50: "#F5F6F8",
          100: "#E8EAED",
          200: "#D4D8DE",
          300: "#B8BEC8",
        },
        gold: {
          50: "#FFF7E0",
          100: "#FCE8B6",
          300: "#E8C46A",
          500: "#C89B3C",
          700: "#8A6520",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "soft-xl": "0 24px 50px -38px rgba(2, 6, 23, 0.55)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(1100px 640px at 78% 42%, rgba(200,155,60,0.12), transparent 58%), radial-gradient(800px 480px at 12% 8%, rgba(36,56,92,0.45), transparent 55%)",
        "hero-fade":
          "linear-gradient(180deg, transparent 0%, rgba(11,18,32,0.55) 55%, #0B1220 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "line-grow": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "line-grow": "line-grow 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

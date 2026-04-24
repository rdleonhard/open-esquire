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
          950: "#070A12",
          900: "#0B1020",
          800: "#121A33",
          700: "#1A2550",
        },
        sand: {
          50: "#FAFAF7",
          100: "#F3F1EA",
          200: "#E7E2D5",
        },
        gold: {
          50: "#FFF8E6",
          100: "#FDECC0",
          300: "#F2C86A",
          500: "#D9A441",
          700: "#9A6B1C",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "soft-xl": "0 25px 60px -35px rgba(2, 6, 23, 0.7)",
        glow: "0 0 80px -20px rgba(217, 164, 65, 0.45)",
        "glow-sm": "0 0 40px -12px rgba(217, 164, 65, 0.35)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(1200px 600px at 20% 10%, rgba(217,164,65,0.18), transparent 55%), radial-gradient(900px 500px at 80% 20%, rgba(99,102,241,0.14), transparent 60%)",
        "hero-mesh":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(217,164,65,0.12), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(99,102,241,0.12), transparent)",
        grid:
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "gold-shine":
          "linear-gradient(105deg, transparent 40%, rgba(255,248,230,0.12) 45%, rgba(255,248,230,0.22) 50%, rgba(255,248,230,0.12) 55%, transparent 60%)",
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
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        marquee: "marquee 32s linear infinite",
        shimmer: "shimmer 8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: "#FFD700", // Goudgeel
        orangeDark: "#FF6A00", // Donker oranje
      },
      fontFamily: {
        sourGummy: ["Sour Gummy"],
        nunito: ["Nunito"]
      },
      screens: {
        md: "950px",
        "2xl": "1600px",
      },
    },
  },
  plugins: [],
};

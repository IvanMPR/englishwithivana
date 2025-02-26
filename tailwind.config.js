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
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        primaryColor: "var(--color-primary)",
        filterColor: "var(--color-dark-filter)",
        textColor: "var(--color-text)",
        darkColor: "var(--color-dark)",
      },
    },
  },
  plugins: [],
};

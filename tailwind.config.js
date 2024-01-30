module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1600px",
      },
    },
    fontFamily: {
      body: ['"Open Sans"', "-apple-system", "sans-serif"],
      display: ['"IBM Plex Sans"', "-apple-system", "sans-serif"],
      mono: ["IBM Plex Mono"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

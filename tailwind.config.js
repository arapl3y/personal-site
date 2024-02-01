module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "off-black": "#212121",
        "off-white": "#fefefe",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
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

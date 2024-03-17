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
        md: "2rem",
      },
      screens: {
        sm: "760px",
        md: "888px",
        lg: "1104px",
        xl: "1360px",
        "2xl": "1616px",
      },
    },
    fontFamily: {
      body: ['"Open Sans"', "-apple-system", "sans-serif"],
      display: ["IBM Plex Sans", "-apple-system", "sans-serif"],
      mono: ["IBM Plex Mono"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

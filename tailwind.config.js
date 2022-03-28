module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./modules/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        bounce: "bounce linear 1s 2 forwards",
      },
    },
    container: {
      center: true,
      padding: "127px",
    },

    minHeight: {
      three: "300px",
    },
    minHeight: {
      three: "300px",
    },
    fontSize: {
      midLarge: "52px",
      mid: "48px",
      midH: "32px",
      large: "72px",
      xLarge: "68px",
      fifty: "50px",
      twosix: "26px",
      ultra: "9px",
      extra: "20px",
      sixteen: "16px",
    },
    colors: {
      primary: "#9c27b0",
      primaryLight: "#86F4B2",
      primaryDark: "#7d258d",
      typoGray: "#ADBAFF",
      secondaryDark: "#050E29",
      secondaryMid: "#0D111EE5",
      secondaryLight: "#111727",
      secondaryGradient:
        "linear-gradient(90deg, rgba(50,61,116,1) 0%, rgba(35,41,88,1) 50%, rgba(33,36,85,1) 100%)",
      green: "#3CAC4F",
      yellow: "#F9B417",
      accent: "#ffffff",
      "extra-light": "#5a5a5a",
      grayMid: "#828694",
      gray: "#f2f3f5",
      secondary: "#2B2B39",
    },
    borderRadius: {
      DEFAULT: "4px",
      lg: "21px",
      six: "6px",
      half: "50px",
      twenty: "20px",
    },
    borderColor: {
      light: "#fefefe",
      yellow: "#F9B417",
      primary: "#37AFE0",
    },
  },
  plugins: [],
};

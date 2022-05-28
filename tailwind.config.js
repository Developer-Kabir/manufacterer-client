module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#F6621B",

          "secondary": "black",

          "accent": "white",

          "neutral": "#333C4D",

          "base-100": "#FFFFFF",

          "info": "#CBCAC6",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}

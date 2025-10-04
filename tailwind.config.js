/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "tilt": "tilt 5s ease-in-out infinite",
        "glow": "glow 2.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        tilt: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1.5deg)" },
          "75%": { transform: "rotate(-1.5deg)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 25px rgba(80,150,255,0.4)" },
          "50%": { boxShadow: "0 0 45px rgba(255,80,200,0.8)" },
        },
      },
    },
  },
  plugins: [],
};

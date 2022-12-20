/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgoverlay: "rgba(0,0,0,0.5)",
        lightoverlay: "rgba(256,256,256,0.2)",
      },
    },
  },
  plugins: [],
};

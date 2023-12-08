/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gun-metal": "#1F2937",
        "teal-us": "#087E8B",
        "french-gray": "#C7CEDB",
        "sunglow-us": "#FFCB47",
        "tea-rose": "#E9BCB7",
      },
    },
    fontFamily: {
      "grotesk-font": ["Space Grotesk"],
      "common-font": ["Kumbh Sans", "monospace"],
      "title-primary": ["Epilogue", "Syne", "monospace"],
      "title-secondary": ["Syne", "Kumbh Sans", "monospace"],
    },
  },
  plugins: [],
};

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
      },
      fontFamily: {
        deGrund: ['"Playwrite DE Grund"'],
        handwritten: ['"Dancing Script"'],
        silkscreenBold: ["Silkscreen", "sans-serif"],
        lobster: ["Lobster", "sans-serif"],
        spaceGrotesk: ["Space Grotesk"],
        texturina: ["Texturina"],
        anybody: ["Anybody"],
        museoModerno: ["MuseoModerno"],
        slab: ["Josefin Slab"],
        jura: ["Jura"]
      },
    },
  },
  plugins: [],
};

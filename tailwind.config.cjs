/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        amber1: "#fefdfb",
        amber2: "#fff9ed",
        amber3: "#fff4d5",
        amber4: "#ffecbc",
        amber5: "#ffe3a2",
        amber6: "#ffd386",
        amber7: "#f3ba63",
        amber8: "#ee9d2b",
        amber9: "#ffb224",
        amber10: "#ffa01c",
        amber11: "#ad5700",
        amber12: "#4e2009",
        sand1: "#fdfdfc",
        sand2: "#f9f9f8",
        sand3: "#f3f3f2",
        sand4: "#eeeeec",
        sand5: "#e9e9e6",
        sand6: "#e3e3e0",
        sand7: "#dbdbd7",
        sand8: "#c8c7c1",
        sand9: "#90908c",
        sand10: "#868682",
        sand11: "#706f6c",
        sand12: "#1b1b18",
      },
      screens: {
        headerBreak: { raw: "(max-width: 710px)" },
      },
    },
  },
  plugins: [],
};

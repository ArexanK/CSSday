import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/components/dataDisplay.jsx",
    "./app/components/speakers.jsx",
    "./app/components/talks.jsx",
    "./app/components/yearData.jsx",
    "./app/root.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

import { createPreset } from "fumadocs-ui/tailwind-plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  presets: [createPreset()],
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".phong": {
          width: "300px",
          height: "300px",
        },
      });
    },
  ],
};

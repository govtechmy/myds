import { createPreset } from "fumadocs-ui/tailwind-plugin";
import { Config } from "tailwindcss";
import { preset } from "@myds/tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  presets: [createPreset(), preset],
};

export default config;

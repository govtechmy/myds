import { createPreset, Preset } from "fumadocs-ui/tailwind-plugin";
import { Config } from "tailwindcss";
import { preset, preset_fumadocs } from "@myds/tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  presets: [
    createPreset({
      preset: preset_fumadocs,
    }),
    preset,
  ],
};

export default config;

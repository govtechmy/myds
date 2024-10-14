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
    // This is a workaround; In final build, @myds/tailwindcss output full css for users to import
    // Issue: Styles are not being applied if below line is not added
    "../../packages/react/src/**/*.{ts,tsx}",
  ],
  presets: [createPreset({ preset: preset_fumadocs }), preset],
  theme: {
    extend: {
      colors: {
        accent: "rgba(189, 90, 48, 1)",
      },
    },
  },
};

export default config;

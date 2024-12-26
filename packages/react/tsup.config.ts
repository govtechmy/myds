import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: [
    "src/components/**/*.tsx",
    "src/hooks/**/*.ts",
    "src/utils/index.ts",
    "src/icons/index.ts",
  ],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}));

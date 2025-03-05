import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  ...options,
  entryPoints: [
    "src/components/**/*.tsx",
    "src/hooks/index.ts",
    "src/utils/index.ts",
    "src/icons/index.ts",
  ],
  format: ["cjs", "esm"],
  clean: true,
  dts: true,
  sourcemap: true,
  external: ["react"],
  minify: true,
}));

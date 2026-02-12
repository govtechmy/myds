import { remarkImage } from "fumadocs-core/mdx-plugins";
import { defineDocs, defineConfig } from "fumadocs-mdx/config";

export const { docs, meta } = defineDocs();

// Conditionally import fumadocs-docgen to avoid Playwright issues on Windows
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let remarkInstall: any = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  remarkInstall = require("fumadocs-docgen").remarkInstall;
} catch {
  // fumadocs-docgen not available (optional dependency)
  // This is expected on Windows or when the package is not installed
}

const remarkPlugins = [
  ...(remarkInstall ? [remarkInstall] : []),
  [
    remarkImage,
    {
      publicDir: "https://d2391uizq0pg2.cloudfront.net",
      useImport: false,
    },
  ],
];

export default defineConfig({
  mdxOptions: { remarkPlugins },
});

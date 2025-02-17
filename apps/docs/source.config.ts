import { remarkImage } from "fumadocs-core/mdx-plugins";
import { remarkInstall } from "fumadocs-docgen";
import { defineDocs, defineConfig } from "fumadocs-mdx/config";

export const { docs, meta } = defineDocs();

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [
      remarkInstall,
      [
        remarkImage,
        {
          publicDir: "https://d2391uizq0pg2.cloudfront.net",
          useImport: false,
        },
      ],
    ],
  },
});

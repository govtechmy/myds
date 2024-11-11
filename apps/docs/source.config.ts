import { remarkImage } from "fumadocs-core/mdx-plugins";
import { defineDocs, defineConfig } from "fumadocs-mdx/config";

export const { docs, meta } = defineDocs();

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [
      [
        remarkImage,
        {
          publicDir: "https://gnu-myds.s3.ap-southeast-1.amazonaws.com",
          useImport: false,
        },
      ],
    ],
  },
});

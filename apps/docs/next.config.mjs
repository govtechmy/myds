import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "./lib/s3-loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2391uizq0pg2.cloudfront.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default withMDX(config);

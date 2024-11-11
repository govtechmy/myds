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
        hostname: "gnu-myds.s3.ap-southeast-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default withMDX(config);

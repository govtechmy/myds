import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    LAST_UPDATED: new Date().toISOString(),
  },
};

const withNextIntl = createNextIntlPlugin("./src/lib/i18n.ts");

export default withNextIntl(nextConfig);

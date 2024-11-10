/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  experimental: {
    optimizePackageImports: ["@remixicon/react"],
  },
});

module.exports = withBundleAnalyzer(nextConfig);

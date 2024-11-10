/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);

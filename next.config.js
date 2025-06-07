/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  transpilePackages: ["three"],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      three: path.resolve("./node_modules/three"),
    };
    return config;
  },
};

module.exports = nextConfig;

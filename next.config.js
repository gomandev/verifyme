/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@teambit/base-react.content.image",
]);
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);

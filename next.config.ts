/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
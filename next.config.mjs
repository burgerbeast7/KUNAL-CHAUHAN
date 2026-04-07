/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: process.env.GITHUB_ACTIONS ? "export" : "standalone",
  images: {
    unoptimized: !!process.env.GITHUB_ACTIONS, // GitHub Pages requires unoptimized images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

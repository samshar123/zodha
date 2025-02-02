/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["94.136.185.170", "teamdotco.com"], // Add your external image domain here
  },
};

export default nextConfig;
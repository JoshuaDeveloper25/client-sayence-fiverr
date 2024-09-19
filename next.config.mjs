/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    customKey: process.env.BASE_URL,
  },
};

export default nextConfig;

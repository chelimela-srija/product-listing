/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // allow Unsplash if you want real images later
      },
      {
        protocol: "https",
        hostname: "picsum.photos", // another free placeholder
      },
    ],
  },
};

module.exports = nextConfig;

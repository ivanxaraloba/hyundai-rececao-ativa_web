/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "*" },
      // "images.unsplash.com",
      // "previewengine-accl.zohoexternal.com",
      // "previewengine-accl.zoho.com",
    ],
  },
};

export default nextConfig;

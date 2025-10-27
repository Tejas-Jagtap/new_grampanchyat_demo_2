/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdnbbsr.s3waas.gov.in",
      },
    ],
  },
};

export default nextConfig;

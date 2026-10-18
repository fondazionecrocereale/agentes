/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/ganamos",
        destination:
          process.env.NEXT_PUBLIC_GANAMOS_URL || "https://ganamos.net",
        permanent: false,
      },
      {
        source: "/ganamos-vip",
        destination:
          process.env.NEXT_PUBLIC_GANAMOS_VIP_URL || "https://ganamosvip.com",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

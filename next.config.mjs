/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.clerk.accounts.dev",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
  // Add headers to allow Clerk scripts
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.clerk.accounts.dev https://challenges.cloudflare.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

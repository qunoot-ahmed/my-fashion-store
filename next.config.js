/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Configure Content Security Policy
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://licencetotest.com; frame-src 'self' https://licencetotest.com; style-src 'self' 'unsafe-inline';"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig; 
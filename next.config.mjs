/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '', // Leave blank for default ports (80 for http, 443 for https)
            pathname: '/images/**', // Match all paths under /images/
          },
        ],
      },
};

export default nextConfig;

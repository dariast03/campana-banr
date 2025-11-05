import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Define the base Next.js configuration
const baseConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.slingacademy.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: ''
      }
    ]
  },
  transpilePackages: ['geist']
};

let configWithPlugins = baseConfig;

const withNextIntl = createNextIntlPlugin();

configWithPlugins = withNextIntl(configWithPlugins);

const nextConfig = configWithPlugins;
export default nextConfig;

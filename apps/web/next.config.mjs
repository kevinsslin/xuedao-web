/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";
const withPWA = withPWAInit({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  workboxOptions: {
    disableDevLogs: true,
  },
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },
};

export default withPWA(nextConfig);

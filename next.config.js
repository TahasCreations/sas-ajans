/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['readdy.ai'],
    unoptimized: true,
  },
  output: 'standalone',
}

module.exports = nextConfig

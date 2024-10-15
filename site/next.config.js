/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'ATX Defense',
    description: 'The ATX Defense store for Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/rahulosp/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

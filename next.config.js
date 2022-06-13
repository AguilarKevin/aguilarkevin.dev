/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: [
      'components',
      'context',
      'pages',
      'relay',
      'sections',
      'theme',
      'utils',
    ],
  },
  experimental: {
    reactRoot: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig

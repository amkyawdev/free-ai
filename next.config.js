/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['openrouter.ai'],
  },
  env: {
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
  },
}

module.exports = nextConfig

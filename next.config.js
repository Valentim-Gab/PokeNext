/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
    domains: [process.env.POKEMON_INFO_API_URL]
  }
}

module.exports = nextConfig

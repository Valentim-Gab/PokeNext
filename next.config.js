/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [process.env.POKEMON_INFO_API_URL]
  }
}

module.exports = nextConfig

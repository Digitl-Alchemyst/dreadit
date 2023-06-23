/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['uploadthing.com', 'lh3.googleusercontent.com', 'localhost:3000/'],
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig

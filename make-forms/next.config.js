/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true   //using this instead of REST APIs
    }
}

module.exports = nextConfig

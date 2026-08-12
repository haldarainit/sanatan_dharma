/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    /* every image ships from /public, so the optimiser has nothing remote to fetch */
    unoptimized: true,
  },
}
export default nextConfig

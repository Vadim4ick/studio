/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/reviews": { page: "/reviews" },
      "/price": { page: "/price" },
      "/contacts": { page: "/contacts" },
    }
  },
}

export default nextConfig

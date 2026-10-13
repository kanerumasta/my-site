/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/how-i-built-1pager",
        destination: "/blog/from-complex-documents-to-reliable-data",
        permanent: true,
      },
    ]
  },
}

export default nextConfig

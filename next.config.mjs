/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath is needed while hosted at neeraj-raje.github.io/CABranding
  // Remove this line when you switch to a custom domain
  basePath: '/CABranding',
  trailingSlash: true,
  images: {
    unoptimized: true, // required for static export
  },
}

export default nextConfig

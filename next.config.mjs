/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: ['./src/styles'],
    prependData: `@import "variables.scss";`,
  },
  reactStrictMode: false,
}

export default nextConfig

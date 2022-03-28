const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    nextImageExportOptimizer: {
      imageFolderPath: 'public/images',
      exportFolderPath: 'out',
      imageSizes: [16, 32, 48, 64, 96, 120, 128, 256, 384],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      quality: 75,
    },
  },
  env: {
    storePicturesInWEBP: true,
  },
}

module.exports = withPWA({
  ...nextConfig,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
})

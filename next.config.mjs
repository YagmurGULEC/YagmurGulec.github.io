/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  // i18n: {
  //   locales: ['en', 'fr'],  // Supported languages
  //   defaultLocale: 'en',  // Default language
  // },
  // Enable static HTML export
  output: 'export',
  
  // Add the base path for GitHub Pages
  basePath:'',
  
  // Add the asset prefix for serving assets correctly
  assetPrefix: '/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;


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
  basePath: isProd ? '/YagmurGULEC.github.io' : '',
  
  // Add the asset prefix for serving assets correctly
  assetPrefix: isProd ? '/YagmurGULEC.github.io/' : '',
};

export default nextConfig;


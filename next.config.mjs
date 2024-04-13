/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
            
          },
          {
            protocol: 'https',
            hostname: 'logoipsum.com',
            
          },
          {
            protocol: 'https',
            hostname: 'picsum.photos',
            
          },
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
            
          },
          {
            protocol: 'https',
            hostname: 'img.icons8.com',
          }
        ],
      },
};

export default nextConfig;

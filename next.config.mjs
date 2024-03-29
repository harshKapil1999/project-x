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
            hostname: 'logoipsum.com picsum.photos',
            
          },
          {
            protocol: 'https',
            hostname: 'picsum.photos',
            
          },
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
            
          },
        ],
      },
};

export default nextConfig;

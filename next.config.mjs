/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // unoptimized:true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '//images.ctfassets.net',
            port: '',
            pathname: '/**',
          },
        ],
      },
    trailingSlash:true
};

export default nextConfig;

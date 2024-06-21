/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // unoptimized:true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '//images.ctfassets.net',
            port: '',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '**',
          },
        ],
      },
    trailingSlash:true
};

export default nextConfig;

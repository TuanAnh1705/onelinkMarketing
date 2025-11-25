// File: next.config.js (Client FE Project)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      // ✅ Existing hostname
      {
        protocol: "https",
        hostname: "onelinkmkt.vietnamsourcing.co",
        pathname: "/**",
      },
      // ✅ UploadThing CDN (FIX CHO TEAM IMAGES)
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/f/**",
      },
    ],
  },
  
  // Redirects to Dashboard
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'http://localhost:3001/admin',
        permanent: false,
      },
      {
        source: '/aboutUs',
        destination: 'http://localhost:3001/admin/utilities/aboutUs',
        permanent: false,
      },
      {
        source: '/categories',
        destination: 'http://localhost:3001/admin/categories',
        permanent: false,
      },
      {
        source: '/blog',
        destination: 'http://localhost:3001/admin/blog',
        permanent: false,
      },
      {
        source: '/preview',
        destination: 'http://localhost:3001/admin/preview',
        permanent: false,
      },
      {
        source: '/review',
        destination: 'https://lewis-web.vercel.app/review',
        permanent: false,
      },
      {
        source: '/users-profile',
        destination: 'http://localhost:3001/admin/users-profile',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
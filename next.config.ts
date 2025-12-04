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
      {
        protocol: 'https',
        hostname: 'hsgcjcoeaqgq.sg.larksuite.com',
      },
      {
        protocol: 'https',
        hostname: '**.larksuite.com', // Allow all larksuite subdomains
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: '**', // Allow all HTTPS domains (less secure but convenient)
      },
    ],
  },
  
  // Redirects to Dashboard
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'http://103.110.87.227/admin',
        permanent: false,
      },
      {
        source: '/aboutUs',
        destination: 'http://103.110.87.227/admin/utilities/aboutUs',
        permanent: false,
      },
      {
        source: '/categories',
        destination: 'http://103.110.87.227/admin/categories',
        permanent: false,
      },
      {
        source: '/blog',
        destination: 'hhttp://103.110.87.227/admin/blog',
        permanent: false,
      },
      {
        source: '/preview',
        destination: 'http://103.110.87.227/admin/preview',
        permanent: false,
      },
      {
        source: '/review',
        destination: 'http://103.110.87.227/admin/review',
        permanent: false,
      },
      {
        source: '/users-profile',
        destination: 'http://103.110.87.227/admin/authors',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
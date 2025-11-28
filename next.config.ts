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
        destination: 'https://onelinkmarketing-dashboard.vercel.app/admin',
        permanent: false,
      },
      {
        source: '/aboutUs',
        destination: 'https://onelinkmarketing-dashboard.vercel.app/admin/utilities/aboutUs',
        permanent: false,
      },
      {
        source: '/categories',
        destination: 'https://onelinkmarketing-dashboard.vercel.app/admin/categories',
        permanent: false,
      },
      {
        source: '/blog',
        destination: 'https://onelinkmarketing-dashboard.vercel.app/admin/blog',
        permanent: false,
      },
      {
        source: '/preview',
        destination: 'https://onelinkmarketing-dashboard.vercel.app/admin/preview',
        permanent: false,
      },
      {
        source: '/review',
        destination: 'https://onelinkmarketing-dashboard.vercel.app/admin/review',
        permanent: false,
      },
      {
        source: '/users-profile',
        destination: 'https://onelinkmarketing-dashboard.vercel.app/admin/authors',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
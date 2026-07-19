import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only — no Next.js server, so we ship a
  // static export and disable the on-demand image optimizer it depends on.
  output: "export",
  images: {
    unoptimized: true,
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/dms/image/**",
      },
    ],
  },
};

export default nextConfig;

import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  allowedDevOrigins: [
    "http://192.168.1.10:3000",
    "http://192.168.1.10:3001",
  ],
  async redirects() {
    return [
      {
        source: "/recours-oqtf-paris",
        destination: "/avocat-oqtf-paris",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/en/:path*",
        headers: [{ key: "Content-Language", value: "en-GB" }],
      },
      {
        source: "/en",
        headers: [{ key: "Content-Language", value: "en-GB" }],
      },
    ];
  },
};

export default nextConfig;

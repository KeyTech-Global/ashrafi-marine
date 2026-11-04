import type { NextConfig } from "next";

/**
 * GitHub Pages project sites are served from a sub-path, e.g.
 * https://keytech-global.github.io/ashrafi-marine/. Set NEXT_PUBLIC_BASE_PATH
 * at build time to match. Leave it empty for a custom domain or local builds.
 */
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

const nextConfig: NextConfig = {
  // The site is hosted as static files on GitHub Pages; no Node.js server runtime.
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    // GitHub Pages cannot run the Next.js image optimization server.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

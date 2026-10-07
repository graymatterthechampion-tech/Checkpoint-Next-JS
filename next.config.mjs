import path from 'node:path';
import { fileURLToPath } from 'node:url';

// The folder this config file lives in = the project folder.
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Tell Next.js exactly where the project is, so it doesn't guess
  // from package-lock.json files found in parent folders.
  turbopack: {
    root: projectRoot,
  },
  outputFileTracingRoot: projectRoot,
};

export default nextConfig;

/** @type {import('next').NextConfig} */

import withSvgr from "next-svgr";

const nextConfig = withSvgr({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
});

export default nextConfig;

/** @type {import('next').NextConfig} */

import withSvgr from "next-svgr";

const nextConfig = withSvgr({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["assets.adidas.com", "acdn.mitiendanube.com"], // Agrega aquí los dominios permitidos
  },
});

export default nextConfig;

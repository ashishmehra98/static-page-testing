import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	turbopack: {
		root: ".",
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/**",
			},
		],
	},
	// Optimize resource loading
	experimental: {
		optimizePackageImports: ["swiper"],
	},
	// Enable compression
	compress: true,
};

export default nextConfig;

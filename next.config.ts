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
		unoptimized: true,
	},
	// Optimize resource loading
	experimental: {
		optimizePackageImports: ["swiper"],
	},
	// Enable compression
	compress: true,
	onDemandEntries: {
		maxInactiveAge: 60 * 1000,
		pagesBufferLength: 0,
	},
	// Ignore build errors
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;

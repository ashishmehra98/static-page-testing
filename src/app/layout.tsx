import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FlashMessageProvider } from "./components/FlashMessage";
import { IMAGES } from "./constants/images";

// Optimize custom Rebond Grotesque fonts using Next.js font optimization
// Only preload the most commonly used weight (Regular) to reduce render blocking
// Note: localFont paths are relative to the file location
const rebondGrotesque = localFont({
	src: [
		{
			path: "../../public/fonts/rebond-grotesque/RebondGrotesque-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/rebond-grotesque/RebondGrotesque-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/rebond-grotesque/RebondGrotesque-SemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/rebond-grotesque/RebondGrotesque-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-rebond-grotesque",
	display: "swap",
	// Only preload the regular weight to reduce initial render blocking
	preload: true,
	adjustFontFallback: false,
});

export const metadata: Metadata = {
	title: "Ecovia - Professional Pest Control Services",
	description:
		"Professional pest control services for residential and commercial properties. Expert solutions for ants, cockroaches, rodents, and more.",
	icons: {
		icon: "/icon.svg",
		shortcut: "/icon.svg",
		apple: "/icon.svg",
	},
};

export const viewport = {
	width: "device-width",
	initialScale: 1.0,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				{/* Prefetch critical hero images for faster page transitions */}
				<link rel="prefetch" href={IMAGES.ABOUT_HEADER_BG} as="image" />
				<link rel="prefetch" href={IMAGES.DISINFECTING_AREA} as="image" />
				<link rel="prefetch" href={IMAGES.BLOG_HEADER} as="image" />
				<link rel="prefetch" href={IMAGES.CONTACT_BG} as="image" />
			</head>
			<body className={`${rebondGrotesque.variable} font-sans antialiased`}>
				<FlashMessageProvider>{children}</FlashMessageProvider>
			</body>
		</html>
	);
}

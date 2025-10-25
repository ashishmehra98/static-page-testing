import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

// Import Swiper CSS globally to avoid conflicts
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const openSans = Open_Sans({
	variable: "--font-open-sans",
	subsets: ["latin"],
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
			<body className={`${openSans.variable} antialiased`}>{children}</body>
		</html>
	);
}

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Ecovia Pest Control | Safe Pest Control Experts Sydney",
	description:
		"At Ecovia Pest Control, we specialise in safe pest control across Sydney using environmentally responsible methods and experienced technicians. Learn more about us.",
	keywords: ["safe pest control sydney", "ecovia pest control"],
};

export default function AboutUsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}

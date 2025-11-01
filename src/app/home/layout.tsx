import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Ecovia Pest Control | Trusted Pest Control for Homes & Businesses in Sydney",
	description:
		"Looking for reliable pest control in Sydney? Ecovia offers top pest control services across Greater Sydney, delivering safe, effective solutions for ants, rodents, cockroaches and more.",
	keywords: ["pest control", "pest control sydney"],
};

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Our Pest Control Services | Ecovia Pest Control Sydney",
	description:
		"Explore the full range of pest control services offered by Ecovia Pest Control in Sydney. From inspections and removal to treatments, find out how we can help you.",
	keywords: ["pest control services"],
};

export default function ServicesLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Pest & Pest Control Products Guide | Ecovia Pest Control Sydney",
	description:
		"Learn about common pests and the pest control products used by Ecovia Pest Control in Sydney. Discover how we tackle ants, flies, rodents and more with effective solutions.",
	keywords: ["pest control products"],
};

export default function PestsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}

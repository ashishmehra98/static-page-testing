import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Ecovia Pest Control | Check Pest Control Prices & Services in Sydney",
	description:
		"Ready to get a quote? Contact Ecovia Pest Control today for competitive pest control prices in Sydney. Speak to our team about your home or business pest problem and book a visit.",
	keywords: ["pest control prices", "pest control in sydney"],
};

export default function ContactUsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}

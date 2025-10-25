import { Metadata } from "next/dist/types";
import { notFound } from "next/navigation";

interface PageProps {
	params: {
		slug: string;
	};
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const SERVICE_CONFIG = servicePages[slug as ServicePages];

	if (!SERVICE_CONFIG) {
		notFound();
	}

	return {
		title: SERVICE_CONFIG.meta.title,
		description: SERVICE_CONFIG.meta.description,
		keywords: SERVICE_CONFIG.meta.keywords.join(", "),
	};
}

const Service = async ({ params }: PageProps) => {
	const { slug } = await params;
	const SERVICE_CONFIG = servicePages[slug as ServicePages];

	if (!SERVICE_CONFIG) {
		notFound();
	}

	return <ServiceClient slug={slug} />;
};

export default Service;

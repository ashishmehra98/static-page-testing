import { Metadata } from "next/dist/types";
import { notFound } from "next/navigation";
import ServiceClient from "./service";
import { servicesPages, ServicePages } from "@/app/constants/services";

interface PageProps {
	params: {
		slug: string;
	};
}

export async function generateStaticParams() {
	return Object.keys(servicesPages).map((slug) => ({
		slug: slug,
	}));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const SERVICE_CONFIG = servicesPages[slug as ServicePages] as ServiceConfig;

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
	const SERVICE_CONFIG = servicesPages[slug as ServicePages] as ServiceConfig;

	if (!SERVICE_CONFIG) {
		notFound();
	}

	return <ServiceClient slug={slug} />;
};

export default Service;

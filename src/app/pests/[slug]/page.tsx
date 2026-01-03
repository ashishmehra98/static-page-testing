import { Metadata } from "next/dist/types";
import { notFound } from "next/navigation";
import PestStudyClient from "./PestStudyClient";
import { PestPages, pestPages } from "@/app/constants/pests";

interface PageProps {
	params: {
		slug: string;
	};
}

export const dynamic = "force-static";

export async function generateStaticParams() {
	return Object.keys(pestPages).map((slug) => ({
		slug: slug,
	}));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const PEST_STUDY_CONFIG = pestPages[slug as PestPages] as PestStudyConfig;

	if (!PEST_STUDY_CONFIG) {
		notFound();
	}

	return {
		title: PEST_STUDY_CONFIG.meta.title,
		description: PEST_STUDY_CONFIG.meta.description,
		keywords: PEST_STUDY_CONFIG.meta.keywords.join(", "),
	};
}

const PestStudy = async ({ params }: PageProps) => {
	const { slug } = await params;
	const PEST_STUDY_CONFIG = pestPages[slug as PestPages] as PestStudyConfig;

	if (!PEST_STUDY_CONFIG) {
		notFound();
	}

	return <PestStudyClient slug={slug} />;
};

export default PestStudy;

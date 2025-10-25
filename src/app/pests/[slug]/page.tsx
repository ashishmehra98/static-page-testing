import { Metadata } from "next/dist/types";
import { notFound } from "next/navigation";
import PestStudyClient from "./PestStudyClient";
import { Pages, pestPages } from "@/app/constants/pests";

interface PageProps {
	params: {
		slug: string;
	};
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const PEST_STUDY_CONFIG = pestPages[slug as Pages] as PestStudyConfig;

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
	const PEST_STUDY_CONFIG = pestPages[slug as Pages] as PestStudyConfig;

	if (!PEST_STUDY_CONFIG) {
		notFound();
	}

	return <PestStudyClient slug={slug} />;
};

export default PestStudy;

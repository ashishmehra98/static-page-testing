import { Metadata } from "next/dist/types";
import PestStudyClient from "./PestStudyClient";
import { Pages, pestPages } from "@/app/constants/pests";

interface PageProps {
	params: {
		slug: string;
	};
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const PEST_STUDY_CONFIG = pestPages[params.slug as Pages] as PestStudyConfig;

	if (!PEST_STUDY_CONFIG) {
		return {
			title: "Pest Control Services | Ecovia",
			description: "Professional pest control services in Sydney",
		};
	}

	return {
		title: PEST_STUDY_CONFIG.meta.title,
		description: PEST_STUDY_CONFIG.meta.description,
		keywords: PEST_STUDY_CONFIG.meta.keywords.join(", "),
	};
}

const PestStudy = ({ params }: PageProps) => {
	return <PestStudyClient slug={params.slug} />;
};

export default PestStudy;

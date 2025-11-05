"use client";

import { use } from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import FormExpand from "../components/FormExpand";
import JobDetail from "../components/JobDetail";
import PestTreatmentScoop from "../components/PestTreatmentScoop";
import PesticideApplicationDetails from "../components/PesticideApplicationDetails";
import SiteConditionsTools from "../components/SiteConditionsTools";
import RiskAssessmentControls from "../components/RiskAssessmentControls";
import TechnicianDetails from "../components/TechnicianDetails";
import { ServiceReportProvider, useServiceReport } from "../context/ServiceReportContext";

interface ServiceReportPageProps {
	params: Promise<{
		id: string;
	}>;
}

const ServiceReportContent = () => {
	const { loading } = useServiceReport();

	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
					<p className="text-gray-600 text-lg">Please hold on, this will just take a few seconds...</p>
				</div>
			</div>
		);
	}

	return (
		<Container>
			<Header />
			<div className="flex flex-col gap-[60px] xl:gap-[80px] pt-[120px]">
				<FormExpand title="Job & Property Details" number="01">
					<JobDetail />
				</FormExpand>
				<FormExpand title="Pest & Treatment Scoop" number="02">
					<PestTreatmentScoop />
				</FormExpand>
				<FormExpand title="Pesticides Used & Application Details" number="03">
					<PesticideApplicationDetails />
				</FormExpand>
				<FormExpand title="Site Conditions, Tools & Comments" number="04">
					<SiteConditionsTools />
				</FormExpand>
				<FormExpand title="Risk Assessment & Controls" number="05">
					<RiskAssessmentControls />
				</FormExpand>
				<FormExpand title="Technician Details" number="06">
					<TechnicianDetails />
				</FormExpand>
			</div>
		</Container>
	);
};

const ServiceReport = ({ params }: ServiceReportPageProps) => {
	const { id } = use(params);
	return (
		<ServiceReportProvider reportId={id}>
			<ServiceReportContent />
		</ServiceReportProvider>
	);
};

export default ServiceReport;

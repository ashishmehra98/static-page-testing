"use client";

import { use } from "react";
import Link from "next/link";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Button from "../../components/Button";
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

const ServiceReportContent = ({ reportId }: { reportId: string }) => {
	const { loading, isFormCompleted } = useServiceReport();

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
			{isFormCompleted && (
				<div className="w-[90%] mx-auto flex flex-row items-center justify-between gap-6 py-4 px-6 bg-green-50 rounded-lg border-2 border-green-200">
					<h2 className="text-lg xl:text-xl font-medium text-gray-900">
						Your service report has been completed and is ready to view
					</h2>
					<Link href={`/service-report/${reportId}/view`} target="_blank">
						<Button variant="primary" title="View it" onPress={() => {}} className="!h-[55px]" />
					</Link>
				</div>
			)}
			<div className="flex flex-col gap-[60px] xl:gap-[80px] pt-[60px] pb-[60px]">
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
			<ServiceReportContent reportId={id} />
		</ServiceReportProvider>
	);
};

export default ServiceReport;

"use client";

import Container from "../../components/Container";
import Header from "../../components/Header";
import FormExpand from "../components/FormExpand";
import JobDetail from "../components/JobDetail";
import PestTreatmentScoop from "../components/PestTreatmentScoop";
import PesticideApplicationDetails from "../components/PesticideApplicationDetails";
import SiteConditionsTools from "../components/SiteConditionsTools";
import RiskAssessmentControls from "../components/RiskAssessmentControls";
import TechnicianDetails from "../components/TechnicianDetails";

interface ServiceReportPageProps {
	params: {
		id: string;
	};
}

const ServiceReport = ({ params }: ServiceReportPageProps) => {
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

export default ServiceReport;

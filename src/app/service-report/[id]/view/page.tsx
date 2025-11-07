"use client";

import { use } from "react";
import Container from "../../../components/Container";
import { ServiceReportProvider, useServiceReport } from "../../context/ServiceReportContext";
import JobDetailView from "./components/JobDetailView";
import PestTreatmentScopeView from "./components/PestTreatmentScopeView";
import PesticideApplicationDetailsView from "./components/PesticideApplicationDetailsView";
import SiteConditionsToolsView from "./components/SiteConditionsToolsView";
import RiskAssessmentView from "./components/RiskAssessmentView";
import AsbestosIdentificationView from "./components/AsbestosIdentificationView";
import TechnicianDetailsView from "./components/TechnicianDetailsView";
import styles from "./style.module.css";

interface ServiceReportViewPageProps {
	params: Promise<{
		id: string;
	}>;
}

const ServiceReportViewContent = () => {
	const { data, loading } = useServiceReport();

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

	// Format date for footer
	const formatFooterDate = (dateString: string | null): string => {
		if (!dateString) return "N/A";
		try {
			const date = new Date(dateString);
			return date.toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			});
		} catch {
			return dateString;
		}
	};

	// Format report ID
	const formatReportId = (id: string | null): string => {
		if (!id) return "N/A";
		// Format as JOB-YYYY-MM-DD-XXX if possible, otherwise use the ID
		try {
			const date = data?.created_at ? new Date(data.created_at) : new Date();
			const year = date.getFullYear();
			const month = String(date.getMonth() + 1).padStart(2, "0");
			const day = String(date.getDate()).padStart(2, "0");
			// Use last 3 characters of ID as sequence
			const sequence = id.slice(-3).toUpperCase();
			return `JOB-${year}-${month}-${day}-${sequence}`;
		} catch {
			return id;
		}
	};

	const handlePrint = () => {
		window.print();
	};

	return (
		<>
			<Container>
				<div className={styles.headerSection}>
					<h1 className={styles.title}>NSW EPA Pest Control Service Report</h1>
					<p className={styles.subtitle}>Complete Job Summary & Documentation</p>
				</div>
				<div className={styles.contentSection}>
					<JobDetailView />
					<PestTreatmentScopeView />
					<PesticideApplicationDetailsView />
					<SiteConditionsToolsView />
					<RiskAssessmentView />
					<AsbestosIdentificationView />
					<TechnicianDetailsView />
				</div>
			</Container>
			{!loading && data && (
				<div className={styles.footerSection}>
					<div className={styles.footerContent}>
						<p className={styles.footerText}>
							NSW EPA Pest Control Service Report
							<br />
							Generated: {formatFooterDate(data.created_at)} | Report ID: {formatReportId(data.id)}
						</p>
						<button className={styles.printButton} onClick={handlePrint}>
							<span className={styles.printButtonText}>
								p<span className={styles.lowercase}>rint</span>/pdf
							</span>
							<svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M9.04167 5.9375H14V18.1094C14 18.6029 13.6099 19 13.125 19H0.875C0.390104 19 0 18.6029 0 18.1094V0.890625C0 0.39707 0.390104 0 0.875 0H8.16667V5.04688C8.16667 5.53672 8.56042 5.9375 9.04167 5.9375ZM13.7448 3.89648L10.1719 0.259766C10.0078 0.0927734 9.78542 0 9.55208 0H9.33333V4.75H14V4.52363C14 4.28984 13.9089 4.06348 13.7448 3.89648Z"
									fill="black"
								/>
							</svg>
						</button>
					</div>
				</div>
			)}
		</>
	);
};

const ServiceReportView = ({ params }: ServiceReportViewPageProps) => {
	const { id } = use(params);

	return (
		<ServiceReportProvider reportId={id}>
			<ServiceReportViewContent />
		</ServiceReportProvider>
	);
};

export default ServiceReportView;

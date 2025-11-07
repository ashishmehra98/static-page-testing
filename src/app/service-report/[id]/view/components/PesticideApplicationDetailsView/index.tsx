"use client";

import React, { useState, useEffect } from "react";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import styles from "./PesticideApplicationDetailsView.module.css";
import { useServiceReport } from "@/app/service-report/context/ServiceReportContext";

const labels: Record<string, string> = {
	areas_covered: "Areas covered",
	pesticides: "Pesticide Selected",
	batch: "SBATCH #",
	raw_amount: "Raw Amount",
	applied_amount: "Applied Amount",
	chemical_used: "Chemical Used",
	mixed_rate: "Mixed Rate",
};

// Database type for pesticide applications
interface PesticideApplicationDB {
	id: string;
	service_report_id: string;
	areas_covered: string[] | null;
	pesticides: string[] | null;
	batch: string | null;
	raw_amount: number | null;
	raw_amount_unit: string | null;
	applied_amount: number | null;
	applied_amount_unit: string | null;
	chemical_used: string | null;
	mixed_rate: number | null;
	mixed_rate_unit: string | null;
	default_unit: number | null;
	default_unit_unit: string | null;
	created_at: string;
	updated_at: string | null;
}

const PesticideApplicationDetailsView: React.FC = () => {
	const { data, loading } = useServiceReport();
	const [pesticideApplications, setPesticideApplications] = useState<PesticideApplicationDB[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	// Fetch pesticide applications when service report data is loaded
	useEffect(() => {
		const fetchPesticideApplications = async () => {
			if (!data?.id) {
				return;
			}

			setIsLoading(true);

			try {
				const response = await fetch(`/api/service-report/${data.id}/pesticide-application`);
				const result = await response.json();

				if (!response.ok) {
					throw new Error(result.error || "Failed to fetch pesticide applications");
				}

				if (result.success && result.data) {
					setPesticideApplications(result.data || []);
				}
			} catch (error) {
				console.error("Error fetching pesticide applications:", error);
				setPesticideApplications([]);
			} finally {
				setIsLoading(false);
			}
		};

		if (!loading && data) {
			fetchPesticideApplications();
		}
	}, [data, loading]);

	if (loading || isLoading || !data) {
		return null;
	}

	console.log({ pesticideApplications });

	// If there are no pesticides, show one card with "N/A"
	if (pesticideApplications.length === 0) {
		return (
			<div className={styles.pesticideApplicationDetailsView}>
				<SectionTitle heading="03. Pesticides Used & Application Details" />
				<div className={styles.cardGroup}>
					<Card>
						<p>N/A</p>
					</Card>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.pesticideApplicationDetailsView}>
			<SectionTitle heading="03. Pesticides Used & Application Details" />
			{pesticideApplications.map((pesticide, index) => (
				<React.Fragment key={pesticide.id}>
					{pesticideApplications.length > 1 ? (
						<h4>
							<strong>Application #{index + 1}</strong>
						</h4>
					) : null}
					<div key={pesticide.id} className={styles.cardGroup}>
						{Object.keys(pesticide).map((key) => {
							if (!labels[key]) return null;
							let value = pesticide[key as keyof PesticideApplicationDB];
							if (Array.isArray(value) && typeof value[0] === "string") {
								value = value.join(", ").replaceAll("-", " ");
							}
							return (
								<Card key={key}>
									<p className={styles.cardLabel}>{labels[key]}</p>
									<p className={styles.value}>{value}</p>
								</Card>
							);
						})}
					</div>
				</React.Fragment>
			))}
		</div>
	);
};

export default PesticideApplicationDetailsView;

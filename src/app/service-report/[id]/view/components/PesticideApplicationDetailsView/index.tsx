"use client";

import React from "react";
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
	const { data, pesticideApplicationData, loading } = useServiceReport();

	if (loading || !data || pesticideApplicationData === null) {
		return null;
	}

	// If there are no pesticides, show one card with "N/A"
	if (pesticideApplicationData.length === 0) {
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
			{pesticideApplicationData.map((pesticide, index) => (
				<React.Fragment key={pesticide.id}>
					{pesticideApplicationData.length > 1 ? (
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

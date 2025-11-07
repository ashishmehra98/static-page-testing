"use client";

import React from "react";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import CheckboxDisplay from "../CheckboxDisplay";
import styles from "./SiteConditionsToolsView.module.css";
import { useServiceReport } from "@/app/service-report/context/ServiceReportContext";

const labels: Record<string, string> = {
	site_active: "Site Active",
	wind_speed: "Wind Speed",
	housekeeping_rating: "Housekeeping Rating",
	tools_used: "Tools Used",
	job_comments: "Job Comments",
};

const SiteConditionsToolsView: React.FC = () => {
	const { data, loading } = useServiceReport();

	if (loading || !data) {
		return null;
	}

	return (
		<div className={styles.siteConditionsToolsView}>
			<SectionTitle heading="04. Site Conditions, Tools & Comments" />
			<div className={styles.cardGroup}>
				{Object.keys(data).map((key) => {
					let value = data[key as keyof typeof data];
					if (typeof value === "boolean") {
						value = value ? "Yes" : "No";
					}
					if (!labels[key as keyof typeof data]) return null;
					if (key === "tools_used") {
						return (
							<Card key={key}>
								<p className={styles.cardLabel}>{labels[key]}</p>
								{Array.isArray(value) && value.length === 0 && <p className={styles.value}>{"N/A"}</p>}
								{Array.isArray(value) &&
									value.map((data, index) => {
										return <CheckboxDisplay key={`${data}-${index}`} label={data} checked={true} />;
									})}
							</Card>
						);
					}
					return (
						<Card key={key}>
							<p className={styles.cardLabel}>{labels[key]}</p>
							<p className={styles.value}>{value || "N/A"}</p>
						</Card>
					);
				})}
			</div>
		</div>
	);
};

export default SiteConditionsToolsView;

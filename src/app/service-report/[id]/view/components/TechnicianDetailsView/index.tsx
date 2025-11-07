"use client";

import React from "react";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import styles from "./TechnicianDetailsView.module.css";
import { useServiceReport } from "@/app/service-report/context/ServiceReportContext";

const TechnicianDetailsView: React.FC = () => {
	const { data, loading } = useServiceReport();

	if (loading || !data) {
		return null;
	}

	/**
	 * Renders the signature image if available
	 */
	const renderSignature = () => {
		if (!data.technician_signature) {
			return <p className={styles.noSignature}>No signature available</p>;
		}

		return (
			<div className={styles.signatureContainer}>
				<img src={data.technician_signature} alt="Technician Signature" className={styles.signatureImage} />
			</div>
		);
	};

	return (
		<div className={styles.technicianDetailsView}>
			<SectionTitle heading="06. Technician Details" />
			<div className={styles.cardGroup}>
				<Card>
					<p className={styles.cardLabel}>Name</p>
					<p className={styles.value}>{data.technician_name || "N/A"}</p>
				</Card>
				<Card>
					<p className={styles.cardLabel}>Licence</p>
					<p className={styles.value}>{data.technician_licence || "N/A"}</p>
				</Card>
				<Card>
					<p className={styles.cardLabel}>Signature</p>
					{renderSignature()}
				</Card>
			</div>
		</div>
	);
};

export default TechnicianDetailsView;

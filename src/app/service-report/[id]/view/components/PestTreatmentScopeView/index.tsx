"use client";

import React from "react";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import CheckboxDisplay from "../CheckboxDisplay";
import styles from "./PestTreatmentScopeView.module.css";
import { useServiceReport } from "@/app/service-report/context/ServiceReportContext";

const PestTreatmentScopeView: React.FC = () => {
	const { data, loading } = useServiceReport();

	if (loading || !data) {
		return null;
	}

	const pestTypes = data.pest_types || [];
	const otherPest = data.other_pest;

	console.log({ pestTypes });

	// If there are no pests, show one card with "N/A"
	if (pestTypes.length === 0) {
		return (
			<div className={styles.pestTreatmentScopeView}>
				<SectionTitle heading="02. Pest & Treatment Scope" />
				<div className={styles.cardGroup}>
					<Card className={styles.pestCard}>
						<p className={styles.cardLabel}>N/A</p>
					</Card>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.pestTreatmentScopeView}>
			<SectionTitle heading="02. Pest & Treatment Scope" />
			<div className={styles.cardGroup}>
				<Card className={styles.pestCard}>
					<p className={styles.cardLabel}>Pests Identified</p>
					<div className={styles.checkboxList}>
						{pestTypes.map((pest, index) => (
							<CheckboxDisplay key={`pest-${index}`} label={pest} checked={true} />
						))}
					</div>
				</Card>
				{otherPest && (
					<Card className={styles.pestCard}>
						<p className={styles.cardLabel}>Other Pests</p>
						<CheckboxDisplay label={otherPest} checked={true} />
					</Card>
				)}
			</div>
		</div>
	);
};

export default PestTreatmentScopeView;

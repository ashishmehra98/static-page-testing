"use client";

import React from "react";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import styles from "./AsbestosIdentificationView.module.css";
import { useServiceReport } from "@/app/service-report/context/ServiceReportContext";

interface FormattedValue {
	text: string;
	isYes: boolean;
}

const AsbestosIdentificationView: React.FC = () => {
	const { data, loading } = useServiceReport();

	if (loading || !data) {
		return null;
	}

	/**
	 * Formats a string value for asbestos fields (yes/no/not-sure)
	 */
	const formatAsbestosValue = (value: string | null | undefined): FormattedValue => {
		if (!value) return { text: "N/A", isYes: false };
		if (value === "yes") return { text: "Yes", isYes: true };
		if (value === "no") return { text: "No", isYes: false };
		if (value === "not-sure") return { text: "Not sure", isYes: false };
		return { text: value, isYes: false };
	};

	/**
	 * Renders a single asbestos identification card
	 */
	const renderAsbestosCard = (label: string, value: string | null | undefined, index: number) => {
		const formattedValue = formatAsbestosValue(value);

		return (
			<Card key={index}>
				<p className={styles.cardLabel}>{label}</p>
				<p className={styles.value}>{formattedValue.text}</p>
			</Card>
		);
	};

	const asbestosFields = [
		{
			label: "Asbestos Identified on Site?",
			value: data.asbestos_identified,
		},
		{
			label: "Risk of disturbance?",
			value: data.asbestos_risk,
		},
		{
			label: "Other Risks",
			value: data.other_risks_noted,
		},
	];

	return (
		<div className={styles.asbestosIdentificationView}>
			<SectionTitle heading="Asbestos Identification" />
			<div className={styles.cardGroup}>
				{asbestosFields.map((field, index) => renderAsbestosCard(field.label, field.value, index))}
			</div>
		</div>
	);
};

export default AsbestosIdentificationView;

"use client";

import React from "react";
import SectionTitle from "../SectionTitle";
import styles from "./RiskAssessmentView.module.css";
import { useServiceReport } from "@/app/service-report/context/ServiceReportContext";

interface RiskField {
	label: string;
	dataKey: string;
	solutionKey?: string;
	solutionLabel?: string;
}

interface FormattedValue {
	text: string;
	isYes: boolean;
}

// Risk assessment fields configuration
const riskFields: RiskField[] = [
	{
		label: "People on site",
		dataKey: "people_present",
		solutionKey: "people_asked_to_vacate",
		solutionLabel: "Asked to vacate premise",
	},
	{
		label: "Children",
		dataKey: "children_present",
		solutionKey: "children_parental_supervision",
		solutionLabel: "Parental Supervision whilst on site",
	},
	{
		label: "Dogs/Cats",
		dataKey: "dogs_cats_present",
		solutionKey: "dogs_cats_removed",
		solutionLabel: "Removed from treatment area",
	},
	{
		label: "Lighting",
		dataKey: "lighting_issue",
		solutionKey: "lighting_carry_torch",
		solutionLabel: "Carry Torch on site, obey all signage regarding entry",
	},
	{
		label: "Excessive Noise",
		dataKey: "excessive_noise",
		solutionKey: "excessive_noise_earmuffs",
		solutionLabel: "Wear earmuffs if needed",
	},
	{
		label: "Heat and/or Cold",
		dataKey: "heat_cold_issue",
		solutionKey: "heat_cold_safety_gear",
		solutionLabel: "Wear appropriate safety gear",
	},
	{
		label: "Asbestos",
		dataKey: "asbestos_present",
		solutionKey: "asbestos_procedures",
		solutionLabel: "Adhere to safe work practices for dealing with asbestos",
	},
	{
		label: "Slippery Floors",
		dataKey: "slippery_floors",
		solutionKey: "slippery_floors_signage",
		solutionLabel: "Obey all signage regarding entry",
	},
	// {
	// 	label: "Did you identify any asbestos on site?",
	// 	dataKey: "asbestos_identified",
	// },
	// {
	// 	label: "Risk of asbestos disturbance?",
	// 	dataKey: "asbestos_risk",
	// },
	// {
	// 	label: "Other Risks",
	// 	dataKey: "other_risks_noted",
	// },
];

const RiskAssessmentView: React.FC = () => {
	const { data, loading } = useServiceReport();

	if (loading || !data) {
		return null;
	}

	/**
	 * Formats a boolean value to a display format
	 */
	const formatBoolean = (value: boolean | null | undefined): FormattedValue => {
		if (value === true) return { text: "Yes", isYes: true };
		if (value === false) return { text: "No", isYes: false };
		return { text: "N/A", isYes: false };
	};

	/**
	 * Formats a string value (used for asbestos fields and other text fields)
	 */
	const formatString = (value: string | null | undefined): FormattedValue => {
		if (!value) return { text: "N/A", isYes: false };
		if (value === "yes") return { text: "Yes", isYes: true };
		if (value === "no") return { text: "No", isYes: false };
		if (value === "not-sure") return { text: "Not sure", isYes: false };
		return { text: value, isYes: false };
	};

	/**
	 * Formats a value based on its type
	 */
	const formatValue = (value: unknown): FormattedValue => {
		if (typeof value === "boolean") {
			return formatBoolean(value);
		}
		return formatString(value as string | null);
	};

	/**
	 * Checks if a solution/control measure is applied
	 */
	const hasSolutionApplied = (field: RiskField): boolean => {
		if (!field.solutionKey) return false;
		const solutionValue = data[field.solutionKey as keyof typeof data];
		return Boolean(solutionValue);
	};

	/**
	 * Renders a single risk assessment card
	 */
	const renderRiskCard = (field: RiskField, index: number) => {
		const value = data[field.dataKey as keyof typeof data];
		const formattedValue = formatValue(value);
		const showSolution = hasSolutionApplied(field) && field.solutionLabel;

		return (
			<div key={index} className={styles.riskCard}>
				<div className={styles.cardHeader}>
					<p className={styles.cardLabel}>{field.label}</p>
					<div className={`${styles.badge} ${formattedValue.isYes ? styles.badgeYes : styles.badgeNo}`}>
						<p className={styles.badgeText}>{formattedValue.text}</p>
					</div>
				</div>
				{showSolution && (
					<div className={styles.solutionMessage}>
						<p className={styles.solutionText}>Solution: {field.solutionLabel}</p>
					</div>
				)}
			</div>
		);
	};

	return (
		<div className={styles.riskAssessmentView}>
			<SectionTitle heading="05. Risk Assessment & Control" />
			<div className={styles.cardsGroup}>{riskFields.map(renderRiskCard)}</div>
		</div>
	);
};

export default RiskAssessmentView;

"use client";

import React, { ReactNode } from "react";
import styles from "./CombinedField.module.css";
import InputUnitWrapper from "./InputUnitWrapper";

interface CombinedFieldProps {
	label: string;
	inputField: ReactNode;
	unitField: ReactNode | string;
	isUnitButton?: boolean;
	className?: string;
}

const CombinedField: React.FC<CombinedFieldProps> = ({ label, inputField, unitField, isUnitButton = false, className = "" }) => {
	return (
		<div className={`${styles.combinedField} ${className}`}>
			<label className={styles.label}>{label}</label>
			<div className={styles.fieldWrapper}>
				<InputUnitWrapper inputField={inputField} unitField={unitField} isUnitButton={isUnitButton} />
			</div>
		</div>
	);
};

export default CombinedField;

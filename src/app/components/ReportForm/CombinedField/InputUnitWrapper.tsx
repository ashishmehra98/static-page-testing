"use client";

import React, { ReactNode } from "react";
import styles from "./InputUnitWrapper.module.css";

interface InputUnitWrapperProps {
	inputField: ReactNode;
	unitField: ReactNode | string;
	isUnitButton?: boolean;
}

const InputUnitWrapper: React.FC<InputUnitWrapperProps> = ({ inputField, unitField, isUnitButton = false }) => {
	return (
		<>
			<div className={styles.inputWrapper}>{inputField}</div>
			{isUnitButton ? (
				<div className={styles.unitButton}>{typeof unitField === "string" ? unitField : unitField}</div>
			) : (
				<div className={styles.unitWrapper}>{unitField}</div>
			)}
		</>
	);
};

export default InputUnitWrapper;

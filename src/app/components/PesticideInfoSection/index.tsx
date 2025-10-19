"use client";

import React from "react";
import HeaderSection from "../HeaderSection";
import PesticideInfoSlides from "../PesticideInfoSlides";
import styles from "./PesticideInfoSection.module.css";

interface PesticideInfoSectionProps {
	className?: string;
	title?: string;
	highlightedText?: string;
}

const PesticideInfoSection: React.FC<PesticideInfoSectionProps> = ({
	className,
	title = "What pest do you want to ",
	highlightedText = "get rid of ?",
}) => {
	return (
		<div className={`${styles.pesticideInfoSection} ${className}`}>
			<HeaderSection title={title} highlightedText={highlightedText} align={"start"} className={styles.headerSection} />
			<PesticideInfoSlides />
		</div>
	);
};

export default PesticideInfoSection;

import React from "react";
import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
	heading: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ heading }) => {
	return (
		<div className={styles.sectionTitle}>
			<h2 className={styles.heading}>{heading}</h2>
			<div className={styles.divider}></div>
		</div>
	);
};

export default SectionTitle;

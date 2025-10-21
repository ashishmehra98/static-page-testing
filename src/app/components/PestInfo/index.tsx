"use client";

import React from "react";
import styles from "./PestInfo.module.css";

interface PestInfoProps {
	imageSrc: string;
	imageAlt?: string;
	pestLabel?: string;
	pestName: string;
	commonSignsLabel?: string;
	commonSigns: string;
	treatmentLabel?: string;
	treatment: string;
	className?: string;
}

const PestInfo: React.FC<PestInfoProps> = ({
	imageSrc,
	imageAlt = "",
	pestLabel = "Pest",
	pestName,
	commonSignsLabel = "Common Signs",
	commonSigns,
	treatmentLabel = "Treatment Approach",
	treatment,
	className,
}) => {
	return (
		<section className={`${styles.container} ${className}`}>
			<div className={styles.imageContainer}>
				{/* Using native img to avoid external domain config requirements */}
				<img src={imageSrc} alt={imageAlt} className={styles.image} />
			</div>

			<div className={styles.content}>
				<div className={styles.sectionBlock}>
					<p className={styles.sectionLabel}>{pestLabel}</p>
					<p className={styles.pestName}>{pestName}</p>
				</div>

				<div className={`${styles.sectionBlock} ${styles.narrow}`}>
					<p className={styles.sectionLabel}>{commonSignsLabel}</p>
					<p className={styles.paragraph}>{commonSigns}</p>
				</div>

				<div className={styles.sectionBlock}>
					<p className={styles.sectionLabel}>{treatmentLabel}</p>
					<p className={styles.paragraph}>{treatment}</p>
				</div>
			</div>
		</section>
	);
};

export default PestInfo;

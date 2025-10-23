"use client";

import React from "react";
import Image from "next/image";
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
	isReverse?: boolean;
	textColor?: {
		sectionLabel?: string;
		pestName?: string;
		paragraph?: string;
	};
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
	isReverse = false,
	textColor,
}) => {
	const contentStyle = textColor
		? ({
			"--section-label-color": textColor.sectionLabel,
			"--pest-name-color": textColor.pestName,
			"--paragraph-color": textColor.paragraph,
		} as React.CSSProperties)
		: {};

	return (
		<section className={`${styles.container} ${isReverse ? styles.reverse : ""} ${className}`}>
			<div className={styles.imageContainer}>
				{/* Using native img to avoid external domain config requirements */}
				<Image src={imageSrc} alt={imageAlt} fill className={styles.image} />
			</div>

			<div className={styles.content} style={contentStyle}>
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

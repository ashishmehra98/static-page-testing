"use client";

import React from "react";
import Image from "next/image";
import HeaderSection, { HeaderSectionProps } from "../HeaderSection";
import styles from "./SectionInfo.module.css";

interface SectionInfoProps extends HeaderSectionProps {
	imageSrc: string;
	imageAlt: string;
	className?: string;
}

const SectionInfo: React.FC<SectionInfoProps> = ({ imageSrc, imageAlt, className, ...headerSectionProps }) => {
	return (
		<section className={`${styles.section} ${className}`}>
			<div className={styles.content}>
				<HeaderSection {...headerSectionProps} className={styles.textContainer} />
				<div className={styles.imageContainer}>
					<Image src={imageSrc} alt={imageAlt} fill className={styles.image} priority />
				</div>
			</div>
		</section>
	);
};

export default SectionInfo;

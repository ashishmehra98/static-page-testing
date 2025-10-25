"use client";

import React from "react";
import Image from "next/image";
import HeaderSection, { HeaderSectionProps } from "../HeaderSection";
import styles from "./SectionInfo.module.css";

interface SectionInfoProps extends Partial<HeaderSectionProps> {
	imageSrc: string;
	imageAlt: string;
	imageStyle?: React.CSSProperties;
	className?: string;
	isReverse?: boolean;
	children?: React.ReactNode;
}

const SectionInfo: React.FC<SectionInfoProps> = ({
	imageSrc,
	imageAlt,
	imageStyle,
	className,
	isReverse,
	children,
	...headerSectionProps
}) => {
	return (
		<section className={`${styles.section} ${isReverse ? styles.sectionReverse : ""} ${className}`}>
			<div className={styles.content}>
				{children || (
					<HeaderSection
						{...(headerSectionProps as HeaderSectionProps)}
						className={`${styles.textContainer} content-container`}
					/>
				)}
				<div className={`${styles.imageContainer} image-container`}>
					<Image src={imageSrc} alt={imageAlt} fill className={styles.image} style={imageStyle} priority />
				</div>
			</div>
		</section>
	);
};

export default SectionInfo;

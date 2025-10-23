"use client";

import React from "react";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
	imageSrc: string;
	imageAlt?: string;
	serviceNumber?: string;
	serviceName: string;
	serviceDescription: string;
	ctaText?: string;
	className?: string;
	isReverse?: boolean;
	textColor?: {
		sectionLabel?: string;
		serviceName?: string;
		paragraph?: string;
		cta?: string;
	};
}

const ServiceCard: React.FC<ServiceCardProps> = ({
	imageSrc,
	imageAlt = "",
	serviceNumber = "01/",
	serviceName,
	serviceDescription,
	ctaText = "Book a free consultation",
	className,
	isReverse = false,
	textColor,
}) => {
	const contentStyle = textColor
		? ({
			"--section-label-color": textColor.sectionLabel,
			"--service-name-color": textColor.serviceName,
			"--paragraph-color": textColor.paragraph,
			"--cta-color": textColor.cta,
		} as React.CSSProperties)
		: {};

	return (
		<section className={`${styles.container} ${isReverse ? styles.reverse : ""} ${className}`}>
			<div className={styles.content} style={contentStyle}>
				<div className={styles.info}>
					<p className={styles.serviceNumber}>{serviceNumber}</p>
					<p className={styles.serviceName}>{serviceName}</p>
					<p className={styles.serviceDescription}>{serviceDescription}</p>
				</div>
				<p className={styles.cta}>{ctaText}</p>
			</div>

			<div className={styles.imageContainer}>
				<img src={imageSrc} alt={imageAlt} className={styles.image} />
			</div>
		</section>
	);
};

export default ServiceCard;

"use client";

import React from "react";
import Image from "next/image";
import { IconName, ICONS } from "../../constants/icons";
import styles from "./Info.module.css";

interface InfoProps {
	variant?: "row" | "col";
	icon: IconName;
	title: string;
	description?: string;
}

const Info: React.FC<InfoProps> = ({ variant = "row", icon, title, description }) => {
	return (
		<div className={`${styles.infoContainer} ${variant === "row" ? styles.infoContainerRow : styles.infoContainerCol}`}>
			<div className={`${styles.iconContainer} info-icon--container`}>
				<Image src={ICONS[icon]} alt="Info icon" width={28} height={28} />
			</div>
			<div className={styles.contentContainer}>
				{title ? <span className={`${styles.title} info-title`}>{title}</span> : null}
				{description ? <p className={`${styles.description} info-description`}>{description}</p> : null}
			</div>
		</div>
	);
};

export default Info;

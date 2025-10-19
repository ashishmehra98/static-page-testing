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
			<div className={styles.iconContainer}>
				<Image src={ICONS[icon]} alt="Info icon" width={30} height={30} />
			</div>
			<div className={styles.contentContainer}>
				{title ? <h3 className={styles.title}>{title}</h3> : null}
				{description ? <p className={styles.description}>{description}</p> : null}
			</div>
		</div>
	);
};

export default Info;

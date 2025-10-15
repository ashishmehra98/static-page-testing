"use client";

import React from "react";
import Image from "next/image";
import { IconName, ICONS } from "../../constants/icons";
import styles from "./Info.module.css";

interface InfoProps {
	icon: IconName;
	title: string;
	description: string;
}

const Info: React.FC<InfoProps> = ({ icon, title, description }) => {
	return (
		<div className={styles.infoContainer}>
			<div className={styles.iconContainer}>
				<Image src={ICONS[icon]} alt="Info icon" width={30} height={30} />
			</div>
			<div className={styles.contentContainer}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	);
};

export default Info;

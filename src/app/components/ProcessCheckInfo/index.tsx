"use client";

import React from "react";
import Image from "next/image";
import { ICONS } from "../../constants/icons";
import styles from "./ProcessCheckInfo.module.css";

interface ProcessCheckInfoProps {
	title: string;
	highlightedText?: string;
	className?: string;
}

const ProcessCheckInfo: React.FC<ProcessCheckInfoProps> = ({ title, highlightedText, className = "" }) => {
	return (
		<div className={`${styles.container} ${className}`}>
			<div className={styles.iconContainer}>
				<Image src={ICONS["verified-tick"]} alt="Verified tick" width={28} height={28} className={styles.icon} />
			</div>
			<p className={styles.text}>
				{highlightedText ? (
					<>
						{title.split(highlightedText)[0]}
						<span className={styles.highlighted}>{highlightedText}</span>
						{title.split(highlightedText)[1]}
					</>
				) : (
					title
				)}
			</p>
		</div>
	);
};

export default ProcessCheckInfo;

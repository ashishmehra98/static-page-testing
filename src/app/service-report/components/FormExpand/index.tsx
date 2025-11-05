"use client";

import { useState, ReactNode } from "react";
import Image from "next/image";
import { ICONS } from "../../../constants/icons";
import styles from "./FormExpand.module.css";

interface FormExpandProps {
	title: string;
	number: string;
	children: ReactNode;
	defaultExpanded?: boolean;
}

const FormExpand: React.FC<FormExpandProps> = ({ title, number, children, defaultExpanded = true }) => {
	const [isExpanded, setIsExpanded] = useState(defaultExpanded);

	return (
		<div className={styles.formSection}>
			<div className={styles.formHeader} onClick={() => setIsExpanded(!isExpanded)}>
				<div className={styles.iconContainer}>
					<Image
						src={isExpanded ? ICONS["minus-primary"] : ICONS.plus}
						alt={isExpanded ? "collapse" : "expand"}
						width={28}
						height={28}
						className={styles.icon}
					/>
				</div>
				<p className={styles.headerTitle}>
					<span>{number}. </span>
					{title}
				</p>
			</div>
			<div className={styles.divider}></div>
			{isExpanded && children}
		</div>
	);
};

export default FormExpand;

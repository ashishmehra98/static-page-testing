"use client";

import React from "react";
import Insects from "../Insects";
import styles from "./PesticideInfo.module.css";

export interface PesticideInfoProps {
	insectType: Insects;
	name: string;
	description: string;
	isSelected: boolean;
	onLearnMore: () => void;
}

const PesticideInfo: React.FC<PesticideInfoProps> = ({ insectType, name, description, isSelected, onLearnMore }) => {
	return (
		<div onClick={onLearnMore} className={`${styles.container} ${isSelected ? styles.selected : ""}`}>
			<div className={styles.content}>
				<Insects insectType={insectType} variant="small" color={!isSelected ? " #134021" : "#b1cf5f"} />
				<h3 className={styles.name}>{name}</h3>
				<p className={styles.description}>{description}</p>
				<button onClick={onLearnMore} className={styles.learnMoreButton}>
					<span className={styles.learnMoreText}>Learn more</span>
				</button>
			</div>
			<div className={styles.insectLarge}>
				<Insects insectType={insectType} variant="large" color="#245028" />
			</div>
		</div>
	);
};

export default PesticideInfo;

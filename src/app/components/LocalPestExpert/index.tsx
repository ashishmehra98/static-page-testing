import React from "react";
import HeaderSection from "../HeaderSection";
import styles from "./LocalPestExpert.module.css";

const LocalPestExpert: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<section className={`${styles.localPestExpert}${className ? ` ${className}` : ""}`}>
			<HeaderSection
				title="Your "
				highlightedText="Local Sydney"
				extraTitle=" Pest Experts"
				subtitle="Based right here in Sydney, we're always close by to protect your home or business"
				align="center"
			/>

			<div className={styles.mapSection}>
				<p className={styles.mapPlaceholder}>Insert Business Address Here</p>
			</div>

			<div className={styles.infoSection}>
				<div className={styles.infoItem}>
					<p className={styles.infoText}>
						<span className={styles.infoBold}>Lorem ipsum </span>
						<span className={styles.infoRegular}>
							dolor sit amet consectetur. Dui a tristique est phasellus ultrices amet morbi mattis.
						</span>
					</p>
				</div>
				<div className={styles.infoItem}>
					<p className={styles.infoText}>
						<span className={styles.infoBold}>Lorem ipsum </span>
						<span className={styles.infoRegular}>
							dolor sit amet consectetur. Dui a tristique est phasellus ultrices amet morbi mattis.
						</span>
					</p>
				</div>
				<div className={styles.infoItem}>
					<p className={styles.infoText}>
						<span className={styles.infoBold}>Lorem ipsum </span>
						<span className={styles.infoRegular}>
							dolor sit amet consectetur. Dui a tristique est phasellus ultrices amet morbi mattis.
						</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default LocalPestExpert;

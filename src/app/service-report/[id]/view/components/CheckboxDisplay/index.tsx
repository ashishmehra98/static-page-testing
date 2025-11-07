import React from "react";
import styles from "./CheckboxDisplay.module.css";

interface CheckboxDisplayProps {
	label: string;
	checked?: boolean;
}

const CheckboxDisplay: React.FC<CheckboxDisplayProps> = ({ label, checked = false }) => {
	return (
		<div className={styles.checkboxDisplay}>
			<div className={styles.checkbox}>
				{checked ? (
					<svg
						className={styles.checkboxIcon}
						width="18"
						height="18"
						viewBox="0 0 18 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<rect
							x="1"
							y="1"
							width="16"
							height="16"
							rx="2"
							fill="rgba(19,64,33,0.8)"
							stroke="rgba(19,64,33,0.8)"
							strokeWidth="2"
						/>
						<path d="M5 9L8 12L13 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				) : (
					<svg
						className={styles.checkboxIcon}
						width="18"
						height="18"
						viewBox="0 0 18 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<rect x="1" y="1" width="16" height="16" rx="2" fill="none" stroke="rgba(19,64,33,0.44)" strokeWidth="2" />
					</svg>
				)}
			</div>
			<p className={styles.label}>{label}</p>
		</div>
	);
};

export default CheckboxDisplay;

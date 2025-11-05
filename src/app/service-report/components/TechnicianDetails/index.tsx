"use client";

import { useState } from "react";
import { Input } from "../../../components/ReportForm";
import Button from "../../../components/Button";
import pageStyles from "../../style.module.css";
import styles from "./TechnicianDetails.module.css";

interface TechnicianDetailsData {
	name: string;
	licence: string;
	signature: string;
}

const TechnicianDetails: React.FC = () => {
	const [formData, setFormData] = useState<TechnicianDetailsData>({
		name: "",
		licence: "",
		signature: "",
	});

	const handleInputChange = (field: keyof TechnicianDetailsData) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({
			...prev,
			[field]: event.target.value,
		}));
	};

	const handleSheets = () => {
		// Handle sheets logic here
		console.log("Sheets clicked");
	};

	const handleCompleteJob = () => {
		// Handle complete job logic here
		console.log("Complete Job clicked");
		console.log("Technician Details data:", formData);
	};

	return (
		<>
			<div className={styles.fieldsWrapper}>
				<Input
					label="Name"
					variant="text"
					value={formData.name}
					onChange={handleInputChange("name")}
					placeholder="Enter name"
					className={styles.field}
				/>
				<Input
					label="Licence"
					variant="text"
					value={formData.licence}
					onChange={handleInputChange("licence")}
					placeholder="Enter licence"
					className={styles.field}
				/>
				<Input
					label="Signature"
					variant="text"
					value={formData.signature}
					onChange={handleInputChange("signature")}
					placeholder="Enter signature"
					className={`${styles.field} ${styles.signatureField}`}
				/>
			</div>
			<div className={styles.actions}>
				<button className={styles.sheetsButton} onClick={handleSheets}>
					Sheets
				</button>
				<Button variant="primary" title="Complete Job" onPress={handleCompleteJob} className={pageStyles.saveButton} />
			</div>
		</>
	);
};

export default TechnicianDetails;

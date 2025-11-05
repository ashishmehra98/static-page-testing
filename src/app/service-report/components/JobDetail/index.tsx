"use client";

import { useState } from "react";
import { Input } from "../../../components/ReportForm";
import Button from "../../../components/Button";
import pageStyles from "../../style.module.css";
import styles from "./JobDetail.module.css";

interface JobDetailData {
	date: string;
	startTime: string;
	endTime: string;
	propertyAddress: string;
}

const JobDetail: React.FC = () => {
	const [formData, setFormData] = useState<JobDetailData>({
		date: "",
		startTime: "",
		endTime: "",
		propertyAddress: "",
	});

	const handleInputChange = (field: keyof JobDetailData) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({
			...prev,
			[field]: event.target.value,
		}));
	};

	const handleSaveChanges = () => {
		// Handle save changes logic here
		console.log("Form data:", formData);
	};

	return (
		<>
			<div className={styles.fieldsWrapper}>
				<Input
					label="Date"
					variant="date"
					value={formData.date}
					onChange={handleInputChange("date")}
					placeholder="Select date"
					className={styles.field}
				/>
				<Input
					label="Start time"
					variant="time"
					value={formData.startTime}
					onChange={handleInputChange("startTime")}
					placeholder="Select start time"
					className={styles.field}
				/>
				<Input
					label="End time"
					variant="time"
					value={formData.endTime}
					onChange={handleInputChange("endTime")}
					placeholder="Select end time"
					className={styles.field}
				/>
				<Input
					label="Property address"
					variant="text"
					value={formData.propertyAddress}
					onChange={handleInputChange("propertyAddress")}
					placeholder="Enter property address"
					className={styles.field}
				/>
			</div>
			<Button variant="primary" title="Save Changes" onPress={handleSaveChanges} className={pageStyles.saveButton} />
		</>
	);
};

export default JobDetail;

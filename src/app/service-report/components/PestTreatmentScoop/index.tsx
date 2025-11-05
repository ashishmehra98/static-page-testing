"use client";

import { useState } from "react";
import { Input, Select } from "../../../components/ReportForm";
import Button from "../../../components/Button";
import pageStyles from "../../style.module.css";
import styles from "./PestTreatmentScoop.module.css";

interface PestTreatmentScoopData {
	pestType: string[];
	otherPest: string;
}

const pestOptions = [
	{ value: "general-pest", label: "General Pest" },
	{ value: "ant", label: "Ant" },
	{ value: "silverfish", label: "Silverfish" },
	{ value: "webbing-spiders", label: "Webbing Spiders" },
	{ value: "cockroaches", label: "Cockroaches" },
	{ value: "fleas", label: "Fleas" },
	{ value: "ticks", label: "Ticks" },
	{ value: "carpet-beetles", label: "Carpet Beetles" },
	{ value: "bird-mites", label: "Bird Mites" },
	{ value: "rodent", label: "Rodent" },
	{ value: "mosquito", label: "Mosquito" },
	{ value: "bed-bug", label: "Bed Bug" },
	{ value: "rodent-removal", label: "Rodent Removal" },
];

const PestTreatmentScoop: React.FC = () => {
	const [formData, setFormData] = useState<PestTreatmentScoopData>({
		pestType: [],
		otherPest: "",
	});

	const handlePestTypeChange = (values: string[]) => {
		setFormData((prev) => ({
			...prev,
			pestType: values,
		}));
	};

	const handleOtherPestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({
			...prev,
			otherPest: event.target.value,
		}));
	};

	const handleSaveChanges = () => {
		// Handle save changes logic here
		console.log("Form data:", formData);
	};

	return (
		<>
			<div className={styles.fieldsWrapper}>
				<Select
					label="Pest type"
					options={pestOptions}
					isMultipleSelect={true}
					multipleValue={formData.pestType}
					onMultipleChange={handlePestTypeChange}
					placeholder="Select pest type"
					className={styles.field}
				/>
				<Input
					label="Other pest"
					variant="text"
					value={formData.otherPest}
					onChange={handleOtherPestChange}
					placeholder="Enter other pest"
					className={styles.field}
				/>
			</div>
			<div className={styles.buttonsWrapper}>
				{/* <Button variant="light" title="Sheets" onPress={() => {}} className={styles.sheetsButton} /> */}
				<Button variant="primary" title="Save Changes" onPress={handleSaveChanges} className={pageStyles.saveButton} />
			</div>
		</>
	);
};

export default PestTreatmentScoop;

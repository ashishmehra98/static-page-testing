"use client";

import { useState, useEffect } from "react";
import { Input, Select } from "../../../components/ReportForm";
import Button from "../../../components/Button";
import pageStyles from "../../style.module.css";
import { useServiceReport } from "../../context/ServiceReportContext";
import { useFlashMessage } from "../../../components/FlashMessage";
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
	const { data, updateData, refresh } = useServiceReport();
	const { showMessage } = useFlashMessage();
	const [formData, setFormData] = useState<PestTreatmentScoopData>({
		pestType: [],
		otherPest: "",
	});
	const [isLoading, setIsLoading] = useState(false);

	// Initialize form data from context when data is loaded
	useEffect(() => {
		if (data) {
			setFormData({
				pestType: data.pest_types || [],
				otherPest: data.other_pest || "",
			});
		}
	}, [data]);

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

	const handleSaveChanges = async () => {
		if (!data?.id) {
			showMessage("Error: Service report ID not found", "error");
			return;
		}

		// Validate required field
		if (formData.pestType.length === 0) {
			showMessage("Pest type is required", "error");
			return;
		}

		setIsLoading(true);

		try {
			const updatePayload = {
				pest_types: formData.pestType.length > 0 ? formData.pestType : null,
				other_pest: formData.otherPest || null,
			};

			const response = await fetch(`/api/service-report/${data.id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatePayload),
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || "Failed to update service report");
			}

			if (result.success && result.data) {
				// Update local context data
				updateData(updatePayload);
				// Refresh data from server to ensure consistency
				await refresh();
				showMessage("Pest treatment details saved successfully", "success");
			} else {
				throw new Error("Invalid response format");
			}
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
			console.error("Error saving pest treatment details:", error);
			showMessage(`Failed to save changes: ${errorMessage}`, "error");
		} finally {
			setIsLoading(false);
		}
	};

	// Check if required field is filled
	const isPestTypeFilled = formData.pestType.length > 0;

	// Check if formData is the same as data
	const isFormDataSameAsData = data
		? JSON.stringify([...formData.pestType].sort()) === JSON.stringify([...(data.pest_types || [])].sort()) &&
			formData.otherPest === (data.other_pest || "")
		: false;

	// Disable button if required field is not filled OR if formData is same as data
	const isButtonDisabled = !isPestTypeFilled || isFormDataSameAsData;

	return (
		<>
			<div className={styles.fieldsWrapper}>
				<Select
					label="Pest type *"
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
				<Button
					variant="primary"
					title={isLoading ? "Saving..." : "Save Changes"}
					onPress={handleSaveChanges}
					className={pageStyles.saveButton}
					disabled={isButtonDisabled || isLoading}
				/>
			</div>
		</>
	);
};

export default PestTreatmentScoop;

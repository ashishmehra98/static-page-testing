"use client";

import { useState, useEffect } from "react";
import { Input } from "../../../components/ReportForm";
import Button from "../../../components/Button";
import pageStyles from "../../style.module.css";
import styles from "./TechnicianDetails.module.css";
import { useServiceReport } from "../../context/ServiceReportContext";
import { useFlashMessage } from "../../../components/FlashMessage";

interface TechnicianDetailsData {
	name: string;
	licence: string;
	signature: string;
}

const TechnicianDetails: React.FC = () => {
	const { data, updateData, refresh } = useServiceReport();
	const { showMessage } = useFlashMessage();
	const [formData, setFormData] = useState<TechnicianDetailsData>({
		name: "",
		licence: "",
		signature: "",
	});
	const [isLoading, setIsLoading] = useState(false);

	// Initialize form data from context when data is loaded
	useEffect(() => {
		if (data) {
			setFormData({
				name: data.technician_name || "",
				licence: data.technician_licence || "",
				signature: data.technician_signature || "",
			});
		}
	}, [data]);

	const handleInputChange = (field: keyof TechnicianDetailsData) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({
			...prev,
			[field]: event.target.value,
		}));
	};

	const handleSaveChanges = async () => {
		if (!data?.id) {
			showMessage("Error: Service report ID not found", "error");
			return;
		}

		setIsLoading(true);

		try {
			const updatePayload = {
				technician_name: formData.name || null,
				technician_licence: formData.licence || null,
				technician_signature: formData.signature || null,
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
				showMessage("Technician details saved successfully", "success");
			} else {
				throw new Error("Invalid response format");
			}
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
			console.error("Error saving technician details:", error);
			showMessage(`Failed to save changes: ${errorMessage}`, "error");
		} finally {
			setIsLoading(false);
		}
	};

	// Check if all fields are blank
	const areAllFieldsBlank = !formData.name && !formData.licence && !formData.signature;

	// Check if formData is the same as data
	const isFormDataSameAsData = data
		? formData.name === (data.technician_name || "") &&
			formData.licence === (data.technician_licence || "") &&
			formData.signature === (data.technician_signature || "")
		: areAllFieldsBlank;

	// Disable button if all fields are blank OR if formData is same as data
	const isButtonDisabled = areAllFieldsBlank || isFormDataSameAsData;

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
				{/* <Button variant="light" title="Sheets" onPress={() => {}} className={styles.sheetsButton} /> */}
				<Button
					variant="primary"
					title={isLoading ? "Saving..." : "Complete Job"}
					onPress={handleSaveChanges}
					className={pageStyles.saveButton}
					disabled={isButtonDisabled || isLoading}
				/>
			</div>
		</>
	);
};

export default TechnicianDetails;

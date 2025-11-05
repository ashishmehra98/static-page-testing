"use client";

import { useState, useEffect } from "react";
import { Input } from "../../../components/ReportForm";
import Button from "../../../components/Button";
import pageStyles from "../../style.module.css";
import styles from "./JobDetail.module.css";
import { useServiceReport } from "../../context/ServiceReportContext";
import { useFlashMessage } from "../../../components/FlashMessage";

interface JobDetailData {
	date: string;
	startTime: string;
	endTime: string;
	propertyAddress: string;
}

const JobDetail: React.FC = () => {
	const { data, updateData, refresh } = useServiceReport();
	const { showMessage } = useFlashMessage();
	const [formData, setFormData] = useState<JobDetailData>({
		date: "",
		startTime: "",
		endTime: "",
		propertyAddress: "",
	});
	const [isLoading, setIsLoading] = useState(false);

	// Initialize form data from context when data is loaded
	useEffect(() => {
		if (data) {
			setFormData({
				date: data.job_date || "",
				startTime: data.start_time || "",
				endTime: data.end_time || "",
				propertyAddress: data.property_address || "",
			});
		}
	}, [data]);

	const handleInputChange = (field: keyof JobDetailData) => (event: React.ChangeEvent<HTMLInputElement>) => {
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

		// Validate start time and end time
		if (formData.startTime && formData.endTime) {
			const startTime = new Date(`2000-01-01T${formData.startTime}`);
			const endTime = new Date(`2000-01-01T${formData.endTime}`);

			if (startTime >= endTime) {
				showMessage("End time must be later than start time", "error");
				return;
			}
		}

		setIsLoading(true);

		try {
			const updatePayload = {
				job_date: formData.date || null,
				start_time: formData.startTime || null,
				end_time: formData.endTime || null,
				property_address: formData.propertyAddress || null,
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
				showMessage("Job details saved successfully", "success");
			} else {
				throw new Error("Invalid response format");
			}
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
			console.error("Error saving job details:", error);
			showMessage(`Failed to save changes: ${errorMessage}`, "error");
		} finally {
			setIsLoading(false);
		}
	};

	// Check if all fields are blank
	const areAllFieldsBlank = !formData.date && !formData.startTime && !formData.endTime && !formData.propertyAddress;

	// Check if formData is the same as data
	const isFormDataSameAsData = data
		? formData.date === (data.job_date || "") &&
			formData.startTime === (data.start_time || "") &&
			formData.endTime === (data.end_time || "") &&
			formData.propertyAddress === (data.property_address || "")
		: areAllFieldsBlank;

	// Disable button if all fields are blank OR if formData is same as data
	const isButtonDisabled = areAllFieldsBlank || isFormDataSameAsData;

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
			<Button
				variant="primary"
				title={isLoading ? "Saving..." : "Save Changes"}
				onPress={handleSaveChanges}
				className={pageStyles.saveButton}
				disabled={isButtonDisabled || isLoading}
			/>
		</>
	);
};

export default JobDetail;

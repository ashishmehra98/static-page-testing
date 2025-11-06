"use client";

import { useState, useEffect } from "react";
import { Select, TextArea, Checkbox, CombinedField } from "../../../components/ReportForm";
import Button from "../../../components/Button";
import pageStyles from "../../style.module.css";
import { useServiceReport } from "../../context/ServiceReportContext";
import { useFlashMessage } from "../../../components/FlashMessage";
import styles from "./SiteConditionsTools.module.css";

interface SiteConditionsToolsData {
	siteActive: string;
	windSpeed: string;
	housekeepingRating: string;
	toolsUsed: string[];
	jobComments: string;
}

const windSpeedOptions = [
	{ value: "<1.6", label: "Less than 1.6" },
	{ value: "1.6-4.8", label: "1.6 - 4.8" },
	{ value: "6.4-11.3", label: "6.4 - 11.3" },
	{ value: "12.9-19.3", label: "12.9 - 19.3" },
	{ value: "20.9-29.0", label: "20.9 - 29.0" },
	{ value: "30.6-38.6", label: "30.6 - 38.6" },
];

const housekeepingRatingOptions = [
	{ value: "0", label: "0" },
	{ value: "25", label: "25" },
	{ value: "50", label: "50" },
	{ value: "75", label: "75" },
	{ value: "100", label: "100" },
];

const toolsUsedOptions = [
	{ value: "spray", label: "Spray" },
	{ value: "dust", label: "Dust" },
	{ value: "cockroach-bait", label: "Cockroach Bait" },
	{ value: "rodent-bait", label: "Rodent Bait" },
	{ value: "trap", label: "Trap" },
	{ value: "mist", label: "Mist" },
	{ value: "fog", label: "Fog" },
];

const siteActiveOptions = [
	{ value: "yes", label: "Yes" },
	{ value: "no", label: "No" },
];

const SiteConditionsTools: React.FC = () => {
	const { data, updateData, refresh } = useServiceReport();
	const { showMessage } = useFlashMessage();
	const [formData, setFormData] = useState<SiteConditionsToolsData>({
		siteActive: "",
		windSpeed: "",
		housekeepingRating: "",
		toolsUsed: [],
		jobComments: "",
	});
	const [isLoading, setIsLoading] = useState(false);

	// Initialize form data from context when data is loaded
	useEffect(() => {
		if (data) {
			setFormData({
				siteActive: data.site_active === true ? "yes" : data.site_active === false ? "no" : "",
				windSpeed: data.wind_speed || "",
				housekeepingRating: data.housekeeping_rating || "",
				toolsUsed: data.tools_used || [],
				jobComments: data.job_comments || "",
			});
		}
	}, [data]);

	const handleSiteActiveChange = (value: string) => {
		setFormData((prev) => ({
			...prev,
			siteActive: value,
		}));
	};

	const handleSelectChange = (fieldName: keyof SiteConditionsToolsData) => {
		return (event: React.ChangeEvent<HTMLSelectElement>) => {
			setFormData((prev) => ({
				...prev,
				[fieldName]: event.target.value,
			}));
		};
	};

	const handleMultipleSelectChange = (fieldName: keyof SiteConditionsToolsData) => {
		return (values: string[]) => {
			setFormData((prev) => ({
				...prev,
				[fieldName]: values,
			}));
		};
	};

	const handleJobCommentsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setFormData((prev) => ({
			...prev,
			jobComments: event.target.value,
		}));
	};

	const handleSaveChanges = async () => {
		if (!data?.id) {
			showMessage("Error: Service report ID not found", "error");
			return;
		}

		// Validate all fields are required
		if (
			!formData.siteActive ||
			!formData.windSpeed ||
			!formData.housekeepingRating ||
			formData.toolsUsed.length === 0 ||
			!formData.jobComments
		) {
			showMessage("All fields are required", "error");
			return;
		}

		setIsLoading(true);

		try {
			const updatePayload = {
				site_active: formData.siteActive === "yes" ? true : formData.siteActive === "no" ? false : null,
				wind_speed: formData.windSpeed || null,
				housekeeping_rating: formData.housekeepingRating || null,
				tools_used: formData.toolsUsed.length > 0 ? formData.toolsUsed : null,
				job_comments: formData.jobComments || null,
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
				showMessage("Site conditions and tools saved successfully", "success");
			} else {
				throw new Error("Invalid response format");
			}
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
			console.error("Error saving site conditions and tools:", error);
			showMessage(`Failed to save changes: ${errorMessage}`, "error");
		} finally {
			setIsLoading(false);
		}
	};

	// Check if all required fields are filled
	const areAllFieldsFilled =
		formData.siteActive &&
		formData.windSpeed &&
		formData.housekeepingRating &&
		formData.toolsUsed.length > 0 &&
		formData.jobComments;

	// Check if formData is the same as data
	const isFormDataSameAsData = data
		? formData.siteActive === (data.site_active === true ? "yes" : data.site_active === false ? "no" : "") &&
			formData.windSpeed === (data.wind_speed || "") &&
			formData.housekeepingRating === (data.housekeeping_rating || "") &&
			JSON.stringify(formData.toolsUsed.sort()) === JSON.stringify((data.tools_used || []).sort()) &&
			formData.jobComments === (data.job_comments || "")
		: false;

	// Disable button if not all fields are filled OR if formData is same as data
	const isButtonDisabled = !areAllFieldsFilled || isFormDataSameAsData;

	return (
		<>
			<div className={styles.fieldsWrapper}>
				<Checkbox
					label="Site Active? *"
					options={siteActiveOptions}
					value={formData.siteActive}
					onChange={handleSiteActiveChange}
					className={styles.field}
				/>
				<CombinedField
					label="Wind Speed *"
					inputField={
						<Select
							label=""
							options={windSpeedOptions}
							value={formData.windSpeed}
							onChange={handleSelectChange("windSpeed")}
							placeholder="Select wind speed"
							className={styles.hideLabel}
						/>
					}
					unitField="km/h"
					isUnitButton={true}
					className={styles.field}
				/>
				<Select
					label="House Keeping Rating *"
					options={housekeepingRatingOptions}
					value={formData.housekeepingRating}
					onChange={handleSelectChange("housekeepingRating")}
					placeholder="Select rating"
					className={styles.field}
				/>
				<Select
					label="Tools Used *"
					options={toolsUsedOptions}
					isMultipleSelect={true}
					multipleValue={formData.toolsUsed}
					onMultipleChange={handleMultipleSelectChange("toolsUsed")}
					placeholder="Select tools"
					className={styles.field}
				/>
				<TextArea
					label="Job Comments *"
					value={formData.jobComments}
					onChange={handleJobCommentsChange}
					placeholder="Enter job comments"
					maxLength={1000}
					minLength={500}
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

export default SiteConditionsTools;

"use client";

import { useState } from "react";
import { Select, TextArea, Checkbox, CombinedField } from "../../../components/ReportForm";
import Button from "../../../components/Button";
import pageStyles from "../../style.module.css";
import styles from "./SiteConditionsTools.module.css";

interface SiteConditionsToolsData {
	siteActive: string;
	windSpeed: string;
	housekeepingRating: string;
	toolsUsed: string[];
	jobComments: string;
}

const windSpeedOptions = [
	{ value: "0-6.3", label: "0 - 6.3" },
	{ value: "6.4-11.3", label: "6.4 - 11.3" },
	{ value: "11.4-17.1", label: "11.4 - 17.1" },
	{ value: "17.2-24.1", label: "17.2 - 24.1" },
	{ value: "24.2-32.6", label: "24.2 - 32.6" },
	{ value: "32.7+", label: "32.7+" },
];

const housekeepingRatingOptions = [
	{ value: "1", label: "1" },
	{ value: "2", label: "2" },
	{ value: "3", label: "3" },
	{ value: "4", label: "4" },
	{ value: "5", label: "5" },
	{ value: "10", label: "10" },
	{ value: "15", label: "15" },
	{ value: "20", label: "20" },
	{ value: "25", label: "25" },
	{ value: "30", label: "30" },
];

const toolsUsedOptions = [
	{ value: "spray", label: "Spray" },
	{ value: "dust", label: "Dust" },
	{ value: "bait", label: "Bait" },
	{ value: "trap", label: "Trap" },
	{ value: "monitoring", label: "Monitoring" },
	{ value: "other", label: "Other" },
];

const siteActiveOptions = [
	{ value: "yes", label: "Yes" },
	{ value: "no", label: "No" },
];

const SiteConditionsTools: React.FC = () => {
	const [formData, setFormData] = useState<SiteConditionsToolsData>({
		siteActive: "",
		windSpeed: "",
		housekeepingRating: "",
		toolsUsed: [],
		jobComments: "",
	});

	const handleSiteActiveChange = (value: string) => {
		setFormData((prev) => ({
			...prev,
			siteActive: value,
		}));
	};

	const handleWindSpeedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFormData((prev) => ({
			...prev,
			windSpeed: event.target.value,
		}));
	};

	const handleHousekeepingRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFormData((prev) => ({
			...prev,
			housekeepingRating: event.target.value,
		}));
	};

	const handleToolsUsedChange = (values: string[]) => {
		setFormData((prev) => ({
			...prev,
			toolsUsed: values,
		}));
	};

	const handleJobCommentsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setFormData((prev) => ({
			...prev,
			jobComments: event.target.value,
		}));
	};

	const handleSaveChanges = () => {
		// Handle save changes logic here
		console.log("Form data:", formData);
	};

	return (
		<>
			<div className={styles.fieldsWrapper}>
				<Checkbox
					label="Site Active?"
					options={siteActiveOptions}
					value={formData.siteActive}
					onChange={handleSiteActiveChange}
					className={styles.field}
				/>
				<CombinedField
					label="Wind Speed"
					inputField={
						<Select
							label=""
							options={windSpeedOptions}
							value={formData.windSpeed}
							onChange={handleWindSpeedChange}
							placeholder="Select wind speed"
							className={styles.hideLabel}
						/>
					}
					unitField="km/h"
					isUnitButton={true}
					className={styles.field}
				/>
				<Select
					label="House Keeping Rating"
					options={housekeepingRatingOptions}
					value={formData.housekeepingRating}
					onChange={handleHousekeepingRatingChange}
					placeholder="Select rating"
					className={styles.field}
				/>
				<Select
					label="Tools Used"
					options={toolsUsedOptions}
					isMultipleSelect={true}
					multipleValue={formData.toolsUsed}
					onMultipleChange={handleToolsUsedChange}
					placeholder="Select tools"
					className={styles.field}
				/>
				<TextArea
					label="Job Comments"
					value={formData.jobComments}
					onChange={handleJobCommentsChange}
					placeholder="Enter job comments"
					maxLength={1000}
					minLength={500}
					className={styles.field}
				/>
			</div>
			<Button variant="primary" title="Save Changes" onPress={handleSaveChanges} className={pageStyles.saveButton} />
		</>
	);
};

export default SiteConditionsTools;

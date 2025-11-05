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

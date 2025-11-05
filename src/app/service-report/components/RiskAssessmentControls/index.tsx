"use client";

import { useState } from "react";
import { Checkbox, Input } from "../../../components/ReportForm";
import Button from "../../../components/Button";
import pageStyles from "../../style.module.css";
import styles from "./RiskAssessmentControls.module.css";

interface RiskAssessmentControlsData {
	people: string;
	peopleAskedToVacate: boolean;
	children: string;
	childrenParentalSupervision: boolean;
	dogsCats: string;
	dogsCatsRemoved: boolean;
	lighting: string;
	lightingCarryTorch: boolean;
	excessiveNoise: string;
	excessiveNoiseEarmuffs: boolean;
	heatCold: string;
	heatColdSafetyGear: boolean;
	asbestos: string;
	asbestosProcedures: boolean;
	slipperyFloors: string;
	slipperyFloorsSignage: boolean;
	asbestosIdentified: string;
	asbestosRisk: string;
	otherRisksNoted: string;
	otherRisks: string;
}

const yesNoOptions = [
	{ value: "yes", label: "Yes" },
	{ value: "no", label: "No" },
];

const asbestosOptions = [
	{ value: "yes", label: "Yes" },
	{ value: "no", label: "No" },
	{ value: "not-sure", label: "Not sure" },
];

interface CheckboxFieldConfig {
	label: string;
	field: keyof RiskAssessmentControlsData;
	options: { value: string; label: string }[];
	additionalCheckbox?: {
		field: keyof RiskAssessmentControlsData;
		value: string;
		label: string;
	};
}

interface RowConfig {
	fields: CheckboxFieldConfig[];
}

const checkboxConfig: RowConfig[] = [
	{
		fields: [
			{
				label: "People",
				field: "people",
				options: yesNoOptions,
				additionalCheckbox: {
					field: "peopleAskedToVacate",
					value: "asked-to-vacate",
					label: "Asked to vacate premise",
				},
			},
			{
				label: "Children",
				field: "children",
				options: yesNoOptions,
				additionalCheckbox: {
					field: "childrenParentalSupervision",
					value: "parental-supervision",
					label: "Parental Supervision whilst on site",
				},
			},
			{
				label: "Dogs/Cats",
				field: "dogsCats",
				options: yesNoOptions,
				additionalCheckbox: {
					field: "dogsCatsRemoved",
					value: "removed",
					label: "Removed from treatment area",
				},
			},
			{
				label: "Lighting",
				field: "lighting",
				options: yesNoOptions,
				additionalCheckbox: {
					field: "lightingCarryTorch",
					value: "carry-torch",
					label: "Carry Torch on site, obey all signage regarding entry",
				},
			},
		],
	},
	{
		fields: [
			{
				label: "Excessive Noise",
				field: "excessiveNoise",
				options: yesNoOptions,
				additionalCheckbox: {
					field: "excessiveNoiseEarmuffs",
					value: "earmuffs",
					label: "Wear earmuffs if needed",
				},
			},
			{
				label: "Heat and/or Cold",
				field: "heatCold",
				options: yesNoOptions,
				additionalCheckbox: {
					field: "heatColdSafetyGear",
					value: "safety-gear",
					label: "Wear appropriate safety gear",
				},
			},
			{
				label: "Asbestos",
				field: "asbestos",
				options: yesNoOptions,
				additionalCheckbox: {
					field: "asbestosProcedures",
					value: "procedures",
					label: "Adhere to safe work practices for dealing with asbestos",
				},
			},
			{
				label: "Slippery Floors",
				field: "slipperyFloors",
				options: yesNoOptions,
				additionalCheckbox: {
					field: "slipperyFloorsSignage",
					value: "signage",
					label: "Obey all signage regarding entry",
				},
			},
		],
	},
	{
		fields: [
			{
				label: "Did you identify any asbestos on site?",
				field: "asbestosIdentified",
				options: asbestosOptions,
			},
			{
				label: "Risk of asbestos disturbance?",
				field: "asbestosRisk",
				options: asbestosOptions,
			},
			{
				label: "Other Risks Noted",
				field: "otherRisksNoted",
				options: yesNoOptions,
			},
		],
	},
];

const RiskAssessmentControls: React.FC = () => {
	const [formData, setFormData] = useState<RiskAssessmentControlsData>({
		people: "",
		peopleAskedToVacate: false,
		children: "",
		childrenParentalSupervision: false,
		dogsCats: "",
		dogsCatsRemoved: false,
		lighting: "",
		lightingCarryTorch: false,
		excessiveNoise: "",
		excessiveNoiseEarmuffs: false,
		heatCold: "",
		heatColdSafetyGear: false,
		asbestos: "",
		asbestosProcedures: false,
		slipperyFloors: "",
		slipperyFloorsSignage: false,
		asbestosIdentified: "",
		asbestosRisk: "",
		otherRisksNoted: "",
		otherRisks: "",
	});

	const handleCheckboxChange = (
		field: keyof RiskAssessmentControlsData,
		value: string,
		additionalCheckboxField?: keyof RiskAssessmentControlsData,
	) => {
		setFormData((prev) => {
			const updatedData: RiskAssessmentControlsData = {
				...prev,
				[field]: value,
			};

			// If "Yes" is selected and there's an associated solution checkbox, automatically tick it
			if (value === "yes" && additionalCheckboxField) {
				return {
					...updatedData,
					[additionalCheckboxField]: true,
				};
			}
			// If "No" is selected, uncheck the associated solution checkbox
			if (value === "no" && additionalCheckboxField) {
				return {
					...updatedData,
					[additionalCheckboxField]: false,
				};
			}

			return updatedData;
		});
	};

	const handleAdditionalCheckboxChange = (
		field: keyof RiskAssessmentControlsData,
		checked: boolean,
		mainField?: keyof RiskAssessmentControlsData,
	) => {
		setFormData((prev) => {
			const updatedData: RiskAssessmentControlsData = {
				...prev,
				[field]: checked,
			};

			// If the solution checkbox is being checked and the main field is "no", change it to "yes"
			if (checked && mainField && (prev[mainField] as string) === "no") {
				return {
					...updatedData,
					[mainField]: "yes",
				};
			}

			return updatedData;
		});
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({
			...prev,
			otherRisks: event.target.value,
		}));
	};

	const handleSaveChanges = () => {
		// Handle save changes logic here
		console.log("Risk Assessment & Controls data:", formData);
	};

	return (
		<>
			<div className={styles.contentWrapper}>
				{checkboxConfig.map((row, rowIndex) => (
					<div key={rowIndex} className={styles.row}>
						{row.fields.map((fieldConfig) => {
							const additionalCheckbox = fieldConfig.additionalCheckbox;
							const isOtherRisksNoted = fieldConfig.field === "otherRisksNoted";
							const showOtherRisksInput = isOtherRisksNoted && formData.otherRisksNoted === "yes";

							return (
								<div key={fieldConfig.field} className={styles.fieldGroup}>
									<Checkbox
										label={fieldConfig.label}
										options={fieldConfig.options}
										value={formData[fieldConfig.field] as string}
										onChange={(value) => handleCheckboxChange(fieldConfig.field, value, additionalCheckbox?.field)}
										className={styles.checkboxField}
									/>
									{additionalCheckbox && (
										<Checkbox
											options={[{ value: additionalCheckbox.value, label: additionalCheckbox.label }]}
											value={(formData[additionalCheckbox.field] as boolean) ? additionalCheckbox.value : ""}
											onChange={(value) =>
												handleAdditionalCheckboxChange(
													additionalCheckbox.field,
													value === additionalCheckbox.value,
													fieldConfig.field,
												)
											}
											className={styles.checkboxField}
										/>
									)}
									{showOtherRisksInput && (
										<Input
											label="Custom Risk Line"
											variant="text"
											value={formData.otherRisks}
											onChange={handleInputChange}
											placeholder="Enter other risks"
											className={styles.inputField}
										/>
									)}
								</div>
							);
						})}
					</div>
				))}
			</div>

			{/* Action Buttons */}
			<div className={styles.actions}>
				{/* <Button variant="light" title="Sheets" onPress={() => {}} className={styles.sheetsButton} /> */}
				<Button variant="primary" title="Save Changes" onPress={handleSaveChanges} className={pageStyles.saveButton} />
			</div>
		</>
	);
};

export default RiskAssessmentControls;

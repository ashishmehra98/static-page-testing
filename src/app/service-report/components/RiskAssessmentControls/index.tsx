"use client";

import { useState, useEffect } from "react";
import { Checkbox, Input } from "../../../components/ReportForm";
import Button from "../../../components/Button";
import pageStyles from "../../style.module.css";
import { useServiceReport } from "../../context/ServiceReportContext";
import { useFlashMessage } from "../../../components/FlashMessage";
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
			// {
			// 	label: "Other Risks Noted",
			// 	field: "otherRisksNoted",
			// 	options: yesNoOptions,
			// },
		],
	},
];

// Required fields for validation (all fields except otherRisksNoted)
const requiredFields: (keyof RiskAssessmentControlsData)[] = [
	"people",
	"children",
	"dogsCats",
	"lighting",
	"excessiveNoise",
	"heatCold",
	"asbestos",
	"slipperyFloors",
	"asbestosIdentified",
	"asbestosRisk",
];

const RiskAssessmentControls: React.FC = () => {
	const { data, updateData, refresh } = useServiceReport();
	const { showMessage } = useFlashMessage();
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
	});
	const [isLoading, setIsLoading] = useState(false);

	// Helper function to convert boolean to yes/no string
	const booleanToYesNo = (value: boolean | null | undefined): string => {
		if (value === true) return "yes";
		if (value === false) return "no";
		return "";
	};

	// Helper function to convert string to yes/no/not-sure string
	const stringToAsbestosOption = (value: string | null | undefined): string => {
		if (value === "yes") return "yes";
		if (value === "no") return "no";
		if (value === "not-sure") return "not-sure";
		return ""; // Return empty string when no value is set
	};

	// Helper function to convert yes/no string to boolean
	const yesNoToBoolean = (value: string): boolean | null | string => {
		if (value === "yes") return "yes";
		if (value === "no") return "no";
		if (value === "not-sure") return "not-sure";
		return null;
	};

	// Helper function to convert yes/no/not-sure string to string | null
	const asbestosOptionToString = (value: string): string | null => {
		if (value === "yes") return "yes";
		if (value === "no") return "no";
		if (value === "not-sure") return "not-sure";
		return null; // "not-sure" maps to null
	};

	// Initialize form data from context when data is loaded
	useEffect(() => {
		if (data) {
			setFormData({
				people: booleanToYesNo(data.people_present),
				peopleAskedToVacate: data.people_asked_to_vacate || false,
				children: booleanToYesNo(data.children_present),
				childrenParentalSupervision: data.children_parental_supervision || false,
				dogsCats: booleanToYesNo(data.dogs_cats_present),
				dogsCatsRemoved: data.dogs_cats_removed || false,
				lighting: booleanToYesNo(data.lighting_issue),
				lightingCarryTorch: data.lighting_carry_torch || false,
				excessiveNoise: booleanToYesNo(data.excessive_noise),
				excessiveNoiseEarmuffs: data.excessive_noise_earmuffs || false,
				heatCold: booleanToYesNo(data.heat_cold_issue),
				heatColdSafetyGear: data.heat_cold_safety_gear || false,
				asbestos: booleanToYesNo(data.asbestos_present),
				asbestosProcedures: data.asbestos_procedures || false,
				slipperyFloors: booleanToYesNo(data.slippery_floors),
				slipperyFloorsSignage: data.slippery_floors_signage || false,
				asbestosIdentified: stringToAsbestosOption(data.asbestos_identified),
				asbestosRisk: stringToAsbestosOption(data.asbestos_risk),
				otherRisksNoted: data.other_risks_noted || "",
			});
		}
	}, [data]);

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

			if (additionalCheckboxField) {
				// If "Yes" is selected and it's a change TO "yes" (wasn't "yes" before), auto-check the additional checkbox
				if (value === "yes" && (prev[field] as string) !== "yes") {
					return {
						...updatedData,
						[additionalCheckboxField]: true,
					};
				}
				// If "No" or empty is selected, automatically uncheck the associated solution checkbox
				if (value !== "yes") {
					return {
						...updatedData,
						[additionalCheckboxField]: false,
					};
				}
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
			otherRisksNoted: event.target.value,
		}));
	};

	const handleSaveChanges = async () => {
		if (!data?.id) {
			showMessage("Error: Service report ID not found", "error");
			return;
		}

		// Validate all required fields are filled (except otherRisksNoted)
		const missingFields = requiredFields.filter((field) => !formData[field] || (formData[field] as string).trim() === "");

		if (missingFields.length > 0) {
			showMessage("All fields are required", "error");
			return;
		}

		setIsLoading(true);

		try {
			const updatePayload = {
				people_present: yesNoToBoolean(formData.people),
				people_asked_to_vacate: formData.peopleAskedToVacate || null,
				children_present: yesNoToBoolean(formData.children),
				children_parental_supervision: formData.childrenParentalSupervision || null,
				dogs_cats_present: yesNoToBoolean(formData.dogsCats),
				dogs_cats_removed: formData.dogsCatsRemoved || null,
				lighting_issue: yesNoToBoolean(formData.lighting),
				lighting_carry_torch: formData.lightingCarryTorch || null,
				excessive_noise: yesNoToBoolean(formData.excessiveNoise),
				excessive_noise_earmuffs: formData.excessiveNoiseEarmuffs || null,
				heat_cold_issue: yesNoToBoolean(formData.heatCold),
				heat_cold_safety_gear: formData.heatColdSafetyGear || null,
				asbestos_present: yesNoToBoolean(formData.asbestos),
				asbestos_procedures: formData.asbestosProcedures || null,
				slippery_floors: yesNoToBoolean(formData.slipperyFloors),
				slippery_floors_signage: formData.slipperyFloorsSignage || null,
				asbestos_identified: asbestosOptionToString(formData.asbestosIdentified),
				asbestos_risk: asbestosOptionToString(formData.asbestosRisk),
				other_risks_noted: formData.otherRisksNoted || null,
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
				showMessage("Risk assessment & controls saved successfully", "success");
			} else {
				throw new Error("Invalid response format");
			}
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
			console.error("Error saving risk assessment & controls:", error);
			showMessage(`Failed to save changes: ${errorMessage}`, "error");
		} finally {
			setIsLoading(false);
		}
	};

	// Check if all required fields are filled (except otherRisksNoted)
	const areAllFieldsFilled = requiredFields.every((field) => formData[field] && (formData[field] as string).trim() !== "");

	// Check if formData is the same as data
	const isFormDataSameAsData = data
		? formData.people === booleanToYesNo(data.people_present) &&
			formData.peopleAskedToVacate === (data.people_asked_to_vacate || false) &&
			formData.children === booleanToYesNo(data.children_present) &&
			formData.childrenParentalSupervision === (data.children_parental_supervision || false) &&
			formData.dogsCats === booleanToYesNo(data.dogs_cats_present) &&
			formData.dogsCatsRemoved === (data.dogs_cats_removed || false) &&
			formData.lighting === booleanToYesNo(data.lighting_issue) &&
			formData.lightingCarryTorch === (data.lighting_carry_torch || false) &&
			formData.excessiveNoise === booleanToYesNo(data.excessive_noise) &&
			formData.excessiveNoiseEarmuffs === (data.excessive_noise_earmuffs || false) &&
			formData.heatCold === booleanToYesNo(data.heat_cold_issue) &&
			formData.heatColdSafetyGear === (data.heat_cold_safety_gear || false) &&
			formData.asbestos === booleanToYesNo(data.asbestos_present) &&
			formData.asbestosProcedures === (data.asbestos_procedures || false) &&
			formData.slipperyFloors === booleanToYesNo(data.slippery_floors) &&
			formData.slipperyFloorsSignage === (data.slippery_floors_signage || false) &&
			formData.asbestosIdentified === stringToAsbestosOption(data.asbestos_identified) &&
			formData.asbestosRisk === stringToAsbestosOption(data.asbestos_risk) &&
			formData.otherRisksNoted === (data.other_risks_noted || "")
		: false;

	// Disable button if not all fields are filled OR if formData is same as data
	const isButtonDisabled = !areAllFieldsFilled || isFormDataSameAsData;

	return (
		<>
			<div className={styles.contentWrapper}>
				{checkboxConfig.map((row, rowIndex) => (
					<div key={rowIndex} className={styles.row}>
						{row.fields.map((fieldConfig) => {
							const additionalCheckbox = fieldConfig.additionalCheckbox;
							// const isOtherRisksNoted = fieldConfig.field === "otherRisksNoted";
							// const showOtherRisksInput = isOtherRisksNoted && formData.otherRisksNoted === "yes";

							return (
								<div key={fieldConfig.field} className={styles.fieldGroup}>
									<Checkbox
										label={fieldConfig.label}
										options={fieldConfig.options}
										value={formData[fieldConfig.field] as string}
										onChange={(value) => handleCheckboxChange(fieldConfig.field, value, additionalCheckbox?.field)}
										className={styles.checkboxField}
										required
									/>
									{additionalCheckbox && (
										<Checkbox
											options={[{ value: additionalCheckbox.value, label: additionalCheckbox.label }]}
											value={(formData[additionalCheckbox.field] as boolean) ? additionalCheckbox.value : ""}
											onChange={(value) => {
												// Toggle the checkbox - if it's currently checked, uncheck it; otherwise check it
												const isCurrentlyChecked = (formData[additionalCheckbox.field] as boolean) === true;
												handleAdditionalCheckboxChange(additionalCheckbox.field, !isCurrentlyChecked, fieldConfig.field);
											}}
											className={styles.checkboxField}
											required
										/>
									)}
								</div>
							);
						})}
						{rowIndex === checkboxConfig.length - 1 && (
							<div className={styles.fieldGroup}>
								<Input
									label="Other risks noted"
									variant="text"
									value={formData.otherRisksNoted}
									onChange={handleInputChange}
									placeholder="Enter other risks"
									className={styles.inputField}
								/>
							</div>
						)}
					</div>
				))}
			</div>

			{/* Action Buttons */}
			<div className={styles.actions}>
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

export default RiskAssessmentControls;

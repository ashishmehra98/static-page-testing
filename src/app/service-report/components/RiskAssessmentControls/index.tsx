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
	otherRisks: string;
}

const yesNoOptions = [
	{ value: "yes", label: "Yes" },
	{ value: "no", label: "No" },
];

const asbestosOptions = [
	{ value: "no", label: "No" },
	{ value: "yes", label: "Yes" },
	{ value: "not-sure", label: "Not sure" },
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
		otherRisks: "",
	});

	const handleCheckboxChange = (field: keyof RiskAssessmentControlsData, value: string) => {
		setFormData((prev) => {
			// Set the new value (only one can be selected at a time, like radio buttons)
			// If the same value is clicked, keep it selected (don't toggle off)
			return {
				...prev,
				[field]: value,
			};
		});
	};

	const handleAdditionalCheckboxChange = (field: keyof RiskAssessmentControlsData, checked: boolean) => {
		setFormData((prev) => ({
			...prev,
			[field]: checked,
		}));
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

	const handleSheets = () => {
		// Handle sheets logic here
		console.log("Sheets clicked");
	};

	return (
		<>
			<div className={styles.contentWrapper}>
				{/* First Row */}
				<div className={styles.row}>
					<div className={styles.fieldGroup}>
						<Checkbox
							label="People"
							options={yesNoOptions}
							value={formData.people}
							onChange={(value) => handleCheckboxChange("people", value)}
							className={styles.checkboxField}
						/>
						<Checkbox
							options={[{ value: "asked-to-vacate", label: "Asked to vacate premise" }]}
							value={formData.peopleAskedToVacate ? "asked-to-vacate" : ""}
							onChange={(value) => handleAdditionalCheckboxChange("peopleAskedToVacate", value === "asked-to-vacate")}
							className={styles.checkboxField}
						/>
					</div>
					<div className={styles.fieldGroup}>
						<Checkbox
							label="Children"
							options={yesNoOptions}
							value={formData.children}
							onChange={(value) => handleCheckboxChange("children", value)}
							className={styles.checkboxField}
						/>
						<Checkbox
							options={[{ value: "parental-supervision", label: "Parental Supervision whilst on site" }]}
							value={formData.childrenParentalSupervision ? "parental-supervision" : ""}
							onChange={(value) =>
								handleAdditionalCheckboxChange("childrenParentalSupervision", value === "parental-supervision")
							}
							className={styles.checkboxField}
						/>
					</div>
					<div className={styles.fieldGroup}>
						<Checkbox
							label="Dogs/Cats"
							options={yesNoOptions}
							value={formData.dogsCats}
							onChange={(value) => handleCheckboxChange("dogsCats", value)}
							className={styles.checkboxField}
						/>
						<Checkbox
							options={[{ value: "removed", label: "Removed from treatment area" }]}
							value={formData.dogsCatsRemoved ? "removed" : ""}
							onChange={(value) => handleAdditionalCheckboxChange("dogsCatsRemoved", value === "removed")}
							className={styles.checkboxField}
						/>
					</div>
					<div className={styles.fieldGroup}>
						<Checkbox
							label="Lighting"
							options={yesNoOptions}
							value={formData.lighting}
							onChange={(value) => handleCheckboxChange("lighting", value)}
							className={styles.checkboxField}
						/>
						<Checkbox
							options={[{ value: "carry-torch", label: "Carry torch, follow anti-slip signs" }]}
							value={formData.lightingCarryTorch ? "carry-torch" : ""}
							onChange={(value) => handleAdditionalCheckboxChange("lightingCarryTorch", value === "carry-torch")}
							className={styles.checkboxField}
						/>
					</div>
				</div>

				{/* Second Row */}
				<div className={styles.row}>
					<div className={styles.fieldGroup}>
						<Checkbox
							label="Excessive Noise"
							options={yesNoOptions}
							value={formData.excessiveNoise}
							onChange={(value) => handleCheckboxChange("excessiveNoise", value)}
							className={styles.checkboxField}
						/>
						<Checkbox
							options={[{ value: "earmuffs", label: "Wear earmuffs if needed" }]}
							value={formData.excessiveNoiseEarmuffs ? "earmuffs" : ""}
							onChange={(value) => handleAdditionalCheckboxChange("excessiveNoiseEarmuffs", value === "earmuffs")}
							className={styles.checkboxField}
						/>
					</div>
					<div className={styles.fieldGroup}>
						<Checkbox
							label="Heat and/or Cold"
							options={yesNoOptions}
							value={formData.heatCold}
							onChange={(value) => handleCheckboxChange("heatCold", value)}
							className={styles.checkboxField}
						/>
						<Checkbox
							options={[{ value: "safety-gear", label: "Wear appropriate safety gear" }]}
							value={formData.heatColdSafetyGear ? "safety-gear" : ""}
							onChange={(value) => handleAdditionalCheckboxChange("heatColdSafetyGear", value === "safety-gear")}
							className={styles.checkboxField}
						/>
					</div>
					<div className={styles.fieldGroup}>
						<Checkbox
							label="Asbestos"
							options={yesNoOptions}
							value={formData.asbestos}
							onChange={(value) => handleCheckboxChange("asbestos", value)}
							className={styles.checkboxField}
						/>
						<Checkbox
							options={[{ value: "procedures", label: "Follow safe asbestos procedures" }]}
							value={formData.asbestosProcedures ? "procedures" : ""}
							onChange={(value) => handleAdditionalCheckboxChange("asbestosProcedures", value === "procedures")}
							className={styles.checkboxField}
						/>
					</div>
					<div className={styles.fieldGroup}>
						<Checkbox
							label="Slippery Floors"
							options={yesNoOptions}
							value={formData.slipperyFloors}
							onChange={(value) => handleCheckboxChange("slipperyFloors", value)}
							className={styles.checkboxField}
						/>
						<Checkbox
							options={[{ value: "signage", label: "Obey all signage regarding entry" }]}
							value={formData.slipperyFloorsSignage ? "signage" : ""}
							onChange={(value) => handleAdditionalCheckboxChange("slipperyFloorsSignage", value === "signage")}
							className={styles.checkboxField}
						/>
					</div>
				</div>

				{/* Third Row */}
				<div className={styles.row}>
					<div className={styles.fieldGroup}>
						<Checkbox
							label="Did you identify any asbestos on site?"
							options={asbestosOptions}
							value={formData.asbestosIdentified}
							onChange={(value) => handleCheckboxChange("asbestosIdentified", value)}
							className={styles.checkboxField}
						/>
					</div>
					<div className={styles.fieldGroup}>
						<Checkbox
							label="Risk of asbestos disturbance?"
							options={asbestosOptions}
							value={formData.asbestosRisk}
							onChange={(value) => handleCheckboxChange("asbestosRisk", value)}
							className={styles.checkboxField}
						/>
					</div>
					<div className={styles.fieldGroup}>
						<Input
							label="Other Risks Noted"
							variant="text"
							value={formData.otherRisks}
							onChange={handleInputChange}
							placeholder="Enter other risks"
							className={styles.inputField}
						/>
					</div>
				</div>
			</div>

			{/* Action Buttons */}
			<div className={styles.actions}>
				<button className={styles.sheetsButton} onClick={handleSheets}>
					Sheets
				</button>
				<Button variant="primary" title="Save Changes" onPress={handleSaveChanges} className={pageStyles.saveButton} />
			</div>
		</>
	);
};

export default RiskAssessmentControls;

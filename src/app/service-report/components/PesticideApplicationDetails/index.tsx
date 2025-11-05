"use client";

import { useState } from "react";
import { Input, Select, CombinedField } from "../../../components/ReportForm";
import Button from "../../../components/Button";
import pageStyles from "../../style.module.css";
import styles from "./PesticideApplicationDetails.module.css";

interface PesticideApplicationDetailsData {
	areasCovered: string[];
	pesticide: string[];
	batch: string;
	rawAmount: string;
	rawAmountUnit: string;
	appliedAmount: string;
	appliedAmountUnit: string;
	chemicalUsed: string;
	mixedRate: string;
	mixedRateUnit: string;
	defaultUnit: string;
	defaultUnitUnit: string;
}

const areaOptions = [
	{ value: "kitchen", label: "Kitchen" },
	{ value: "garage", label: "Garage" },
	{ value: "garden", label: "Garden" },
	{ value: "bathroom", label: "Bathroom" },
	{ value: "bedroom", label: "Bedroom" },
	{ value: "living-room", label: "Living Room" },
];

const pesticideOptions = [
	{ value: "battle-axe-roach-bait", label: "Battle Axe Roach Bait" },
	{ value: "termite-killer", label: "Termite Killer" },
	{ value: "ant-bait", label: "Ant Bait" },
	{ value: "spider-spray", label: "Spider Spray" },
];

const unitOptions = [
	{ value: "ml", label: "ml" },
	{ value: "l", label: "l" },
	{ value: "g", label: "g" },
	{ value: "kg", label: "kg" },
	{ value: "oz", label: "oz" },
];

const PesticideApplicationDetails: React.FC = () => {
	const [formData, setFormData] = useState<PesticideApplicationDetailsData>({
		areasCovered: [],
		pesticide: [],
		batch: "",
		rawAmount: "",
		rawAmountUnit: "",
		appliedAmount: "",
		appliedAmountUnit: "",
		chemicalUsed: "",
		mixedRate: "",
		mixedRateUnit: "",
		defaultUnit: "",
		defaultUnitUnit: "",
	});

	const handleAreasCoveredChange = (values: string[]) => {
		setFormData((prev) => ({
			...prev,
			areasCovered: values,
		}));
	};

	const handlePesticideChange = (values: string[]) => {
		setFormData((prev) => ({
			...prev,
			pesticide: values,
		}));
	};

	const handleBatchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({
			...prev,
			batch: event.target.value,
		}));
	};

	const handleRawAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({
			...prev,
			rawAmount: event.target.value,
		}));
	};

	const handleRawAmountUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFormData((prev) => ({
			...prev,
			rawAmountUnit: event.target.value,
		}));
	};

	const handleAppliedAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({
			...prev,
			appliedAmount: event.target.value,
		}));
	};

	const handleAppliedAmountUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFormData((prev) => ({
			...prev,
			appliedAmountUnit: event.target.value,
		}));
	};

	const handleChemicalUsedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({
			...prev,
			chemicalUsed: event.target.value,
		}));
	};

	const handleMixedRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({
			...prev,
			mixedRate: event.target.value,
		}));
	};

	const handleMixedRateUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFormData((prev) => ({
			...prev,
			mixedRateUnit: event.target.value,
		}));
	};

	const handleDefaultUnitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({
			...prev,
			defaultUnit: event.target.value,
		}));
	};

	const handleDefaultUnitUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFormData((prev) => ({
			...prev,
			defaultUnitUnit: event.target.value,
		}));
	};

	const handleSaveChanges = () => {
		// Handle save changes logic here
		console.log("Form data:", formData);
	};

	return (
		<>
			<div className={styles.fieldsContainer}>
				{/* Row 1 */}
				<div className={styles.row}>
					<div className={styles.field}>
						<Select
							label="Areas covered"
							options={areaOptions}
							isMultipleSelect={true}
							multipleValue={formData.areasCovered}
							onMultipleChange={handleAreasCoveredChange}
							placeholder="Select areas"
						/>
					</div>
					<div className={styles.field}>
						<Select
							label="Pesticide"
							options={pesticideOptions}
							isMultipleSelect={true}
							multipleValue={formData.pesticide}
							onMultipleChange={handlePesticideChange}
							placeholder="Select pesticide"
						/>
					</div>
					<div className={styles.field}>
						<Input
							label="Batch"
							variant="text"
							type="text"
							value={formData.batch}
							onChange={handleBatchChange}
							placeholder="Enter batch"
						/>
					</div>
					<CombinedField
						label="Raw Amount"
						inputField={
							<Input
								label=""
								variant="text"
								type="number"
								value={formData.rawAmount}
								onChange={handleRawAmountChange}
								placeholder="Enter amount"
								className={styles.hideLabel}
							/>
						}
						unitField={
							<Select
								label=""
								options={unitOptions}
								value={formData.rawAmountUnit}
								onChange={handleRawAmountUnitChange}
								placeholder="Unit"
								variant="primary"
								className={styles.hideLabel}
							/>
						}
						className={styles.field}
					/>
				</div>

				{/* Row 2 */}
				<div className={styles.row}>
					<CombinedField
						label="Applied Amount"
						inputField={
							<Input
								label=""
								variant="text"
								type="number"
								value={formData.appliedAmount}
								onChange={handleAppliedAmountChange}
								placeholder="Enter amount"
								className={styles.hideLabel}
							/>
						}
						unitField={
							<Select
								label=""
								options={unitOptions}
								value={formData.appliedAmountUnit}
								onChange={handleAppliedAmountUnitChange}
								placeholder="Unit"
								variant="primary"
								className={styles.hideLabel}
							/>
						}
						className={styles.field}
					/>
					<div className={styles.field}>
						<Input
							label="Chemical Used"
							variant="text"
							type="text"
							value={formData.chemicalUsed}
							onChange={handleChemicalUsedChange}
							placeholder="Enter chemical"
						/>
					</div>
					<CombinedField
						label="Mixed Rate"
						inputField={
							<Input
								label=""
								variant="text"
								type="number"
								value={formData.mixedRate}
								onChange={handleMixedRateChange}
								placeholder="Enter rate"
								className={styles.hideLabel}
							/>
						}
						unitField={
							<Select
								label=""
								options={unitOptions}
								value={formData.mixedRateUnit}
								onChange={handleMixedRateUnitChange}
								placeholder="Unit"
								variant="primary"
								className={styles.hideLabel}
							/>
						}
						className={styles.field}
					/>
				</div>

				{/* Row 3 */}
				<div className={styles.row}>
					<CombinedField
						label="Default Unit"
						inputField={
							<Input
								label=""
								variant="text"
								type="text"
								value={formData.defaultUnit}
								onChange={handleDefaultUnitChange}
								placeholder="Enter unit"
								className={styles.hideLabel}
							/>
						}
						unitField={
							<Select
								label=""
								options={unitOptions}
								value={formData.defaultUnitUnit}
								onChange={handleDefaultUnitUnitChange}
								placeholder="Unit"
								variant="primary"
								className={styles.hideLabel}
							/>
						}
						className={styles.field}
					/>
				</div>
			</div>

			<div className={styles.addNewArea}>{/* Add New Area button/image would go here */}</div>

			<div className={styles.buttonsWrapper}>
				<Button variant="light" title="Sheets" onPress={() => {}} className={styles.sheetsButton} />
				<Button variant="primary" title="Save Changes" onPress={handleSaveChanges} className={pageStyles.saveButton} />
			</div>
		</>
	);
};

export default PesticideApplicationDetails;

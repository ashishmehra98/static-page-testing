"use client";

import { useState, useEffect } from "react";
import { Input, Select, CombinedField } from "../../../components/ReportForm";
import Button from "../../../components/Button";
import { useFlashMessage } from "../../../components/FlashMessage";
import { useServiceReport } from "../../context/ServiceReportContext";
import pageStyles from "../../style.module.css";
import styles from "./PesticideApplicationDetails.module.css";

interface PesticideApplicationDetailsData {
	areasCovered: string[];
	pesticide: string;
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
	{ value: "interior", label: "Interior" },
	{ value: "skirtings", label: "Skirtings" },
	{ value: "cupboards", label: "Cupboards" },
	{ value: "kitchen", label: "Kitchen" },
	{ value: "roof-void", label: "Roof Void" },
	{ value: "sub-floor", label: "Sub Floor" },
	{ value: "wall-cavities", label: "Wall Cavities" },
	{ value: "lower-outer-walls", label: "Lower Outer Walls" },
	{ value: "full-outer-wall", label: "Full Outer Wall" },
	{ value: "eaves-gutters", label: "Eaves/Gutters" },
	{ value: "garage", label: "Garage" },
	{ value: "garden", label: "Garden" },
	{ value: "fences", label: "Fences" },
	{ value: "pool-surrounds", label: "Pool Surrounds" },
	{ value: "electricals", label: "Electrical's" },
	{ value: "storeroom", label: "Storeroom" },
	{ value: "shop-area", label: "Shop Area" },
	{ value: "warehouse", label: "Warehouse" },
	{ value: "offices", label: "Offices" },
	{ value: "carpark", label: "Carpark" },
	{ value: "basement", label: "Basement" },
	{ value: "bait-station", label: "Bait Station" },
];

const pesticideOptions = [
	{ value: "battle-axe-roach-bait", label: "Battle Axe Roach Bait", config: { chemicalUsed: "0.5g/kg Fipronil" } },
	{ value: "temprid-75", label: "Temprid 75", config: { chemicalUsed: "50g/l Imidacloprid & 25g/1 Beta-Cyfluthrin" } },
	{ value: "country-bifenthrin-100SC", label: "Country Bifenthrin 100SC", config: { chemicalUsed: "Bifenthrin 100g/L" } },
	{ value: "dragon-dust", label: "Dragnet Dust", config: { chemicalUsed: "20g/kg Permethrin & 5g/kg Triflumuron" } },
	{ value: "seclira-wsg", label: "Seclira WSG", config: { chemicalUsed: "400g/kg Dinotefuran" } },
	{ value: "contrac-blox", label: "Contrac Blox", config: { chemicalUsed: "0.005% Bromadiolone" } },
];

const unitOptions = [
	{ value: "ml", label: "ml" },
	{ value: "l", label: "l" },
	{ value: "g", label: "g" },
	{ value: "kg", label: "kg" },
	{ value: "oz", label: "oz" },
];

const defaultFormData: PesticideApplicationDetailsData = {
	areasCovered: [],
	pesticide: "",
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
};

// Database type for pesticide applications
interface PesticideApplicationDB {
	id: string;
	service_report_id: string;
	areas_covered: string[] | null;
	pesticides: string[] | null;
	batch: string | null;
	raw_amount: number | null;
	raw_amount_unit: string | null;
	applied_amount: number | null;
	applied_amount_unit: string | null;
	chemical_used: string | null;
	mixed_rate: number | null;
	mixed_rate_unit: string | null;
	default_unit: number | null;
	default_unit_unit: string | null;
	created_at: string;
	updated_at: string | null;
}

// Transform database data to form data format
const transformDBToFormData = (dbData: PesticideApplicationDB): PesticideApplicationDetailsData => {
	return {
		areasCovered: dbData.areas_covered || [],
		pesticide: dbData.pesticides && dbData.pesticides.length > 0 ? dbData.pesticides[0] : "",
		batch: dbData.batch || "",
		rawAmount: dbData.raw_amount !== null ? String(dbData.raw_amount) : "",
		rawAmountUnit: dbData.raw_amount_unit || "",
		appliedAmount: dbData.applied_amount !== null ? String(dbData.applied_amount) : "",
		appliedAmountUnit: dbData.applied_amount_unit || "",
		chemicalUsed: dbData.chemical_used || "",
		mixedRate: dbData.mixed_rate !== null ? String(dbData.mixed_rate) : "",
		mixedRateUnit: dbData.mixed_rate_unit || "",
		defaultUnit: dbData.default_unit !== null ? String(dbData.default_unit) : "",
		defaultUnitUnit: dbData.default_unit_unit || "",
	};
};

const PesticideApplicationDetails: React.FC = () => {
	const { data, loading } = useServiceReport();
	const { showMessage } = useFlashMessage();
	const [formDataArray, setFormDataArray] = useState<PesticideApplicationDetailsData[]>([{ ...defaultFormData }]);
	const [isLoading, setIsLoading] = useState(false);

	// Fetch pesticide applications when service report data is loaded
	useEffect(() => {
		const fetchPesticideApplications = async () => {
			if (!data?.id) {
				// If no service report ID, keep default empty form
				return;
			}

			setIsLoading(true);

			try {
				const response = await fetch(`/api/service-report/${data.id}/pesticide-application`);
				const result = await response.json();

				if (!response.ok) {
					throw new Error(result.error || "Failed to fetch pesticide applications");
				}

				if (result.success && result.data) {
					// Transform database data to form data
					if (result.data.length > 0) {
						const transformedData = result.data.map((dbItem: PesticideApplicationDB) => transformDBToFormData(dbItem));
						setFormDataArray(transformedData);
					} else {
						// No data found, keep default empty form
						setFormDataArray([{ ...defaultFormData }]);
					}
				}
			} catch (error) {
				console.error("Error fetching pesticide applications:", error);
				// On error, keep default empty form
				setFormDataArray([{ ...defaultFormData }]);
			} finally {
				setIsLoading(false);
			}
		};

		if (!loading && data) {
			fetchPesticideApplications();
		}
	}, [data, loading]);

	const handleAddNewArea = () => {
		setFormDataArray((prev) => [...prev, { ...defaultFormData }]);
	};

	const handleRemoveArea = (index: number) => {
		if (formDataArray.length > 1) {
			setFormDataArray((prev) => prev.filter((_, i) => i !== index));
		}
	};

	const handleInputChange = <
		K extends keyof Pick<PesticideApplicationDetailsData, "batch" | "rawAmount" | "appliedAmount" | "chemicalUsed" | "mixedRate">,
	>(
		index: number,
		field: K,
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setFormDataArray((prev) => prev.map((data, i) => (i === index ? { ...data, [field]: event.target.value } : data)));
	};

	const handleSelectChange = <
		K extends keyof Pick<PesticideApplicationDetailsData, "rawAmountUnit" | "appliedAmountUnit" | "mixedRateUnit" | "pesticide">,
	>(
		index: number,
		field: K,
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		setFormDataArray((prev) => {
			return prev.map((data, i) => {
				if (i === index) {
					const updatedData = { ...data, [field]: event.target.value };

					// Auto-fill chemicalUsed when pesticide is selected
					if (field === "pesticide") {
						const selectedValue = event.target.value;
						if (selectedValue) {
							const option = pesticideOptions.find((opt) => opt.value === selectedValue);
							// Handle both chemicalUsed and chemichalUsed (typo) for backward compatibility
							const chemicalUsed = option?.config?.chemicalUsed || option?.config?.chemicalUsed || "";
							updatedData.chemicalUsed = chemicalUsed;
						} else {
							// Clear chemicalUsed if no pesticide is selected
							updatedData.chemicalUsed = "";
						}
					}

					return updatedData;
				}
				return data;
			});
		});
	};

	const handleMultipleSelectChange = <K extends keyof Pick<PesticideApplicationDetailsData, "areasCovered">>(
		index: number,
		field: K,
		values: string[],
	) => {
		setFormDataArray((prev) => prev.map((data, i) => (i === index ? { ...data, [field]: values } : data)));
	};

	// Check if a single form data object has at least one field with a value
	const hasAnyFieldValue = (formData: PesticideApplicationDetailsData): boolean => {
		return (
			(formData.areasCovered?.length ?? 0) > 0 ||
			(formData.pesticide?.trim() ?? "") !== "" ||
			(formData.batch?.trim() ?? "") !== "" ||
			(formData.rawAmount?.trim() ?? "") !== "" ||
			(formData.rawAmountUnit?.trim() ?? "") !== "" ||
			(formData.appliedAmount?.trim() ?? "") !== "" ||
			(formData.appliedAmountUnit?.trim() ?? "") !== "" ||
			(formData.chemicalUsed?.trim() ?? "") !== "" ||
			(formData.mixedRate?.trim() ?? "") !== "" ||
			(formData.mixedRateUnit?.trim() ?? "") !== "" ||
			(formData.defaultUnit?.trim() ?? "") !== "" ||
			(formData.defaultUnitUnit?.trim() ?? "") !== ""
		);
	};

	const handleSaveChanges = async () => {
		// Check if form is invalid (empty array or not all items have at least one field with a value)
		const isInvalid = formDataArray.length === 0 || !formDataArray.every((formData) => hasAnyFieldValue(formData));
		if (isInvalid) {
			showMessage("Please fill in at least one field in all pesticide application entries", "error");
			return;
		}

		if (!data?.id) {
			showMessage("Service report ID is missing. Please try again.", "error");
			return;
		}

		setIsLoading(true);

		try {
			const response = await fetch(`/api/service-report/${data.id}/pesticide-application`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					applications: formDataArray,
				}),
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || "Failed to save pesticide applications");
			}

			if (result.success) {
				showMessage("Pesticide applications saved successfully", "success");

				// Update form data with the saved data (including IDs if returned)
				if (result.data && result.data.length > 0) {
					const transformedData = result.data.map((dbItem: PesticideApplicationDB) => transformDBToFormData(dbItem));
					setFormDataArray(transformedData);
				}
			}
		} catch (error) {
			console.error("Error saving pesticide applications:", error);
			showMessage(error instanceof Error ? error.message : "Failed to save pesticide applications. Please try again.", "error");
		} finally {
			setIsLoading(false);
		}
	};

	const Separator = () => (
		<div className={styles.separator}>
			<svg width="1296" height="47" viewBox="0 0 1296 47" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 22H1296V25H0V22Z" fill="#dcdcdc" />
				{/* <path
					d="M671 23.5C671 36.4787 660.479 47 647.5 47C634.521 47 624 36.4787 624 23.5C624 10.5213 634.521 0 647.5 0C660.479 0 671 10.5213 671 23.5Z"
					fill="#134021"
				/> */}
			</svg>
		</div>
	);

	return (
		<>
			{formDataArray.map((formData, index) => (
				<div style={{ width: "100%" }} key={index}>
					{index > 0 && <Separator />}
					<div className={styles.sectionWrapper}>
						{formDataArray.length > 1 && index > 0 && (
							<div className={styles.sectionHeader}>
								<span className={styles.sectionTag}>Section {index + 1}</span>
								{index > 0 && (
									<button
										type="button"
										onClick={() => handleRemoveArea(index)}
										className={styles.removeButton}
										aria-label="Remove section">
										<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<span className={styles.removeText}>Remove</span>
									</button>
								)}
							</div>
						)}
						<div className={styles.fieldsContainer}>
							{/* Row 1 */}
							<div className={styles.row}>
								<div className={styles.field}>
									<Select
										label="Areas covered"
										options={areaOptions}
										isMultipleSelect={true}
										multipleValue={formData.areasCovered}
										onMultipleChange={(values) => handleMultipleSelectChange(index, "areasCovered", values)}
										placeholder="Select areas"
									/>
								</div>
								<div className={styles.field}>
									<Select
										label="Pesticide"
										options={pesticideOptions}
										value={formData.pesticide}
										onChange={(e) => handleSelectChange(index, "pesticide", e)}
										placeholder="Select pesticide"
									/>
								</div>
								<div className={styles.field}>
									<Input
										label="Batch"
										variant="text"
										type="text"
										value={formData.batch}
										onChange={(e) => handleInputChange(index, "batch", e)}
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
											onChange={(e) => handleInputChange(index, "rawAmount", e)}
											placeholder="Enter amount"
											className={styles.hideLabel}
										/>
									}
									unitField={
										<Select
											label=""
											options={unitOptions}
											value={formData.rawAmountUnit}
											onChange={(e) => handleSelectChange(index, "rawAmountUnit", e)}
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
											onChange={(e) => handleInputChange(index, "appliedAmount", e)}
											placeholder="Enter amount"
											className={styles.hideLabel}
										/>
									}
									unitField={
										<Select
											label=""
											options={unitOptions}
											value={formData.appliedAmountUnit}
											onChange={(e) => handleSelectChange(index, "appliedAmountUnit", e)}
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
										onChange={(e) => handleInputChange(index, "chemicalUsed", e)}
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
											onChange={(e) => handleInputChange(index, "mixedRate", e)}
											placeholder="Enter rate"
											className={styles.hideLabel}
										/>
									}
									unitField={
										<Select
											label=""
											options={unitOptions}
											value={formData.mixedRateUnit}
											onChange={(e) => handleSelectChange(index, "mixedRateUnit", e)}
											placeholder="Unit"
											variant="primary"
											className={styles.hideLabel}
										/>
									}
									className={styles.field}
								/>
							</div>
						</div>
					</div>
				</div>
			))}

			<div className={styles.addNewArea} onClick={handleAddNewArea} style={{ cursor: "pointer" }}>
				<svg width="1296" height="47" viewBox="0 0 1296 47" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 22H1296V25H0V22Z" fill="#134021" />
					<path
						d="M671 23.5C671 36.4787 660.479 47 647.5 47C634.521 47 624 36.4787 624 23.5C624 10.5213 634.521 0 647.5 0C660.479 0 671 10.5213 671 23.5Z"
						fill="#134021"
					/>
					<path
						d="M649.359 22.6866H655V25.3711H649.359V31H646.612V25.3711H641V22.6866H646.612V17H649.359V22.6866Z"
						fill="white"
					/>
				</svg>
			</div>

			<div className={styles.buttonsWrapper}>
				{/* <Button variant="light" title="Sheets" onPress={() => {}} className={styles.sheetsButton} /> */}
				<Button
					variant="primary"
					title="Save Changes"
					onPress={handleSaveChanges}
					className={pageStyles.saveButton}
					isLoading={isLoading}
					disabled={isLoading}
				/>
			</div>
		</>
	);
};

export default PesticideApplicationDetails;

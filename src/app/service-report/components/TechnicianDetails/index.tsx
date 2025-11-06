"use client";

import { useState, useEffect, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Input } from "../../../components/ReportForm";
import Button from "../../../components/Button";
import pageStyles from "../../style.module.css";
import { useServiceReport } from "../../context/ServiceReportContext";
import { useFlashMessage } from "../../../components/FlashMessage";
import inputStyles from "../../../components/ReportForm/Input/Input.module.css";
import styles from "./TechnicianDetails.module.css";

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
	const signatureCanvasRef = useRef<SignatureCanvas>(null);
	const signatureWrapperRef = useRef<HTMLDivElement>(null);
	const [canvasSize, setCanvasSize] = useState({ width: 500, height: 200 });

	// Set canvas size based on container width
	useEffect(() => {
		const updateCanvasSize = () => {
			if (signatureWrapperRef.current) {
				const width = signatureWrapperRef.current.offsetWidth;
				setCanvasSize({ width, height: 200 });
			}
		};

		updateCanvasSize();
		window.addEventListener("resize", updateCanvasSize);
		return () => window.removeEventListener("resize", updateCanvasSize);
	}, []);

	// Initialize form data from context when data is loaded
	useEffect(() => {
		if (data) {
			setFormData({
				name: data.technician_name || "",
				licence: data.technician_licence || "",
				signature: data.technician_signature || "",
			});
			// Load signature into canvas if it exists
			if (data.technician_signature && signatureCanvasRef.current) {
				const canvas = signatureCanvasRef.current;
				const img = new Image();

				// Set crossOrigin to prevent canvas tainting when loading from external URLs
				// If it's a data URL, crossOrigin is not needed
				if (!data.technician_signature.startsWith("data:")) {
					img.crossOrigin = "anonymous";
				}

				img.onload = () => {
					const ctx = canvas.getCanvas().getContext("2d");
					if (ctx) {
						canvas.clear();
						ctx.drawImage(img, 0, 0, canvasSize.width, canvasSize.height);
					}
				};

				img.onerror = (error) => {
					console.error("Failed to load signature image:", error);
					// If loading fails (e.g., CORS issue), clear the canvas
					canvas.clear();
					setFormData((prev) => ({
						...prev,
						signature: "",
					}));
				};

				img.src = data.technician_signature;
			} else if (signatureCanvasRef.current) {
				signatureCanvasRef.current.clear();
			}
		}
	}, [data, canvasSize]);

	const handleInputChange = (field: keyof TechnicianDetailsData) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({
			...prev,
			[field]: event.target.value,
		}));
	};

	const handleSignatureEnd = () => {
		if (signatureCanvasRef.current) {
			const signatureData = signatureCanvasRef.current.toDataURL("image/png");
			setFormData((prev) => ({
				...prev,
				signature: signatureData,
			}));
		}
	};

	const handleClearSignature = () => {
		if (signatureCanvasRef.current) {
			signatureCanvasRef.current.clear();
			setFormData((prev) => ({
				...prev,
				signature: "",
			}));
		}
	};

	// Helper function to convert base64 data URL to File
	const base64ToFile = (base64String: string, fileName: string): File => {
		// Remove data URL prefix (e.g., "data:image/png;base64,")
		const base64Data = base64String.split(",")[1] || base64String;
		const mimeMatch = base64String.match(/data:([^;]+);base64/);
		const mimeType = mimeMatch ? mimeMatch[1] : "image/png";

		// Convert base64 to binary
		const byteCharacters = atob(base64Data);
		const byteNumbers = new Array(byteCharacters.length);
		for (let i = 0; i < byteCharacters.length; i++) {
			byteNumbers[i] = byteCharacters.charCodeAt(i);
		}
		const byteArray = new Uint8Array(byteNumbers);
		const blob = new Blob([byteArray], { type: mimeType });

		return new File([blob], fileName, { type: mimeType });
	};

	const handleSaveChanges = async () => {
		if (!data?.id) {
			showMessage("Error: Service report ID not found", "error");
			return;
		}

		// Validate all fields are required
		if (!formData.name || !formData.licence || !formData.signature) {
			showMessage("All fields are required", "error");
			return;
		}

		setIsLoading(true);

		try {
			let signatureUrl = formData.signature;
			const oldSignaturePath = data.technician_signature;

			// If signature is a base64 data URL, upload it to Supabase storage
			if (formData.signature.startsWith("data:image/")) {
				// Convert base64 to File
				const signatureFile = base64ToFile(formData.signature, `signature-${data.id}.png`);

				// Upload signature to Supabase storage
				const uploadFormData = new FormData();
				uploadFormData.append("file", signatureFile);
				uploadFormData.append("folder", "signatures");

				const uploadResponse = await fetch("/api/upload", {
					method: "POST",
					body: uploadFormData,
				});

				const uploadResult = await uploadResponse.json();

				if (!uploadResponse.ok) {
					throw new Error(uploadResult.error || "Failed to upload signature");
				}

				if (uploadResult.success && uploadResult.url) {
					signatureUrl = uploadResult.url;

					// Delete old signature if it exists and is different from the new one
					if (oldSignaturePath && oldSignaturePath !== signatureUrl && oldSignaturePath.startsWith("http")) {
						try {
							// Extract file path from public URL
							// URL format: https://[project].supabase.co/storage/v1/object/public/ecovia/signatures/filename.png
							// We need: signatures/filename.png
							const urlObj = new URL(oldSignaturePath);
							const pathMatch = urlObj.pathname.match(/\/storage\/v1\/object\/public\/ecovia\/(.+)$/);
							if (pathMatch && pathMatch[1]) {
								const filePath = pathMatch[1];
								await fetch("/api/upload", {
									method: "DELETE",
									headers: {
										"Content-Type": "application/json",
									},
									body: JSON.stringify({ path: filePath }),
								});
							}
						} catch (deleteError) {
							// Log error but don't fail the entire operation if deletion fails
							console.error("Failed to delete old signature:", deleteError);
						}
					}
				} else {
					throw new Error("Invalid upload response");
				}
			}
			// If signature is already a URL (from previous upload), use it as is

			const updatePayload = {
				technician_name: formData.name || null,
				technician_licence: formData.licence || null,
				technician_signature: signatureUrl || null,
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

	// Check if all required fields are filled
	const areAllFieldsFilled = formData.name && formData.licence && formData.signature;

	// Check if formData is the same as data
	const isFormDataSameAsData = data
		? formData.name === (data.technician_name || "") &&
			formData.licence === (data.technician_licence || "") &&
			formData.signature === (data.technician_signature || "")
		: false;

	// Disable button if not all fields are filled OR if formData is same as data
	const isButtonDisabled = !areAllFieldsFilled || isFormDataSameAsData;

	return (
		<>
			<div className={styles.fieldsWrapper}>
				<Input
					label="Name *"
					variant="text"
					value={formData.name}
					onChange={handleInputChange("name")}
					placeholder="Enter name"
					className={styles.field}
				/>
				<Input
					label="Licence *"
					variant="text"
					value={formData.licence}
					onChange={handleInputChange("licence")}
					placeholder="Enter licence"
					className={styles.field}
				/>
				<div className={`${styles.field} ${inputStyles.field} ${styles.signatureField}`}>
					<label className={`${inputStyles.label}`}>
						Signature <span className={inputStyles.required}>*</span>
					</label>
					<div ref={signatureWrapperRef} className={`${inputStyles.inputWrapper} ${styles.signatureCanvasWrapper}`}>
						<SignatureCanvas
							ref={signatureCanvasRef}
							canvasProps={{
								className: styles.signatureCanvas,
								width: canvasSize.width,
								height: canvasSize.height,
							}}
							onEnd={handleSignatureEnd}
						/>
						{formData.signature && (
							<button
								type="button"
								onClick={handleClearSignature}
								className={styles.clearSignatureButton}
								aria-label="Clear signature">
								Clear
							</button>
						)}
					</div>
				</div>
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

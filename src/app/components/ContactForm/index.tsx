"use client";

import React, { useState, useRef } from "react";
import { useFlashMessage } from "../FlashMessage";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import styles from "./ContactForm.module.css";
import { services } from "@/app/constants/services";

interface ContactFormProps {
	onSubmit?: (formData: ContactFormData) => void;
	className?: string;
}

export interface ContactFormData {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	service: string;
	date: string;
	location: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, className = "" }) => {
	const formRef = useRef<HTMLFormElement>(null);
	const { showMessage } = useFlashMessage();
	const [formData, setFormData] = useState<ContactFormData>({
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		service: "",
		date: "",
		location: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleInputChange = (field: keyof ContactFormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;
		setFormData((prev) => ({ ...prev, service: value }));
	};

	const selectOptions = services.map((service) => ({
		value: service.title,
		label: service.title,
	}));

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		const isRequiredFieldMissing =
			!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.phoneNumber.trim();

		if (isRequiredFieldMissing) {
			showMessage("Please fill in all required fields.", "error");
			return;
		}

		// Email format validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email.trim())) {
			showMessage("Please enter a valid email address", "error");
			return;
		}

		setIsSubmitting(true);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || "Failed to submit form. Please try again.");
			}

			showMessage("Thank you! Your consultation request has been submitted successfully.", "success");

			// Call optional onSubmit callback before clearing form
			if (onSubmit) {
				onSubmit(formData);
			}

			// Clear form after successful submission
			setFormData({
				firstName: "",
				lastName: "",
				phoneNumber: "",
				email: "",
				service: "",
				date: "",
				location: "",
			});
		} catch (error) {
			console.error("Error submitting form:", error);
			showMessage(error instanceof Error ? error.message : "Failed to submit form. Please try again.", "error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className={`${styles.form} ${className}`}>
			<h2 className={styles.title}>Book a free consultation</h2>

			<form ref={formRef} onSubmit={handleSubmit} className={styles.formContainer}>
				<div className={styles.formGrid}>
					{/* First Row */}
					<div className={styles.formRow}>
						<Input
							label="First name *"
							type="text"
							value={formData.firstName}
							onChange={handleInputChange("firstName")}
							className={styles.inputField}
						/>
						<Input
							label="Last name *"
							type="text"
							value={formData.lastName}
							onChange={handleInputChange("lastName")}
							className={styles.inputField}
						/>
					</div>

					{/* Second Row */}
					<div className={styles.formRow}>
						<Input
							label="Phone number *"
							type="tel"
							value={formData.phoneNumber}
							onChange={handleInputChange("phoneNumber")}
							className={styles.inputField}
						/>
						<Input
							label="Email *"
							type="email"
							value={formData.email}
							onChange={handleInputChange("email")}
							className={styles.inputField}
						/>
					</div>

					{/* Third Row */}
					<div className={styles.formRow}>
						<Select
							label="Select service *"
							options={selectOptions}
							value={formData.service}
							onChange={handleSelectChange}
							placeholder="Choose service"
							className={styles.inputField}
						/>
						<Input
							label="Date"
							type="date"
							value={formData.date}
							onChange={handleInputChange("date")}
							className={styles.inputField}
							min={new Date().toISOString().split("T")[0]}
							placeholder="Choose date"
						/>
					</div>

					{/* Fourth Row - Full Width */}
					<div className={styles.formRow}>
						<Input
							label="Location"
							type="text"
							value={formData.location}
							onChange={handleInputChange("location")}
							className={styles.fullWidthField}
						/>
					</div>
				</div>

				<div className={styles.submitContainer}>
					<Button
						variant="primary"
						title="Contact us"
						onPress={() => formRef.current?.requestSubmit()}
						isLoading={isSubmitting}
						disabled={isSubmitting}
					/>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;

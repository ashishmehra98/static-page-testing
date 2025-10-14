"use client";

import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import styles from "./ContactForm.module.css";

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
	const [formData, setFormData] = useState<ContactFormData>({
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		service: "",
		date: "",
		location: "",
	});

	const handleInputChange = (field: keyof ContactFormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (onSubmit) {
			onSubmit(formData);
		}
	};

	return (
		<div className={`${styles.form} ${className}`}>
			<h2 className={styles.title}>Book a free consultation</h2>

			<form onSubmit={handleSubmit} className={styles.formContainer}>
				<div className={styles.formGrid}>
					{/* First Row */}
					<div className={styles.formRow}>
						<Input
							label="First name"
							type="text"
							value={formData.firstName}
							onChange={handleInputChange("firstName")}
							className={styles.inputField}
						/>
						<Input
							label="Last name"
							type="text"
							value={formData.lastName}
							onChange={handleInputChange("lastName")}
							className={styles.inputField}
						/>
					</div>

					{/* Second Row */}
					<div className={styles.formRow}>
						<Input
							label="Phone number"
							type="tel"
							value={formData.phoneNumber}
							onChange={handleInputChange("phoneNumber")}
							className={styles.inputField}
						/>
						<Input
							label="Email"
							type="email"
							value={formData.email}
							onChange={handleInputChange("email")}
							className={styles.inputField}
						/>
					</div>

					{/* Third Row */}
					<div className={styles.formRow}>
						<Input
							label="Select service"
							type="text"
							value={formData.service}
							onChange={handleInputChange("service")}
							className={styles.inputField}
						/>
						<Input
							label="Date"
							type="date"
							value={formData.date}
							onChange={handleInputChange("date")}
							className={styles.inputField}
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
					<Button variant="primary" title="Contact us" onPress={() => {}} />
				</div>
			</form>
		</div>
	);
};

export default ContactForm;

"use client";

import React, { forwardRef } from "react";
import styles from "./Input.module.css";

interface InputProps {
	label: string;
	type?: "text" | "email" | "password" | "number" | "tel" | "date";
	placeholder?: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
	required?: boolean;
	error?: string;
	className?: string;
	min?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{ label, type = "text", placeholder, value, onChange, disabled = false, required = false, error, className = "", min },
		ref,
	) => {
		const isEmpty = !value || value === "";
		const isDateType = type === "date";
		const showDatePlaceholder = isDateType && isEmpty && placeholder;

		return (
			<div className={`${styles.field} ${className}`}>
				<label className={styles.label}>
					{label}
					{required && <span className={styles.required}>*</span>}
				</label>
				<div className={styles.inputWrapper}>
					<input
						ref={ref}
						type={type}
						placeholder={isDateType ? undefined : placeholder}
						value={value}
						onChange={onChange}
						disabled={disabled}
						required={required}
						min={min}
						className={`${styles.input} ${error ? styles.error : ""} ${disabled ? styles.disabled : ""} ${isDateType && isEmpty ? styles.dateEmpty : ""}`}
						aria-invalid={!!error}
						aria-describedby={error ? `${label}-error` : ""}
					/>
					{showDatePlaceholder && (
						<span className={styles.datePlaceholder} aria-hidden="true">
							{placeholder}
						</span>
					)}
				</div>
				{error && (
					<span id={`${label}-error`} className={styles.errorMessage} role="alert">
						{error}
					</span>
				)}
			</div>
		);
	},
);

Input.displayName = "Input";

export default Input;

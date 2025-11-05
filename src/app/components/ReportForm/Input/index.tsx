"use client";

import React, { forwardRef, useId } from "react";
import styles from "./Input.module.css";

type InputVariant = "time" | "text" | "date";

interface InputProps {
	label?: string;
	variant?: InputVariant;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
	required?: boolean;
	error?: string;
	className?: string;
	placeholder?: string;
	name?: string;
	type?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			label,
			variant = "text",
			value,
			onChange,
			disabled = false,
			required = false,
			error,
			className = "",
			placeholder,
			name,
			type,
		},
		ref,
	) => {
		const inputId = useId();
		const isEmpty = !value || value === "";

		// Determine input type based on variant
		const inputType = type || (variant === "time" ? "time" : variant === "date" ? "date" : "text");

		// Format the time value for display (HH:MM AM/PM) - only for time variant
		const formatTimeForDisplay = (timeValue: string) => {
			if (!timeValue || variant !== "time") return "";
			// If it's in 24-hour format, convert to 12-hour
			const [hours, minutes] = timeValue.split(":");
			if (!hours || !minutes) return timeValue;
			const hour24 = parseInt(hours, 10);
			const hour12 = hour24 === 0 ? 12 : hour24 > 12 ? hour24 - 12 : hour24;
			const ampm = hour24 >= 12 ? "PM" : "AM";
			return `${hour12}:${minutes} ${ampm}`;
		};

		// Format the date value for display (MM/DD/YYYY) - only for date variant
		const formatDateForDisplay = (dateValue: string) => {
			if (!dateValue || variant !== "date") return "";
			try {
				// Date input format is YYYY-MM-DD
				const [year, month, day] = dateValue.split("-");
				if (!year || !month || !day) return dateValue;
				return `${month}/${day}/${year}`;
			} catch {
				return dateValue;
			}
		};

		const displayValue =
			variant === "time"
				? formatTimeForDisplay(value || "")
				: variant === "date"
					? formatDateForDisplay(value || "")
					: value || "";

		const showPlaceholder = isEmpty && placeholder;
		const showDisplayValue = !isEmpty && (variant === "time" || variant === "date");

		return (
			<div className={`${styles.field} ${className}`}>
				{label && (
					<label htmlFor={inputId} className={`${styles.label} ${disabled ? styles.disabledLabel : ""}`}>
						{label}
						{required && <span className={styles.required}>*</span>}
					</label>
				)}
				<div
					className={`${styles.inputWrapper} ${error ? styles.error : ""} ${styles[variant]} ${disabled ? styles.disabledWrapper : ""}`}>
					<input
						ref={ref}
						id={inputId}
						type={inputType}
						value={value}
						onChange={onChange}
						disabled={disabled}
						required={required}
						name={name}
						placeholder={variant === "text" ? placeholder : undefined}
						className={`${styles.input} ${error ? styles.error : ""} ${disabled ? styles.disabled : ""} ${isEmpty && variant !== "text" ? styles.empty : ""} ${variant === "time" || variant === "date" ? styles.pickerInput : ""}`}
						aria-invalid={!!error}
						aria-describedby={error ? `${inputId}-error` : ""}
					/>
					{showPlaceholder && variant !== "text" && (
						<span className={styles.placeholder} aria-hidden="true">
							{placeholder}
						</span>
					)}
					{showDisplayValue && (
						<span className={styles.displayValue} aria-hidden="true">
							{displayValue}
						</span>
					)}
					{variant === "time" && (
						<div className={styles.icon}>
							<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="6.5" cy="6.5" r="6" stroke="rgba(19,64,33,0.8)" strokeWidth="1" fill="none" />
								<path
									d="M6.5 3.5V6.5L8.5 8.5"
									stroke="rgba(19,64,33,0.8)"
									strokeWidth="1"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					)}
					{variant === "date" && (
						<div className={styles.icon}>
							<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M0 2.4C0 1.2684 -3.57628e-08 0.7032 0.3516 0.3516C0.7032 -3.57628e-08 1.2684 0 2.4 0H9.6C10.7316 0 11.2968 -3.57628e-08 11.6484 0.3516C12 0.7032 12 1.2684 12 2.4C12 2.6826 12 2.8242 11.9124 2.9124C11.8242 3 11.682 3 11.4 3H0.6C0.3174 3 0.1758 3 0.0875999 2.9124C-5.36442e-08 2.8242 0 2.682 0 2.4ZM0 7.8C0 8.9316 -3.57628e-08 9.4968 0.3516 9.8484C0.7032 10.2 1.2684 10.2 2.4 10.2H9.6C10.7316 10.2 11.2968 10.2 11.6484 9.8484C12 9.4968 12 8.9316 12 7.8V4.8C12 4.5174 12 4.3758 11.9124 4.2876C11.8242 4.2 11.682 4.2 11.4 4.2H0.6C0.3174 4.2 0.1758 4.2 0.0875999 4.2876C-5.36442e-08 4.3758 0 4.518 0 4.8V7.8Z"
									fill="#134021"
								/>
							</svg>
						</div>
					)}
				</div>
				{error && (
					<span id={`${inputId}-error`} className={styles.errorMessage} role="alert">
						{error}
					</span>
				)}
			</div>
		);
	},
);

Input.displayName = "Input";

export default Input;

"use client";

import React, { forwardRef, useId } from "react";
import styles from "./Radio.module.css";

interface RadioOption {
	value: string;
	label: string;
}

interface RadioProps {
	label?: string;
	options: RadioOption[];
	value?: string;
	onChange?: (value: string) => void;
	disabled?: boolean;
	required?: boolean;
	error?: string;
	className?: string;
	name?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
	({ label, options, value, onChange, disabled = false, required = false, error, className = "", name }, ref) => {
		const fieldId = useId();

		const handleChange = (optionValue: string) => {
			if (!disabled && onChange) {
				onChange(optionValue);
			}
		};

		return (
			<div className={`${styles.field} ${className}`}>
				{label && (
					<label className={`${styles.label} ${disabled ? styles.disabledLabel : ""}`}>
						{label}
						{required && <span className={styles.required}>*</span>}
					</label>
				)}
				<div className={`${styles.radioGroup} ${error ? styles.error : ""} ${disabled ? styles.disabledWrapper : ""}`}>
					{options.map((option) => {
						const isChecked = value === option.value;
						const optionId = `${fieldId}-${option.value}`;
						return (
							<div
								key={option.value}
								className={`${styles.radioOption} ${disabled ? styles.disabled : ""}`}
								onClick={() => handleChange(option.value)}
								role="radio"
								tabIndex={disabled ? -1 : 0}
								onKeyDown={(e) => {
									if ((e.key === "Enter" || e.key === " ") && !disabled) {
										e.preventDefault();
										handleChange(option.value);
									}
								}}
								aria-checked={isChecked}
								aria-disabled={disabled}>
								<div className={styles.radio}>
									<input
										ref={ref}
										type="radio"
										id={optionId}
										name={name || fieldId}
										value={option.value}
										checked={isChecked}
										onChange={() => handleChange(option.value)}
										disabled={disabled}
										required={required && !value}
										className={styles.radioInput}
										aria-invalid={!!error}
										aria-describedby={error ? `${fieldId}-error` : ""}
									/>
									{isChecked ? (
										<svg
											className={styles.radioIcon}
											width="18"
											height="18"
											viewBox="0 0 18 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<circle cx="9" cy="9" r="8" fill="rgba(19,64,33,0.8)" stroke="rgba(19,64,33,0.8)" strokeWidth="2" />
											<circle cx="9" cy="9" r="4" fill="white" />
										</svg>
									) : (
										<svg
											className={styles.radioIcon}
											width="18"
											height="18"
											viewBox="0 0 18 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<circle cx="9" cy="9" r="8" fill="none" stroke="rgba(19,64,33,0.44)" strokeWidth="2" />
										</svg>
									)}
								</div>
								<label htmlFor={optionId} className={styles.radioLabel}>
									{option.label}
								</label>
							</div>
						);
					})}
				</div>
				{error && (
					<span id={`${fieldId}-error`} className={styles.errorMessage} role="alert">
						{error}
					</span>
				)}
			</div>
		);
	},
);

Radio.displayName = "Radio";

export default Radio;

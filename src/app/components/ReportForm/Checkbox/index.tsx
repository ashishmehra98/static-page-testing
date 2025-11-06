"use client";

import React, { forwardRef, useId } from "react";
import styles from "./Checkbox.module.css";

interface CheckboxOption {
	value: string;
	label: string;
}

interface CheckboxProps {
	label?: string;
	options: CheckboxOption[];
	value?: string;
	onChange?: (value: string) => void;
	disabled?: boolean;
	required?: boolean;
	error?: string;
	className?: string;
	name?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ label, options, value, onChange, disabled = false, required = false, error, className = "", name }, ref) => {
		const fieldId = useId();

		const handleChange = (optionValue: string) => {
			if (!disabled && onChange) {
				onChange(optionValue);
			}
		};

		const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement>, optionValue: string) => {
			// Don't handle if the click originated from the label (let htmlFor handle it)
			if ((e.target as HTMLElement).tagName === "LABEL" || (e.target as HTMLElement).closest("label")) {
				return;
			}
			// Don't handle if the click originated from the input (let onChange handle it)
			if ((e.target as HTMLElement).tagName === "INPUT") {
				return;
			}
			handleChange(optionValue);
		};

		return (
			<div className={`${styles.field} ${className}`}>
				{label && <label className={`${styles.label} ${disabled ? styles.disabledLabel : ""}`}>{label} *</label>}
				<div className={`${styles.checkboxGroup} ${error ? styles.error : ""} ${disabled ? styles.disabledWrapper : ""}`}>
					{options.map((option) => {
						const isChecked = value === option.value;
						const optionId = `${fieldId}-${option.value}`;
						return (
							<div
								key={option.value}
								className={`${styles.checkboxOption} ${disabled ? styles.disabled : ""}`}
								onClick={(e) => handleWrapperClick(e, option.value)}
								role="button"
								tabIndex={disabled ? -1 : 0}
								onKeyDown={(e) => {
									if ((e.key === "Enter" || e.key === " ") && !disabled) {
										e.preventDefault();
										handleChange(option.value);
									}
								}}
								aria-checked={isChecked}
								aria-disabled={disabled}>
								<div className={styles.checkbox}>
									<input
										ref={ref}
										type="checkbox"
										id={optionId}
										name={name || fieldId}
										checked={isChecked}
										onChange={(e) => {
											e.stopPropagation();
											handleChange(option.value);
										}}
										onClick={(e) => e.stopPropagation()}
										disabled={disabled}
										required={required && !value}
										className={styles.checkboxInput}
										aria-invalid={!!error}
										aria-describedby={error ? `${fieldId}-error` : ""}
									/>
									{isChecked ? (
										<svg
											className={styles.checkboxIcon}
											width="18"
											height="18"
											viewBox="0 0 18 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<rect
												x="1"
												y="1"
												width="16"
												height="16"
												rx="2"
												fill="rgba(19,64,33,0.8)"
												stroke="rgba(19,64,33,0.8)"
												strokeWidth="2"
											/>
											<path d="M5 9L8 12L13 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									) : (
										<svg
											className={styles.checkboxIcon}
											width="18"
											height="18"
											viewBox="0 0 18 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<rect x="1" y="1" width="16" height="16" rx="2" fill="none" stroke="rgba(19,64,33,0.44)" strokeWidth="2" />
										</svg>
									)}
								</div>
								<label htmlFor={optionId} className={styles.checkboxLabel}>
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

Checkbox.displayName = "Checkbox";

export default Checkbox;

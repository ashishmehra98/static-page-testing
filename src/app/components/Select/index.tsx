"use client";

import React, { forwardRef } from "react";
import styles from "./Select.module.css";

interface SelectOption {
	value: string;
	label: string;
}

interface SelectProps {
	label: string;
	options: SelectOption[];
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	disabled?: boolean;
	required?: boolean;
	error?: string;
	className?: string;
	placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
	({ label, options, value, onChange, disabled = false, required = false, error, className = "", placeholder }, ref) => {
		return (
			<div className={`${styles.field} ${className}`}>
				<label className={styles.label}>
					{label}
					{required && <span className={styles.required}>*</span>}
				</label>
				<select
					ref={ref}
					value={value}
					onChange={onChange}
					disabled={disabled}
					required={required}
					className={`${styles.select} ${error ? styles.error : ""} ${disabled ? styles.disabled : ""}`}
					aria-invalid={!!error}
					aria-describedby={error ? `${label}-error` : ""}>
					{placeholder && (
						<option value="" disabled>
							{placeholder}
						</option>
					)}
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
				{error && (
					<span id={`${label}-error`} className={styles.errorMessage} role="alert">
						{error}
					</span>
				)}
			</div>
		);
	},
);

Select.displayName = "Select";

export default Select;

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
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, type = "text", placeholder, value, onChange, disabled = false, required = false, error, className = "" }, ref) => {
		return (
			<div className={`${styles.field} ${className}`}>
				<label className={styles.label}>
					{label}
					{required && <span className={styles.required}>*</span>}
				</label>
				<input
					ref={ref}
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					disabled={disabled}
					required={required}
					className={`${styles.input} ${error ? styles.error : ""} ${disabled ? styles.disabled : ""}`}
					aria-invalid={!!error}
					aria-describedby={error ? `${label}-error` : undefined}
				/>
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

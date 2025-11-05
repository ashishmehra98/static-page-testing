"use client";

import React, { forwardRef, useId } from "react";
import styles from "./TextArea.module.css";

interface TextAreaProps {
	label?: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	disabled?: boolean;
	required?: boolean;
	error?: string;
	className?: string;
	placeholder?: string;
	name?: string;
	maxLength?: number;
	minLength?: number;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	(
		{
			label,
			value = "",
			onChange,
			disabled = false,
			required = false,
			error,
			className = "",
			placeholder,
			name,
			maxLength = 1000,
			minLength = 500,
		},
		ref,
	) => {
		const textareaId = useId();
		const currentLength = value.length;

		const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
			if (onChange) {
				onChange(event);
			}
		};

		return (
			<div className={`${styles.field} ${className}`}>
				{label && (
					<label htmlFor={textareaId} className={`${styles.label} ${disabled ? styles.disabledLabel : ""}`}>
						{label}
						{required && <span className={styles.required}>*</span>}
					</label>
				)}
				<div className={`${styles.textareaWrapper} ${error ? styles.error : ""} ${disabled ? styles.disabledWrapper : ""}`}>
					<textarea
						ref={ref}
						id={textareaId}
						value={value}
						onChange={handleChange}
						disabled={disabled}
						required={required}
						name={name}
						placeholder={placeholder}
						maxLength={maxLength}
						className={`${styles.textarea} ${error ? styles.error : ""} ${disabled ? styles.disabled : ""}`}
						aria-invalid={!!error}
						aria-describedby={error ? `${textareaId}-error` : ""}
					/>
					<div className={styles.characterCount}>
						{currentLength}/{maxLength} chars
					</div>
				</div>
				{error && (
					<span id={`${textareaId}-error`} className={styles.errorMessage} role="alert">
						{error}
					</span>
				)}
			</div>
		);
	},
);

TextArea.displayName = "TextArea";

export default TextArea;

"use client";

import React, { forwardRef, useId, useState, useRef, useEffect } from "react";
import styles from "./Select.module.css";

interface SelectOption {
	value: string;
	label: string;
}

interface SelectProps {
	label?: string;
	options: SelectOption[];
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	disabled?: boolean;
	required?: boolean;
	error?: string;
	className?: string;
	placeholder?: string;
	name?: string;
	isMultipleSelect?: boolean;
	multipleValue?: string[];
	onMultipleChange?: (values: string[]) => void;
	variant?: "default" | "primary";
	dropdownLayout?: "row" | "column";
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
	(
		{
			label,
			options,
			value,
			onChange,
			disabled = false,
			required = false,
			error,
			className = "",
			placeholder,
			name,
			isMultipleSelect = false,
			multipleValue = [],
			onMultipleChange,
			variant = "default",
			dropdownLayout = "row",
		},
		ref,
	) => {
		const selectId = useId();
		const isEmpty = !value || value === "";
		const hasPlaceholder = !!placeholder;
		const [isOpen, setIsOpen] = useState(false);
		const dropdownRef = useRef<HTMLDivElement>(null);
		const wrapperRef = useRef<HTMLDivElement>(null);

		// Close dropdown when clicking outside
		useEffect(() => {
			const handleClickOutside = (event: MouseEvent) => {
				const target = event.target as Node;
				if (
					isOpen &&
					wrapperRef.current &&
					!wrapperRef.current.contains(target) &&
					dropdownRef.current &&
					!dropdownRef.current.contains(target)
				) {
					setIsOpen(false);
				}
			};

			if (isOpen) {
				// Use click event instead of mousedown to avoid conflicts
				document.addEventListener("click", handleClickOutside, true);
				return () => {
					document.removeEventListener("click", handleClickOutside, true);
				};
			}
		}, [isOpen]);

		const handleToggleDropdown = (e: React.MouseEvent) => {
			e.stopPropagation();
			if (!disabled) {
				setIsOpen((prev) => !prev);
			}
		};

		const handleCheckboxChange = (optionValue: string, event?: React.MouseEvent | React.ChangeEvent<HTMLInputElement>) => {
			if (event) {
				event.stopPropagation();
			}
			if (!onMultipleChange) return;
			const newValues = multipleValue.includes(optionValue)
				? multipleValue.filter((v) => v !== optionValue)
				: [...multipleValue, optionValue];
			onMultipleChange(newValues);
		};

		const getDisplayText = () => {
			if (isMultipleSelect && multipleValue.length > 0) {
				const selectedLabels = multipleValue.map((val) => {
					const option = options.find((opt) => opt.value === val);
					return option ? option.label : val;
				});

				if (selectedLabels.length <= 3) {
					return selectedLabels.join(", ");
				}

				const firstThree = selectedLabels.slice(0, 3).join(", ");
				const remainingCount = selectedLabels.length - 3;
				return `${firstThree} & ${remainingCount} other${remainingCount > 1 ? "s" : ""}`;
			}
			return "";
		};

		const displayText = getDisplayText();
		const hasMultipleValues = isMultipleSelect && multipleValue.length > 0;

		if (isMultipleSelect) {
			return (
				<div className={`${styles.field} ${className}`}>
					{label && (
						<label htmlFor={selectId} className={styles.label}>
							{label}
							{required && <span className={styles.required}>*</span>}
						</label>
					)}
					<div
						className={`${styles.selectWrapper} ${styles[variant]} ${error ? styles.error : ""} ${isOpen ? styles.open : ""}`}
						ref={wrapperRef}>
						<div
							className={`${styles.multipleSelectTrigger} ${styles[`multipleSelectTrigger_${variant}`]} ${error ? styles.error : ""} ${disabled ? styles.disabled : ""} ${!hasMultipleValues && hasPlaceholder ? styles.empty : ""}`}
							onClick={handleToggleDropdown}
							role="button"
							tabIndex={disabled ? -1 : 0}
							aria-expanded={isOpen}
							aria-haspopup="listbox">
							{hasMultipleValues ? (
								<span className={`${styles.multipleSelectDisplay} ${styles[`multipleSelectDisplay_${variant}`]}`}>
									{displayText}
								</span>
							) : (
								placeholder && <span className={`${styles.placeholder} ${styles[`placeholder_${variant}`]}`}>{placeholder}</span>
							)}
							<div className={styles.icon}>
								<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M1 1L6 6L11 1"
										stroke={variant === "primary" ? "white" : "rgba(19,64,33,0.8)"}
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</div>
						{isOpen && (
							<div className={styles.dropdown} ref={dropdownRef} role="listbox">
								<div className={`${styles.dropdownContent} ${styles[`dropdownContent_${dropdownLayout}`]}`}>
									{options.map((option) => {
										const isChecked = multipleValue.includes(option.value);
										return (
											<div
												key={option.value}
												className={styles.checkboxOption}
												onClick={(e) => handleCheckboxChange(option.value, e)}
												role="option"
												aria-selected={isChecked}>
												<div className={styles.checkbox}>
													<input
														type="checkbox"
														id={`${selectId}-${option.value}`}
														checked={isChecked}
														onChange={(e) => {
															e.stopPropagation();
															handleCheckboxChange(option.value, e);
														}}
														onClick={(e) => e.stopPropagation()}
														className={styles.checkboxInput}
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
															<path
																d="M5 9L8 12L13 5"
																stroke="white"
																strokeWidth="2"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
													) : (
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
																fill="none"
																stroke="rgba(19,64,33,0.44)"
																strokeWidth="2"
															/>
														</svg>
													)}
												</div>
												<label
													htmlFor={`${selectId}-${option.value}`}
													className={styles.checkboxLabel}
													onClick={(e) => e.stopPropagation()}>
													{option.label}
												</label>
											</div>
										);
									})}
								</div>
							</div>
						)}
					</div>
					{error && (
						<span id={`${selectId}-error`} className={styles.errorMessage} role="alert">
							{error}
						</span>
					)}
				</div>
			);
		}

		return (
			<div className={`${styles.field} ${className}`}>
				{label && (
					<label htmlFor={selectId} className={styles.label}>
						{label}
						{required && <span className={styles.required}>*</span>}
					</label>
				)}
				<div className={`${styles.selectWrapper} ${styles[variant]} ${error ? styles.error : ""}`}>
					<select
						ref={ref}
						id={selectId}
						value={value || ""}
						onChange={onChange}
						disabled={disabled}
						required={required}
						name={name}
						className={`${styles.select} ${styles[`select_${variant}`]} ${error ? styles.error : ""} ${disabled ? styles.disabled : ""} ${isEmpty && hasPlaceholder ? styles.empty : ""}`}
						aria-invalid={!!error}
						aria-describedby={error ? `${selectId}-error` : ""}>
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
					{isEmpty && hasPlaceholder && (
						<span className={`${styles.placeholder} ${styles[`placeholder_${variant}`]}`} aria-hidden="true">
							{placeholder}
						</span>
					)}
					<div className={styles.icon}>
						<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1 1L6 6L11 1"
								stroke={variant === "primary" ? "white" : "rgba(19,64,33,0.8)"}
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>
				{error && (
					<span id={`${selectId}-error`} className={styles.errorMessage} role="alert">
						{error}
					</span>
				)}
			</div>
		);
	},
);

Select.displayName = "Select";

export default Select;

"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { IconName, ICONS } from "../../constants/icons";
import styles from "./Button.module.css";

interface ButtonProps {
	variant: "primary" | "secondary" | "light";
	title: string;
	onPress: () => void;
	disabled?: boolean;
	isLoading?: boolean;
	icon?: IconName;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant, title, onPress, disabled = false, isLoading = false, icon, className }) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [buttonWidth, setButtonWidth] = useState<number | null>(null);

	// Measure content width when component mounts or content changes
	useEffect(() => {
		if (buttonRef.current && !isLoading) {
			const width = buttonRef.current.offsetWidth;
			setButtonWidth(width);
		}
	}, [title, icon, isLoading]);

	const handleClick = () => {
		if (!disabled && !isLoading) {
			onPress();
		}
	};

	// Use measured width when loading, otherwise use auto
	const buttonStyle = isLoading && buttonWidth ? { width: `${buttonWidth}px` } : {};

	return (
		<button
			ref={buttonRef}
			onClick={handleClick}
			disabled={disabled || isLoading}
			className={`${styles.button} ${styles[variant]} ${className ?? ""}`.trim()}
			style={buttonStyle}
			aria-label={isLoading ? "Loading..." : title}
			aria-disabled={disabled || isLoading}>
			{isLoading ? (
				<div
					className={`${styles.spinner} ${styles[`spinner${variant.charAt(0).toUpperCase() + variant.slice(1)}`]}`}
					role="status"
					aria-label="Loading"
				/>
			) : (
				<div className={`flex flex-row items-center gap-[10px] ${styles.content}`}>
					{icon && <Image src={ICONS[icon]} alt="Button icon" width={18} height={18} className={styles[`${icon}-icon`]} />}
					{title}
				</div>
			)}
		</button>
	);
};

export default Button;

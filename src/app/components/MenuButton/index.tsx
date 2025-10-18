"use client";

import React, { useState } from "react";
import styles from "./MenuButton.module.css";

interface MenuButtonProps {
	onToggle: (isOpen: boolean) => void;
	isOpen?: boolean;
	className?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onToggle, isOpen = false, className = "" }) => {
	const [internalIsOpen, setInternalIsOpen] = useState(isOpen);

	const handleClick = () => {
		const newState = !internalIsOpen;
		setInternalIsOpen(newState);
		onToggle(newState);
	};

	return (
		<button
			onClick={handleClick}
			className={`${styles.menuButton} ${internalIsOpen ? styles.open : ""} ${className}`}
			aria-label={internalIsOpen ? "Close menu" : "Open menu"}
			aria-expanded={internalIsOpen}>
			<span className={styles.line}></span>
			<span className={styles.line}></span>
		</button>
	);
};

export default MenuButton;

import React from "react";
import styles from "./MenuButton.module.css";

interface MenuButtonProps {
	onToggle: (isOpen?: boolean) => void;
	isOpen?: boolean;
	className?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onToggle, isOpen = false, className = "" }) => {
	const handleClick = () => {
		onToggle();
	};

	return (
		<button
			onClick={handleClick}
			className={`${styles.menuButton} ${isOpen ? styles.open : ""} ${className}`}
			aria-label={isOpen ? "Close menu" : "Open menu"}
			aria-expanded={isOpen}>
			<span className={styles.line}></span>
			<span className={styles.line}></span>
		</button>
	);
};

export default MenuButton;

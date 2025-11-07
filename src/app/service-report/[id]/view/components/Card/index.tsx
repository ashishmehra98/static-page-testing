import React, { ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
	children: ReactNode;
	className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
	return (
		<div className={`${styles.card} ${className || ""}`}>
			<div className={styles.cardContent}>{children}</div>
		</div>
	);
};

export default Card;

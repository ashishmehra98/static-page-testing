"use client";

import React from "react";
import Button from "../Button";
import styles from "./HeroContent.module.css";

interface HeroContentProps {
	tag?: string;
	heading?: string;
	highlightedText?: string;
	subHeading?: string;
	description?: string;
	phoneNumber?: string;
	contactButtonText?: string;
	hideButtonSection?: boolean;
	onPhoneClick?: () => void;
	onContactClick?: () => void;
}

const HeroContent: React.FC<HeroContentProps> = ({
	tag,
	heading,
	highlightedText,
	subHeading,
	description,
	phoneNumber,
	contactButtonText,
	hideButtonSection,
	onPhoneClick,
	onContactClick,
}) => {
	return (
		<div className={styles.content}>
			<div className={styles.textSection}>
				<div className={styles.tagAndHeading}>
					{tag && <p className={styles.tag}>{tag}</p>}
					{heading && (
						<h1 className={styles.heading}>
							{heading}
							{highlightedText && <span className={styles.highlighted}>{highlightedText}</span>}
							{subHeading}
						</h1>
					)}
				</div>
				{description && <p className={styles.description}>{description}</p>}
			</div>
			{!hideButtonSection && (
				<div className={styles.buttonSection}>
					{phoneNumber && <Button variant="primary" title={phoneNumber} onPress={onPhoneClick || (() => {})} icon="phone" />}
					{contactButtonText && (
						<Button variant="secondary" title={contactButtonText} onPress={onContactClick || (() => {})} icon="email" />
					)}
				</div>
			)}
		</div>
	);
};

export default HeroContent;

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
	headingColor?: string;
	descriptionColor?: string;
	contactButtonText?: string;
	hideButtonSection?: boolean;
	onPhoneClick?: () => void;
	onContactClick?: () => void;
	contentClassName?: string;
	descriptionClassName?: string;
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
	headingColor,
	descriptionColor,
	onPhoneClick,
	onContactClick,
	contentClassName,
	descriptionClassName,
}) => {
	return (
		<div className={`${styles.content} ${contentClassName ?? ""}`}>
			<div className={`${styles.textSection} text-section`}>
				<div className={styles.tagAndHeading}>
					{tag && <p className={styles.tag}>{tag}</p>}
					{heading && (
						<h1 className={styles.heading} style={headingColor ? { color: headingColor } : {}}>
							{heading}
							{highlightedText && <span className={styles.highlighted}>{highlightedText}</span>}
							{subHeading}
						</h1>
					)}
				</div>
				{description && (
					<p
						className={`${styles.description} ${descriptionClassName ?? ""}`}
						style={descriptionColor ? { color: descriptionColor } : {}}
						dangerouslySetInnerHTML={{ __html: description }}
					/>
				)}
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

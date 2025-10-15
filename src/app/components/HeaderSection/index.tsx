import React from "react";
import styles from "./HeaderSection.module.css";

/**
 * HeaderSection Component
 *
 * A configurable header component that allows custom colors for title, highlighted text, and subtitle.
 *
 * @example
 * // Default usage (uses CSS variables)
 * <HeaderSection
 *   title="Our"
 *   highlightedText="Pest Control"
 *   subtitle="Protect your home from unwanted pests today and ensure a safe, clean, and comfortable environment."
 * />
 *
 * @example
 * // Custom colors
 * <HeaderSection
 *   title="Our"
 *   highlightedText="Pest Control"
 *   subtitle="Protect your home from unwanted pests today and ensure a safe, clean, and comfortable environment."
 *   titleColor="#2c3e50"
 *   highlightedTextColor="#e74c3c"
 *   subtitleColor="#7f8c8d"
 * />
 */

export interface HeaderSectionProps {
	title: string;
	highlightedText: string;
	subtitle?: string;
	titleColor?: string;
	highlightedTextColor?: string;
	subtitleColor?: string;
	align: "center" | "start";
	className?: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
	title,
	highlightedText,
	subtitle,
	titleColor,
	highlightedTextColor,
	subtitleColor,
	align,
	className,
}) => {
	return (
		<div
			className={`${styles.headerSection} ${align === "center" ? styles.headerSectionCenter : styles.headerSectionStart} ${className}`}>
			<h2 className={styles.mainTitle} style={{ color: titleColor }}>
				{title}{" "}
				<span className={styles.highlight} style={{ color: highlightedTextColor }}>
					{highlightedText}
				</span>
			</h2>
			{subtitle ? (
				<p className={styles.subtitle} style={{ color: subtitleColor }}>
					{subtitle}
				</p>
			) : null}
		</div>
	);
};

export default HeaderSection;

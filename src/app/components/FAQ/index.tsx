"use client";

import React from "react";
import Accordion, { AccordionItem } from "../Accordion";
import HeaderSection from "../HeaderSection";
import styles from "./FAQ.module.css";

interface FAQProps {
	items: FAQItem[];
	className?: string;
}

const FAQ: React.FC<FAQProps> = ({ items, className = "" }) => {
	// Convert FAQ items to Accordion items
	const accordionItems: AccordionItem[] = items.map((item) => ({
		id: item.id,
		title: item.question,
		description: item.answer,
	}));

	return (
		<div className={`${styles.faqSection} ${className}`}>
			<HeaderSection
				title="Frequently Asked "
				highlightedText="Questions"
				subtitle="Protect your home from unwanted pests today and ensure a safe, clean, and comfortable environment."
				align="center"
				className={styles.faqHeader}
			/>
			<div className={styles.faqContainer}>
				<Accordion items={accordionItems} allowMultiple={true} className={styles.faqAccordion} variant="secondary" />
			</div>
		</div>
	);
};

export default FAQ;

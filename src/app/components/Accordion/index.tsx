"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ICONS } from "../../constants/icons";
import styles from "./Accordion.module.css";

export interface AccordionItem {
	id: string;
	title: string;
	description?: string;
}

interface AccordionProps {
	variant?: "primary" | "secondary";
	items: AccordionItem[];
	allowMultiple?: boolean;
	defaultExpanded?: string[];
	className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
	variant = "primary",
	items,
	allowMultiple = true,
	defaultExpanded = [],
	className = "",
}) => {
	const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(defaultExpanded));

	const toggleItem = (itemId: string) => {
		setExpandedItems((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(itemId)) {
				newSet.delete(itemId);
			} else {
				if (!allowMultiple) {
					// If only one item can be expanded, clear all others
					return new Set([itemId]);
				}
				newSet.add(itemId);
			}
			return newSet;
		});
	};

	return (
		<div className={`${styles.accordion} ${className}`}>
			{items.map((item) => {
				const isExpanded = expandedItems.has(item.id);
				return (
					<div key={item.id} className={`${styles.accordionItem} ${variant === "secondary" ? styles.accordionSecondary : ""}`}>
						{variant === "primary" && <div className={styles.divider} />}
						<div className={styles.itemHeader} onClick={() => toggleItem(item.id)}>
							<h3 className={`${styles.itemTitle} ${isExpanded && variant === "primary" ? styles.activeTitle : ""}`}>
								{item.title}
							</h3>
							<div className={`${styles.chevron} ${isExpanded ? styles.chevronRotated : ""}`}>
								<Image
									src={isExpanded ? ICONS[variant !== "secondary" ? "minus" : "minus-primary"] : ICONS.plus}
									alt={isExpanded ? "collapse" : "expand"}
									width={33}
									height={33}
								/>
							</div>
						</div>
						{isExpanded && item.description && (
							<div className={styles.itemContent}>
								<p className={styles.itemDescription} dangerouslySetInnerHTML={{ __html: item.description }} />
							</div>
						)}
					</div>
				);
			})}
			{variant === "primary" && <div className={styles.divider} />}
		</div>
	);
};

export default Accordion;

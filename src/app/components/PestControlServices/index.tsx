"use client";

import React from "react";
import Image from "next/image";
import { IMAGES } from "../../constants/images";
import Accordion, { AccordionItem } from "../Accordion";
import HeaderSection from "../HeaderSection";
import styles from "./PestControlServices.module.css";

const PestControlServices: React.FC = () => {
	const services: AccordionItem[] = [
		{
			id: "general-pest-control",
			title: "General pest control",
			description:
				"Comprehensive pest control solutions for residential properties, targeting common household pests like ants, cockroaches, spiders, and rodents with safe and effective treatments.",
		},
		{
			id: "industrial-pest-control",
			title: "Industrial pest control",
			description: "Protect your home from unwanted pests today and ensure a safe, clean, and comfortable environment.",
		},
		{
			id: "commercial-pest-management",
			title: "Commercial pest management",
			description:
				"Specialized pest management services for businesses, restaurants, hotels, and commercial facilities, ensuring compliance with health regulations and maintaining your reputation.",
		},
		{
			id: "termite-management",
			title: "Termite management",
			description:
				"Professional termite inspection, treatment, and prevention services to protect your property from costly structural damage caused by these destructive pests.",
		},
		{
			id: "insect-control",
			title: "Insect control",
			description:
				"Targeted insect control solutions for flies, mosquitoes, wasps, bees, and other flying or crawling insects that can become a nuisance in your home or business.",
		},
		{
			id: "bed-bug-treatments",
			title: "Bed bug treatments",
			description:
				"Expert bed bug detection and elimination services using advanced heat treatment and chemical methods to completely eradicate infestations.",
		},
		{
			id: "bird-control",
			title: "Bird control",
			description:
				"Humane bird control solutions including deterrent systems, netting, and exclusion methods to prevent birds from roosting and causing damage to your property.",
		},
		{
			id: "stored-product-pest-control",
			title: "Stored product pest control",
			description:
				"Protection for warehouses, food storage facilities, and retail stores from grain beetles, weevils, moths, and other stored product pests that can contaminate inventory.",
		},
		{
			id: "eco-friendly-pest-management",
			title: "Eco friendly pest management",
			description:
				"Environmentally conscious pest control solutions using natural, organic, and low-toxicity methods that are safe for families, pets, and the environment.",
		},
	];

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				{/* Header Section */}
				<HeaderSection
					title="Our"
					highlightedText="Pest Control"
					subtitle="Protect your home from unwanted pests today and ensure a safe, clean, and comfortable environment."
					align="center"
					className="mb-[60px]"
				/>

				{/* Content Section */}
				<div className={styles.contentSection}>
					{/* Image Section */}
					<div className={styles.imageSection}>
						<div className={styles.imageContainer}>
							<Image src={IMAGES.PEST_CONTROL_SERVICES} alt="Pest Control Services" fill className={styles.serviceImage} />
						</div>
					</div>

					{/* Services Accordion */}
					<div className={styles.servicesSection}>
						<Accordion items={services} defaultExpanded={["industrial-pest-control"]} allowMultiple={false} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default PestControlServices;

"use client";

import React from "react";
import Image from "next/image";
import HeaderSection from "../HeaderSection";
import styles from "./BestWeOffer.module.css";
import { IMAGES } from "@/app/constants/images";

interface Feature {
	title: string;
	description: string;
}

interface BestWeOfferProps {
	className?: string;
}

const BestWeOffer: React.FC<BestWeOfferProps> = ({ className }) => {
	const features: Feature[] = [
		{
			title: "Quick Response Time",
			description: "We know pests don't wait, so neither do we. Our team is ready to act fast when you need us most.",
		},
		{
			title: "Safe for Families & Pets",
			description: "We use eco-friendly and low-toxicity treatments that are tough on pests but safe for your loved ones.",
		},
		{
			title: "Flexible Appointment Times",
			description: "We work around your schedule, including evenings and weekends, so you don't have to rearrange your day.",
		},
		{
			title: "Experienced Technicians",
			description: "Our skilled professionals are fully licensed, insured, and trained to handle all types of pest issues.",
		},
	];

	return (
		<section className={`${styles.section} ${className || ""}`}>
			<div className={styles.imageContainer}>
				<Image src={IMAGES.PEST_WORKER} alt="Pest control professional" fill className={styles.image} />
			</div>
			<div className={styles.content}>
				<HeaderSection
					title="Benefits "
					highlightedText="we offer"
					subtitle="Enjoy peace of mind with fast, effective, and hassle-free pest control solutions tailored to your needs."
					align="start"
					className="w-[70%]"
				/>
				<div className={styles.features}>
					{features.map((feature, index) => (
						<div key={index} className={styles.feature}>
							<h3 className={styles.featureTitle}>{feature.title}</h3>
							<p className={styles.featureDescription}>{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BestWeOffer;

import React from "react";
import Image from "next/image";
import styles from "./BestWeOffer.module.css";
import HeaderSection from "@/app/components/HeaderSection";
import { IMAGES } from "@/app/constants/images";

interface Feature {
	title: string;
	description: string;
}

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

const BestWeOffer = () => {
	return (
		<section className={styles.section}>
			<div className={styles.imageContainer}>
				<Image
					src={IMAGES.PEST_WORKER}
					alt="Pest control professional"
					loading="lazy"
					fill
					style={{ objectFit: "cover", objectPosition: "0 50%" }}
				/>
			</div>
			<div className={styles.content}>
				<HeaderSection
					title="Benefits "
					highlightedText="We Offer"
					subtitle="Enjoy peace of mind with fast, effective, and hassle-free pest control solutions tailored to your needs."
					align="start"
					className={styles.headerSection}
				/>
				<div className={styles.imageContainerMobile}>
					<Image
						src={IMAGES.PEST_WORKER}
						alt="Pest control professional"
						fill
						style={{ objectFit: "cover", objectPosition: "0 5%" }}
					/>
				</div>
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

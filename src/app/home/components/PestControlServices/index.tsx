import React from "react";
import Image from "next/image";
import styles from "./PestControlServices.module.css";
import { IMAGES } from "@/app/constants/images";
import { services } from "@/app/constants/services";
import Accordion, { AccordionItem } from "@/app/components/Accordion";
import HeaderSection from "@/app/components/HeaderSection";

// Convert services to AccordionItem format
const servicesData: AccordionItem[] = services.map((service) => ({
	id: service.id,
	title: service.title,
	description: service.description,
}));

const PestControlServices = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				{/* Header Section */}
				<HeaderSection
					title="Our"
					highlightedText="Pest Control "
					extraTitle="Services"
					subtitle="Protect your home from unwanted pests today and ensure a safe, clean, and comfortable environment."
					align="center"
					className={styles.headerSection}
				/>

				{/* Content Section */}
				<div className={styles.contentSection}>
					{/* Image Section */}
					<div className={styles.imageSection}>
						<div className={styles.imageContainer}>
							<Image
								src={IMAGES.PEST_CONTROL_SERVICES}
								alt="Pest Control Services"
								fill
								loading="lazy"
								className={styles.serviceImage}
							/>
						</div>
					</div>

					{/* Services Accordion */}
					<div className={styles.servicesSection}>
						<Accordion items={servicesData} defaultExpanded={["industrial-pest-control"]} allowMultiple={false} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default PestControlServices;

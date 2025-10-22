"use client";

import React from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderSection from "../components/HeaderSection";
import Hero from "../components/Hero";
import HeroContent from "../components/HeroContent";
import HomeFooterJumbotron from "../components/HomeFooterJumbotron";
import ServiceCard from "../components/ServiceCard";
import Process from "../components/Process";
import UserReviews from "../components/UserReviews";
import { IMAGES } from "../constants/images";
import styles from "./style.module.css";

// Fake data for services
const servicesData = [
	{
		id: 1,
		imageSrc: IMAGES.DISINFECTING_AREA,
		imageAlt: "General pest control service",
		serviceNumber: "01/",
		serviceName: "General pest control",
		serviceDescription:
			"Use gel baits, residual sprays, and deep cleaning of hiding places. We'll also advise on restricting food and moisture sources",
		ctaText: "book a free consultation",
	},
	{
		id: 2,
		imageSrc: IMAGES.COMMERCIAL,
		imageAlt: "Industrial pest control service",
		serviceNumber: "02/",
		serviceName: "Industrial pest control",
		serviceDescription:
			"Comprehensive pest management solutions for industrial facilities, warehouses, and manufacturing plants with specialized treatment protocols.",
		ctaText: "book a free consultation",
	},
	{
		id: 3,
		imageSrc: IMAGES.SERVICE_HEADER_BG,
		imageAlt: "Commercial pest management service",
		serviceNumber: "03/",
		serviceName: "Commercial pest management",
		serviceDescription:
			"Professional pest control services for restaurants, hotels, offices, and retail spaces with regular maintenance programs.",
		ctaText: "book a free consultation",
	},
	{
		id: 4,
		imageSrc: IMAGES.COCKROACHES,
		imageAlt: "Insect control service",
		serviceNumber: "04/",
		serviceName: "Insect control",
		serviceDescription:
			"Targeted treatment for ants, cockroaches, flies, and other common household insects using safe and effective methods.",
		ctaText: "book a free consultation",
	},
	{
		id: 5,
		imageSrc: IMAGES.ANT_CONTROL_MATTERS,
		imageAlt: "Bed bug treatments service",
		serviceNumber: "05/",
		serviceName: "Bed bug treatments",
		serviceDescription:
			"Specialized heat treatment and chemical solutions to eliminate bed bug infestations completely from your property.",
		ctaText: "book a free consultation",
	},
	{
		id: 6,
		imageSrc: IMAGES.PEST_CONTROL_SERVICES,
		imageAlt: "Bird control service",
		serviceNumber: "06/",
		serviceName: "Bird control",
		serviceDescription:
			"Humane bird deterrent systems and exclusion methods to protect your property from bird-related damage and health risks.",
		ctaText: "book a free consultation",
	},
	{
		id: 7,
		imageSrc: IMAGES.INSECTION_SERVICE,
		imageAlt: "Stored product pest control service",
		serviceNumber: "07/",
		serviceName: "Stored product pest control",
		serviceDescription:
			"Protection for food storage areas, warehouses, and retail spaces from grain beetles, weevils, and other stored product pests.",
		ctaText: "book a free consultation",
	},
	{
		id: 8,
		imageSrc: IMAGES.PATTERN_BG,
		imageAlt: "Eco friendly pest management service",
		serviceNumber: "08/",
		serviceName: "Eco friendly pest management",
		serviceDescription:
			"Environmentally conscious pest control solutions using natural and organic treatments that are safe for families and pets.",
		ctaText: "book a free consultation",
	},
];

const Services = () => {
	return (
		<Container>
			<Header />
			<div className="flex flex-col gap-[60px] xl:gap-[120px]">
				{/* Jumbotron */}
				<Hero bgImage={IMAGES.DISINFECTING_AREA}>
					<HeroContent
						heading={"Our "}
						highlightedText={"Pest Control "}
						subHeading={"Services"}
						description={"We provide a comprehensive residential pest control service for Sydney households."}
						hideButtonSection={true}
						contentClassName={styles.header}
					/>
				</Hero>
				{/* Our services section */}
				<div className={styles.ourServicesSection}>
					{servicesData.map((service, index) => (
						<React.Fragment key={index}>
							<ServiceCard
								key={service.id}
								imageSrc={service.imageSrc}
								imageAlt={service.imageAlt}
								serviceNumber={service.serviceNumber}
								serviceName={service.serviceName}
								serviceDescription={service.serviceDescription}
								ctaText={service.ctaText}
							/>
							<div className={styles.separator} />
						</React.Fragment>
					))}
				</div>
				{/* Ecovia Process */}
				<div className={styles.ecoviaProcessSection}>
					<HeaderSection
						title="Our Process: How Ecovia Works"
						subtitle="We follow a transparent, step-by-step approach so you know exactly what to expect."
						align="center"
						className="header"
					/>
					<Process />
				</div>
				{/* User Reviews */}
				<div className={styles.userReviewsSection}>
					<HeaderSection
						title="What "
						highlightedText="Our Customers "
						extraTitle="Had To Say About Us"
						subtitle="This is what some of our customers had to say about our services after-the-fact!"
						align="start"
						className="user-reviews--header"
					/>
					<UserReviews className="user-reviews" />
				</div>
				<HomeFooterJumbotron
					bgImage={IMAGES.FOOTER_BG}
					heading="Book Your "
					highlightedText="Free Inspection "
					subHeading="/ Request a Quote"
					description="Protect your home from unwanted pests today and ensure a safe, clean, and comfortable environment."
					heroContainerClassName={styles.jumbotronFooterContent}
				/>
				<Footer className="py-[80px]" />
			</div>
		</Container>
	);
};

export default Services;

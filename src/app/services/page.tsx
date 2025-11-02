"use client";

import React from "react";
import Link from "next/link";
import UserReviewsSection from "../about-us/components/UserReviewsSection";
import EcoviaProcess from "./[slug]/service/components/EcoviaProcess";
import styles from "./style.module.css";
import Container from "@/app/components/Container";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import HeroContent from "@/app/components/HeroContent";
import ContactFormFooter from "@/app/components/ContactFormFooter";
import ServiceCard from "@/app/components/ServiceCard";
import { IMAGES } from "@/app/constants/images";
import { servicesIndexPage } from "@/app/constants/services";

const Services = () => {
	return (
		<Container>
			<Header />
			<div className="flex flex-col gap-[60px] xl:gap-[120px]">
				{/* Jumbotron */}
				<Hero bgImage={IMAGES.DISINFECTING_AREA} bgPosition="center 10%">
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
					{servicesIndexPage.map((service, index) => (
						<React.Fragment key={index}>
							<Link href={`/services/${service.path}`}>
								<ServiceCard
									key={service.id}
									imageSrc={service.imageSrc}
									imageAlt={service.imageAlt}
									serviceNumber={service.serviceNumber}
									serviceName={service.serviceName}
									serviceDescription={service.serviceDescription}
									ctaText={service.ctaText}
								/>
							</Link>
							<div className={styles.separator} />
						</React.Fragment>
					))}
				</div>
				{/* Ecovia Process */}
				<EcoviaProcess />
				{/* User Reviews */}
				<UserReviewsSection />
				<ContactFormFooter
					bgImage={IMAGES.FOOTER_BG}
					heading="Book Your "
					highlightedText="Free Inspection "
					subHeading="/ Request a Quote"
					description="Protect your home from unwanted pests today and ensure a safe, clean, and comfortable environment."
					heroContainerClassName={styles.jumbotronFooterContent}
				/>
				<Footer className={styles.footer} />
			</div>
		</Container>
	);
};

export default Services;

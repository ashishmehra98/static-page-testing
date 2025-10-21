"use client";

import React from "react";
import Hero from "../Hero";
import HeroContent from "../HeroContent";
import ContactForm from "../ContactForm";
import Info from "../Info";
import styles from "./HomeFooterJumbotron.module.css";

interface HomeFooterJumbotronProps {
	bgImage: string;
	heading: string;
	highlightedText: string;
	subHeading: string;
	description: string;
	heroContainerClassName?: string;
}

const HomeFooterJumbotron: React.FC<HomeFooterJumbotronProps> = ({
	bgImage,
	heading,
	highlightedText,
	subHeading,
	description,
	heroContainerClassName,
}) => {
	return (
		<div className={styles.jumbotron}>
			<Hero bgImage={bgImage}>
				<HeroContent
					heading={heading}
					highlightedText={highlightedText}
					subHeading={subHeading}
					description={description}
					contentClassName={`${styles.content} ${heroContainerClassName || ""}`.trim()}
					descriptionClassName={styles.description}
				/>
				<div className={styles.infoGroup}>
					<Info variant="col" icon="family" title="Safe for Families & Pets" />
					<Info variant="col" icon="support" title="Licensed & Certified Badge" />
					<Info variant="col" icon="thumb" title="Satisfaction Guaranteed" />
				</div>
				<div className={styles.contactFormContainer}>
					<ContactForm onSubmit={() => {}} />
				</div>
			</Hero>
		</div>
	);
};

export default HomeFooterJumbotron;

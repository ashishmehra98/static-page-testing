"use client";

import React from "react";
import Hero from "../Hero";
import HeroContent from "../HeroContent";
import styles from "./AboutUsJumbotron.module.css";

interface AboutUsJumbotronProps {
	bgImage: string;
	heading: string;
	highlightedText: string;
	subHeading: string;
	description: string;
}

const AboutUsJumbotron: React.FC<AboutUsJumbotronProps> = ({ bgImage, heading, highlightedText, subHeading, description }) => {
	return (
		<div className={styles.jumbotron}>
			<Hero bgImage={bgImage}>
				<HeroContent
					heading={heading}
					highlightedText={highlightedText}
					subHeading={subHeading}
					description={description}
					hideButtonSection={true}
				/>
			</Hero>
		</div>
	);
};

export default AboutUsJumbotron;

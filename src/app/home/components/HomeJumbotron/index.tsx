import React from "react";
import styles from "./HomeJumbotron.module.css";
import Hero from "@/app/components/Hero";
import HeroContent from "@/app/components/HeroContent";
import ContactForm from "@/app/components/ContactForm";

interface HomeJumbotronProps {
	bgImage: string;
	tag: string;
	heading: string;
	highlightedText: string;
	subHeading: string;
	description: string;
	contactButtonText: string;
	className?: string;
}

const HomeJumbotron: React.FC<HomeJumbotronProps> = ({
	bgImage,
	tag,
	heading,
	highlightedText,
	subHeading,
	description,
	contactButtonText,
	className,
}) => {
	return (
		<div className={`${styles.jumbotron} ${className ?? ""}`}>
			<Hero bgImage={bgImage}>
				<HeroContent
					tag={tag}
					heading={heading}
					highlightedText={highlightedText}
					subHeading={subHeading}
					description={description}
					showPhoneButton={true}
					contactButtonText={contactButtonText}
					contentClassName={styles.heroContent}
				/>
				<div className={styles.contactFormContainer}>
					<ContactForm />
				</div>
			</Hero>
		</div>
	);
};

export default HomeJumbotron;

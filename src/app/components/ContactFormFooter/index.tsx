import React from "react";
import Hero from "../Hero";
import HeroContent from "../HeroContent";
import ContactForm from "../ContactForm";
import Button from "../Button";
import Info from "../Info";
import styles from "./ContactFormFooter.module.css";
import { CONTACT_NUMBER, CONTACT_NUMBER_TEL } from "@/app/constants/services";

interface ContactFormFooterProps {
	bgImage: string;
	heading: string;
	highlightedText: string;
	subHeading: string;
	description: string;
	heroContainerClassName?: string;
	showCallCta?: boolean;
}

const ContactFormFooter: React.FC<ContactFormFooterProps> = ({
	bgImage,
	heading,
	highlightedText,
	subHeading,
	description,
	heroContainerClassName,
	showCallCta,
}) => {
	const onPhoneClick = () => {
		window.open(`tel:${CONTACT_NUMBER_TEL}`);
	};

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
					hideButtonSection={true}
				/>
				{showCallCta ? (
					<Button variant="primary" title={CONTACT_NUMBER} icon="phone" onPress={onPhoneClick} className={styles.phoneCTA} />
				) : (
					<div className={styles.infoGroup}>
						<Info variant="col" icon="family" title="Safe for Families & Pets" />
						<Info variant="col" icon="support" title="Licensed & Certified Badge" />
						<Info variant="col" icon="thumb" title="Satisfaction Guaranteed" />
					</div>
				)}
				<div className={styles.contactFormContainer}>
					<ContactForm onSubmit={() => {}} />
				</div>
			</Hero>
		</div>
	);
};

export default ContactFormFooter;

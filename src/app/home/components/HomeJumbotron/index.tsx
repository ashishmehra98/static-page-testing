import React from "react";
import { useRouter } from "next/navigation";
import styles from "./HomeJumbotron.module.css";
import Hero from "@/app/components/Hero";
import HeroContent from "@/app/components/HeroContent";
import ContactForm, { ContactFormData } from "@/app/components/ContactForm";

interface HomeJumbotronProps {
	bgImage: string;
	tag: string;
	heading: string;
	highlightedText: string;
	subHeading: string;
	description: string;
	phoneNumber: string;
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
	phoneNumber,
	contactButtonText,
	className,
}) => {
	const router = useRouter();
	const handlePhoneClick = () => {
		if (phoneNumber) {
			window.open(`tel:${phoneNumber}`);
		}
	};

	const handleContactClick = () => {
		router.push("/contact-us");
	};

	const handleFormSubmit = (formData: ContactFormData) => {
		// Handle form submission
		console.log("Form submitted:", formData);
	};

	return (
		<div className={`${styles.jumbotron} ${className ?? ""}`}>
			<Hero bgImage={bgImage}>
				<HeroContent
					tag={tag}
					heading={heading}
					highlightedText={highlightedText}
					subHeading={subHeading}
					description={description}
					phoneNumber={phoneNumber}
					contactButtonText={contactButtonText}
					onPhoneClick={handlePhoneClick}
					onContactClick={handleContactClick}
					contentClassName={styles.heroContent}
				/>
				<div className={styles.contactFormContainer}>
					<ContactForm onSubmit={handleFormSubmit} />
				</div>
			</Hero>
		</div>
	);
};

export default HomeJumbotron;

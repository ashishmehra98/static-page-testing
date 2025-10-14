"use client";

import Container from "./components/Container";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroContent from "./components/HeroContent";
import ContactForm, { ContactFormData } from "./components/ContactForm";
import UserReviews from "./components/UserReviews";
import { IMAGES } from "./constants/images";
import PestControlServices from "./components/PestControlServices";

export default function Home() {
	const handlePhoneClick = () => {
		// Handle phone click
		console.log("Phone clicked");
	};

	const handleContactClick = () => {
		// Handle contact click
		console.log("Contact clicked");
	};

	const handleFormSubmit = (formData: ContactFormData) => {
		// Handle form submission
		console.log("Form submitted:", formData);
	};

	return (
		<Container>
			<Header />
			<Hero bgImage={IMAGES.HEADER_BG}>
				<HeroContent
					tag="Protect Your Home Today"
					heading="Safe and Effective "
					highlightedText="Pest Control "
					subHeading="Around Sydney"
					description="Protect your home from unwanted pests today and ensure a safe, clean, and comfortable environment."
					phoneNumber="0432 227 227"
					contactButtonText="Contact us"
					onPhoneClick={handlePhoneClick}
					onContactClick={handleContactClick}
				/>
				<div className="absolute right-[5%] top-[74px]">
					<ContactForm onSubmit={handleFormSubmit} />
				</div>
			</Hero>
			<UserReviews />
			<PestControlServices />
		</Container>
	);
}

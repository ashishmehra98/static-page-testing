"use client";

import Container from "../components/Container";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderSection from "../components/HeaderSection";
import HomeFooterJumbotron from "../components/HomeFooterJumbotron";
import LocalPestExpert from "../components/LocalPestExpert";
import SectionInfo from "../components/SectionInfo";
import UserReviews from "../components/UserReviews";
import { FAQ_DATA } from "../constants/faq";
import { IMAGES } from "../constants/images";
import styles from "./style.module.css";

const ContactUs = () => {
	return (
		<Container>
			<Header />
			<div className="flex flex-col gap-[60px] xl:gap-[120px]">
				{/* Jumbotron */}
				<HomeFooterJumbotron
					bgImage={IMAGES.CONTACT_BG}
					heading="Contact "
					highlightedText="Ecovia "
					subHeading="Pest Control"
					description="Have a pest problem at home or just need advice? Our friendly team at Ecovia is here to help. Contact us today for a free inspection and no-obligation quote for your residential pest control needs."
					heroContainerClassName={styles.jumbotronHeaderContent}
				/>
				<LocalPestExpert />
				{/* Why Choose Ecovia */}
				<div className={styles.whyChooseEcoviaSection}>
					<HeaderSection
						title="Why"
						highlightedText="Choose Ecovia "
						extraTitle="For Your Home Pest Protection"
						subtitle="Here’s what sets us apart when it comes to pest control for residential properties:"
						align="center"
						className="header"
					/>
					<SectionInfo imageSrc={IMAGES.COMMERCIAL} imageAlt="commercial">
						<div className={styles.infoContent}>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Sydney local professionals</span>
								<span className={styles.regularText}> — we understand the climate, common pests, and local home structures</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Safe & family-friendly solutions</span>
								<span className={styles.regularText}> — eco / low-toxicity treatments with strict safety protocols</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Fully licensed & insured</span>
								<span className={styles.regularText}> — AEPMA Codes of Practice compliant</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Transparent pricing</span>
								<span className={styles.regularText}> — no hidden costs, free quotes, clear plans</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Service guarantee</span>
								<span className={styles.regularText}> — pests return, we return (within warranty)</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Fast response</span>
								<span className={styles.regularText}> — same day or next business day service</span>
							</div>
						</div>
					</SectionInfo>
				</div>
				<FAQ items={FAQ_DATA} />
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

export default ContactUs;

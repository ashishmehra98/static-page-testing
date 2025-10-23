"use client";

import UserReviewsSection from "../about-us/components/UserReviewsSection";
import styles from "./style.module.css";
import Container from "@/app/components/Container";
import FAQ from "@/app/components/FAQ";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import HeaderSection from "@/app/components/HeaderSection";
import ContactFormFooter from "@/app/components/ContactFormFooter";
import LocalPestExpert from "@/app/components/LocalPestExpert";
import SectionInfo from "@/app/components/SectionInfo";
import { FAQ_DATA } from "@/app/constants/faq";
import { IMAGES } from "@/app/constants/images";

const ContactUs = () => {
	return (
		<Container>
			<Header />
			<div className="flex flex-col gap-[60px] xl:gap-[120px]">
				{/* Jumbotron */}
				<ContactFormFooter
					bgImage={IMAGES.CONTACT_BG}
					heading="Contact "
					highlightedText="Ecovia "
					subHeading="Pest Control"
					description="Have a pest problem at home or just need advice? Our friendly team at Ecovia is here to help. Contact us today for a free inspection and no-obligation quote for your residential pest control needs."
					heroContainerClassName={styles.jumbotronHeaderContent}
				/>
				<LocalPestExpert className={styles.localPestExpertSection} />
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

export default ContactUs;

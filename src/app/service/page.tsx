"use client";

import Container from "../components/Container";
import Header from "../components/Header";
import HeaderSection from "../components/HeaderSection";
import Hero from "../components/Hero";
import HeroContent from "../components/HeroContent";
import { IMAGES } from "../constants/images";
import SectionInfo from "../components/SectionInfo";
import PestServicesSlide from "../components/PestServicesSlide";
import Process from "../components/Process";
import UserReviews from "../components/UserReviews";
import FAQ from "../components/FAQ";
import { FAQ_DATA } from "../constants/faq";
import HomeFooterJumbotron from "../components/HomeFooterJumbotron";
import Footer from "../components/Footer";
import styles from "./style.module.css";

const Service = () => {
	return (
		<Container>
			<Header />
			<div className="flex flex-col gap-[60px] xl:gap-[120px]">
				{/* Jumbotron */}
				<Hero bgImage={IMAGES.SERVICE_HEADER_BG} bgPosition="0 18%">
					<HeroContent
						heading={"Residential "}
						highlightedText={"Pest Control "}
						subHeading={"for Sydney Homes & Businesses"}
						description={
							"Stay informed with practical tips, latest news, and expert advice on keeping your space pest-free all year round"
						}
						hideButtonSection={true}
					/>
				</Hero>
				{/* Residential & Commercial Info */}
				<div className={styles.residentialInfoSection}>
					<HeaderSection
						title="Residential And Commercial"
						highlightedText="Pest "
						extraTitle="Protection"
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
						</div>
					</SectionInfo>
				</div>
				{/* Pest Info Slides */}
				<PestServicesSlide className={styles.pestInfoSlidesSection} />
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
				{/* Safety Measures */}
				<div className={styles.safetyMeasureSection}>
					<HeaderSection
						title="Safe"
						highlightedText="Methods"
						extraTitle=", Guarantees & Customer Assurance"
						subtitle="Here’s what sets us apart when it comes to pest control for residential properties:"
						align="center"
						className="header"
					/>
					<SectionInfo imageSrc={IMAGES.COMMERCIAL} imageAlt="commercial">
						<div className={styles.infoContent}>
							<div className={styles.infoItem}>
								<span className={styles.regularText}>We only </span>
								<span className={styles.boldText}>use licensed chemicals approved for residential use</span>
								<span className={styles.regularText}>, and strictly adhere to safety instructions</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.regularText}>Our technicians wear PPE, </span>
								<span className={styles.boldText}>protect living spaces, and ventilate areas</span>
								<span className={styles.regularText}> when needed</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.regularText}>We provide a </span>
								<span className={styles.boldText}>written guarantee</span>
								<span className={styles.regularText}>
									{" "}
									— if a treated pest returns within the guarantee period (usually 30–90 days), we come back free.
								</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.regularText}>We carry </span>
								<span className={styles.boldText}>full insurance</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.regularText}>We follow the </span>
								<a
									href="https://www.aepma.com.au/codes-of-practice"
									className={styles.boldText}
									style={{ textDecoration: "underline" }}>
									AEPMA Codes of Practice
								</a>
								<span className={styles.regularText}> — the industry benchmark for ethical and professional conduct.</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.regularText}>We support </span>
								<span className={styles.boldText}>low-toxicity, integrated pest management (IPM) practices</span>
								<span className={styles.regularText}>
									{" "}
									— combining chemical and non-chemical controls as needed (e.g. exclusion, habitat modification).
								</span>
							</div>
						</div>
					</SectionInfo>
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
				<FAQ items={FAQ_DATA} />
				<HomeFooterJumbotron
					bgImage={IMAGES.FOOTER_BG}
					heading="Book your quick & free "
					highlightedText="consultation "
					subHeading="today"
					description="Protect your home from unwanted pests today and ensure a safe, clean, and comfortable environment."
				/>
				<Footer className="py-[80px]" />
			</div>
		</Container>
	);
};

export default Service;

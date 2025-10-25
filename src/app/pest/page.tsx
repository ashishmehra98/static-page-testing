"use client";

import Link from "next/link";
import EcoviaProcess from "../services/components/EcoviaProcess/EcoviaProcess";
import UserReviewsSection from "../about-us/components/UserReviewsSection";
import styles from "./style.module.css";
import Container from "@/app/components/Container";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import HeroContent from "@/app/components/HeroContent";
import ContactFormFooter from "@/app/components/ContactFormFooter";
import PestInfo from "@/app/components/PestInfo";
import { IMAGES } from "@/app/constants/images";
import { pestData } from "@/app/constants/pests";

const Pest = () => {
	return (
		<Container>
			<Header />
			<div className="flex flex-col gap-[60px] xl:gap-[120px]">
				{/* Jumbotron */}
				<Hero bgImage={IMAGES.DISINFECTING_AREA}>
					<HeroContent
						heading={"Our Residential "}
						highlightedText={"Pest Services "}
						subHeading={": What We Treat"}
						description={"We provide a comprehensive residential pest control service for Sydney households."}
						hideButtonSection={true}
						contentClassName={styles.header}
					/>
				</Hero>
				{/* What we treat section */}
				<div className={styles.whatWeTreatSection}>
					{pestData.map((pest, index) => (
						<div key={index}>
							<Link href={`/pests/${pest.path}`} style={{ cursor: "pointer", textDecoration: "none" }}>
								<PestInfo
									imageSrc={pest.imageSrc}
									imageAlt={pest.imageAlt}
									pestName={pest.pestName}
									commonSigns={pest.commonSigns}
									treatment={pest.treatment}
									isReverse={true}
									className={styles.pestInfoCard}
									textColor={{
										pestName: "#134021",
										paragraph: "#134021",
									}}
								/>
							</Link>
							<div className={styles.separator} />
						</div>
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

export default Pest;

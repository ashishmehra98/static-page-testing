"use client";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderSection from "../components/HeaderSection";
import Hero from "../components/Hero";
import HeroContent from "../components/HeroContent";
import HomeFooterJumbotron from "../components/ContactFormFooter";
import PestInfo from "../components/PestInfo";
import Process from "../components/Process";
import UserReviews from "../components/UserReviews";
import { IMAGES } from "../constants/images";
import styles from "./style.module.css";

const Pest = () => {
	const pestData = [
		{
			imageSrc: IMAGES.COCKROACHES,
			imageAlt: "Cockroaches",
			pestName: "Cockroaches",
			commonSigns: "Droppings, greasy marks behind appliances, live sightings",
			treatment:
				"Use gel baits, residual sprays, and deep cleaning of hiding places. We'll also advise on restricting food and moisture sources",
		},
		{
			imageSrc: IMAGES.COMMON_ANT_SPECIES,
			imageAlt: "Ants",
			pestName: "Ants (especially sugar / coastal / carpenter ants)",
			commonSigns: "Trails in kitchens, food cupboards, small mounds near foundations",
			treatment:
				"We locate nests, apply targeted baiting (low-toxicity), spray entry points, and seal cracks. Regular follow-ups help stop recurrence",
		},
		{
			imageSrc: IMAGES.PEST_WORKER,
			imageAlt: "Rodents",
			pestName: "Rodents (rats & mice)",
			commonSigns: "Gnawed wires / wood, droppings, scrambling in roof spaces",
			treatment: "Use enclosed baits, traps, exclusion work (sealing entry points). Inspect attics, walls, subfloors for nests",
		},
		{
			imageSrc: IMAGES.PEST_WORKER,
			imageAlt: "Spiders",
			pestName: "Spiders (including dangerous species)",
			commonSigns: "Webs in corners, sightings in dark areas",
			treatment: "We use safe sprays and residual barrier treatments. We also reduce harbourage in storage and garden areas",
		},
		{
			imageSrc: IMAGES.PEST_WORKER,
			imageAlt: "Other pests",
			pestName: "Bed bugs, fleas, wasps, silverfish, ants in lawns",
			commonSigns: "Bites, nest in walls or under eaves, holes in fabrics",
			treatment:
				"Treatments adapted per pest type — e.g. mattress treatments, insecticide dust in wall voids, spray for wasp nests",
		},
	];

	return (
		<Container>
			<Header />
			<div className="flex flex-col gap-[60px] xl:gap-[120px]">
				{/* Jumbotron */}
				<Hero bgImage={IMAGES.DISINFECTING_AREA}>
					<HeroContent
						heading={"Our Residential "}
						highlightedText={"Pest Services "}
						subHeading={":What We Treat"}
						description={"We provide a comprehensive residential pest control service for Sydney households."}
						hideButtonSection={true}
						contentClassName={styles.header}
					/>
				</Hero>
				{/* What we treat section */}
				<div className={styles.whatWeTreatSection}>
					{pestData.map((pest, index) => (
						<div key={index}>
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
							<div className={styles.separator} />
						</div>
					))}
				</div>
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

export default Pest;

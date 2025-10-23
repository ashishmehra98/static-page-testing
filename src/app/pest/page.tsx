"use client";

import EcoviaProcess from "../service/components/EcoviaProcess/EcoviaProcess";
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

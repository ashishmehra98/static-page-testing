"use client";

import Container from "../components/Container";
import Header from "../components/Header";
import HeaderSection from "../components/HeaderSection";
import Hero from "../components/Hero";
import HeroContent from "../components/HeroContent";
import SectionInfo from "../components/SectionInfo";
import { IMAGES } from "../constants/images";
import ProcessCheckInfo from "../components/ProcessCheckInfo";
import Button from "../components/Button";
import UserReviews from "../components/UserReviews";
import LocalPestExpert from "../components/LocalPestExpert";
import FAQ from "../components/FAQ";
import { FAQ_DATA } from "../constants/faq";
import HomeFooterJumbotron from "../components/HomeFooterJumbotron";
import Footer from "../components/Footer";
import styles from "./style.module.css";

const PestStudy = () => {
	return (
		<Container>
			<Header />
			<div className="flex flex-col gap-[60px] xl:gap-[120px]">
				{/* Jumbotron */}
				<Hero bgImage={IMAGES.PEST_STUDY_BG}>
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
				{/* Control Matters */}
				<div className={styles.controlMattersSection}>
					<HeaderSection
						title="Why"
						highlightedText="Controlling Ants "
						extraTitle="Matters"
						subtitle="At first, a few ants on the bench may not seem like much. But ants don’t travel alone. When one finds food, it leaves a chemical trail for the rest of the colony to follow. This can lead to hundreds, even thousands, of ants marching through your home in no time."
						align="center"
						className="header"
					/>
					<SectionInfo imageSrc={IMAGES.ANT_CONTROL_MATTERS} imageAlt="commercial">
						<div className={styles.infoContent}>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Food contamination: </span>
								<span className={styles.regularText}>
									Ants carry bacteria on their bodies, which can transfer to your food and surfaces.
								</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Property risks: </span>
								<span className={styles.regularText}>
									Some species, like coastal brown ants, dig around paving and foundations, causing damage.
								</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Painful bites: </span>
								<span className={styles.regularText}>
									Large ants such as bull ants or jack jumpers can deliver painful, sometimes allergic bites.
								</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Persistent colonies: </span>
								<span className={styles.regularText}>
									DIY sprays often kill only the visible ants, leaving the colony intact and ready to return.
								</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.regularText}>
									With professional pest control for ants, you not only remove the visible pests but also stop the problem at the
									source.
								</span>
							</div>
						</div>
					</SectionInfo>
				</div>
				{/* Common Ant Species*/}
				<div className={styles.commonSpeciesSection}>
					<HeaderSection
						title="Common"
						highlightedText="Ant Species "
						extraTitle="In Sydney Homes"
						subtitle="Sydney has a wide range of ant species, each with different habits and risks. Identifying the species is essential for effective treatment."
						align="center"
						className="header"
					/>
					<SectionInfo imageSrc={IMAGES.COMMON_ANT_SPECIES} imageAlt="commercial" isReverse={true}>
						<div className={styles.infoContent}>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Black house ants: </span>
								<span className={styles.regularText}>
									Common indoors, especially in kitchens and bathrooms. Attracted to sweets.
								</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Coastal brown ants: </span>
								<span className={styles.regularText}>
									Nest in soil, gardens, and wall cavities. Known to damage lawns and paving.
								</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Bull ants: </span>
								<span className={styles.regularText}>
									Large and aggressive, with painful stings. Usually nest outdoors but can wander indoors.
								</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Sugar ants: </span>
								<span className={styles.regularText}>Found in kitchens and pantries, searching for sweet food sources.</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Meat ants: </span>
								<span className={styles.regularText}>Build large nests in soil, often visible in gardens and yards.</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.regularText}>
									By understanding these species, our ant pest control solutions are tailored to the exact problem, ensuring
									long-lasting results. For further background on ant species in Australia, see{" "}
									<a
										href="https://www.aepma.com.au/codes-of-practice"
										className={styles.boldText}
										style={{ textDecoration: "underline" }}>
										Health Victoria’s pest control advice.
									</a>
								</span>
							</div>
						</div>
					</SectionInfo>
				</div>
				{/* Infestation Signs */}
				<Hero bgImage={IMAGES.PATTERN_BG} className={styles.infestationSigns}>
					<HeaderSection
						title="Signs You"
						highlightedText="May Have "
						extraTitle="An Ant Infestation"
						subtitle="If these signs sound familiar, it’s time to move from temporary fixes to professional pest control for ants."
						align="start"
						titleColor="white"
						subtitleColor="white"
						highlightedTextColor="#b1cf5f"
						className="header"
					/>
					<div className={styles.infoContent}>
						<div className={styles.infoItem}>
							<span className={styles.regularText}>
								Not all ant problems are obvious at first. Here are key signs that it’s time to call in professionals for ant pest
								control Sydney:
							</span>
						</div>
						<div className={styles.infoItem}>
							<span className={styles.boldText}>Trails of ants </span>
							<span className={styles.regularText}>moving to and from food or water sources</span>
						</div>
						<div className={styles.infoItem}>
							<span className={styles.boldText}>Nests or small mounds </span>
							<span className={styles.regularText}>near pavers, driveways, or lawns</span>
						</div>
						<div className={styles.infoItem}>
							<span className={styles.boldText}>Ants appearing around sinks, </span>
							<span className={styles.regularText}>bathrooms, or pet food bowls</span>
						</div>
						<div className={styles.infoItem}>
							<span className={styles.boldText}>Large numbers of ants after rain, </span>
							<span className={styles.regularText}>when colonies seek dry shelter</span>
						</div>
						<div className={styles.infoItem}>
							<span className={styles.boldText}>Repeated ant activity </span>
							<span className={styles.regularText}>despite DIY sprays or store-bought baits</span>
						</div>
					</div>
				</Hero>
				{/* Services & Methods */}
				<div className={styles.serviceMethodsSection}>
					<HeaderSection
						title="Our"
						highlightedText="Ant Pest Control "
						extraTitle="Services & Methods"
						subtitle="At Ecovia, our approach focuses on safe, targeted solutions. We don’t just spray and hope for the best — we identify the colony and use proven strategies to stop ants at their source."
						align="center"
						className="header"
					/>
					<SectionInfo imageSrc={IMAGES.ANT_CONTROL_MATTERS} imageAlt="commercial">
						<div className={styles.infoContent}>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Gel baiting: </span>
								<span className={styles.regularText}>Attracts ants to take poison back to the nest, eliminating the colony.</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Residual spraying: </span>
								<span className={styles.regularText}>
									Creates a protective barrier along entry points, skirting boards, and outdoor perimeters.
								</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Dusting treatments: </span>
								<span className={styles.regularText}>Applied into wall cavities, cracks, and voids where ants hide</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Colony treatments: </span>
								<span className={styles.regularText}>Where nests are located, direct treatments ensure long-term results.</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Exclusion and sealing: </span>
								<span className={styles.regularText}>
									We identify and seal cracks or entry points to stop ants from re-entering
								</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.regularText}>
									This comprehensive process ensures your ant pest control service is effective, safe, and tailored to your
									property.
								</span>
							</div>
						</div>
					</SectionInfo>
				</div>
				{/* What to Expect - list variant */}
				<Hero bgImage={IMAGES.PATTERN_BG} className={styles.processListSection}>
					<HeaderSection
						title="What"
						highlightedText="To Expect "
						extraTitle="From Our Process"
						subtitle="Transparency is important to us, so here’s how our ant pest control Sydney service works:"
						align="start"
						titleColor="white"
						subtitleColor="white"
						highlightedTextColor="#b1cf5f"
						className="header"
					/>
					<div className={styles.infoContent}>
						<div className={styles.infoItem}>
							<span className={styles.regularText}>Inspection – We identify the species, nesting sites, and entry points.</span>
						</div>
						<div className={styles.infoItem}>
							<span className={styles.regularText}>
								Treatment plan – We provide a clear quote and explain the methods we’ll use.
							</span>
						</div>
						<div className={styles.infoItem}>
							<span className={styles.regularText}>
								Treatment – Our technicians carry out safe, targeted treatments inside and outside the home.
							</span>
						</div>
						<div className={styles.infoItem}>
							<span className={styles.regularText}>
								Follow-up – If ants reappear within the guarantee period, we return them free of charge.
							</span>
						</div>
						<div className={styles.infoItem}>
							<span className={styles.boldText}>Large numbers of ants after rain, </span>
							<span className={styles.regularText}>when colonies seek dry shelter</span>
						</div>
						<div className={styles.infoItem}>
							<span className={styles.regularText}>
								Prevention tips – We give practical advice to reduce the chance of future infestations.
							</span>
						</div>
					</div>
				</Hero>
				{/* DIY Tips & Prevention */}
				<div className={styles.diySection}>
					<HeaderSection
						title="DIY"
						highlightedText="Tips "
						extraTitle="& Prevention"
						subtitle="While professional pest control for ants is the most effective solution, there are steps you can take to make your home less attractive to ants:"
						align="center"
						className="header"
					/>
					<SectionInfo imageSrc={IMAGES.COMMON_ANT_SPECIES} imageAlt="commercial" isReverse={true}>
						<div className={styles.infoContent}>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Keep kitchens clean and free of food scraps or crumbs.</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Store food in sealed containers.</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Wipe down surfaces with soapy water or vinegar to disrupt ant trails.</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Seal cracks and crevices around windows, doors, and skirting.</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Fix leaks, as ants seek out water sources.</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.boldText}>Keep garden beds, mulch, and tree branches away from the house perimeter</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.regularText}>
									These steps can help, but once an infestation is established, professional help is usually required.
								</span>
							</div>
						</div>
					</SectionInfo>
				</div>
				{/* What to expect - steps variant */}
				<Hero bgImage={IMAGES.PATTERN_BG} className={styles.processCheckSection}>
					<HeaderSection
						title="What"
						highlightedText="To Expect "
						extraTitle="From Our Process"
						subtitle="Transparency is important to us, so here's how our ant pest control Sydney service works:"
						align="center"
						titleColor="white"
						subtitleColor="white"
						highlightedTextColor="#b1cf5f"
						className="header"
					/>
					<div className={styles.processCheckList}>
						{[
							{
								title: "Use only licensed products approved for use in residential settings",
								highlightedText: "licensed products",
							},
							{
								title: "Ensure treatments are safe for children and pets once dry.",
								highlightedText: "treatments are safe",
							},
							{
								title: "Provide a written service guarantee — if ants come back within the warranty, so do we.",
								highlightedText: "written service guarantee",
							},
							{
								title: "Carry full insurance and follow AEPMA Codes of Practice.",
								highlightedText: "full insurance",
							},
						].map((item, index) => (
							<ProcessCheckInfo key={index} {...item} />
						))}
					</div>
					<Button variant="primary" title=" 0432 227 227" icon="phone" onPress={() => {}} />
				</Hero>
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
				<LocalPestExpert />
				<FAQ items={FAQ_DATA} />
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

export default PestStudy;

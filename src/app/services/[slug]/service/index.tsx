import PestServicesSlide from "./components/PestServicesSlide";
import EcoviaProcess from "./components/EcoviaProcess";
import styles from "./style.module.css";
import Container from "@/app/components/Container";
import Header from "@/app/components/Header";
import HeaderSection from "@/app/components/HeaderSection";
import Hero from "@/app/components/Hero";
import HeroContent from "@/app/components/HeroContent";
import SectionInfo from "@/app/components/SectionInfo";
import FAQ from "@/app/components/FAQ";
import ContactFormFooter from "@/app/components/ContactFormFooter";
import Footer from "@/app/components/Footer";
import UserReviewsSection from "@/app/about-us/components/UserReviewsSection";
import { IMAGES } from "@/app/constants/images";
import { ServicePages, servicesPages } from "@/app/constants/services";

interface PageProps {
	slug: string;
}

const Service = ({ slug }: PageProps) => {
	const SERVICE_CONFIG = servicesPages[slug as ServicePages] as ServiceConfig;
	const SERVICE_FAQ_DATA = SERVICE_CONFIG.faq || [];
	const SERVICE_REVIEWS_DATA = SERVICE_CONFIG.reviews || [];

	return (
		<Container>
			<Header />
			<div className="flex flex-col gap-[60px] xl:gap-[120px]">
				{/* Jumbotron */}
				{SERVICE_CONFIG.hero && (
					<Hero bgImage={IMAGES.SERVICE_HEADER_BG} bgPosition="0 18%" contentViewClassName={styles.jumbotronContent}>
						<HeroContent
							heading={SERVICE_CONFIG.hero.heading}
							highlightedText={SERVICE_CONFIG.hero.highlightedText}
							subHeading={SERVICE_CONFIG.hero.subHeading}
							description={SERVICE_CONFIG.hero.description}
							showPhoneButton={true}
							contactButtonText="Contact Us"
						/>
					</Hero>
				)}
				{/* Residential & Commercial Info */}
				{SERVICE_CONFIG.controlMatters && (
					<div className={styles.residentialInfoSection}>
						<HeaderSection
							title={SERVICE_CONFIG.controlMatters.title!}
							highlightedText={SERVICE_CONFIG.controlMatters.highlightedText!}
							extraTitle={SERVICE_CONFIG.controlMatters.extraTitle!}
							subtitle={SERVICE_CONFIG.controlMatters.subtitle!}
							align={SERVICE_CONFIG.controlMatters.align!}
							className="header"
						/>
						<SectionInfo imageSrc={IMAGES.COMMERCIAL} imageAlt="commercial">
							<div className={styles.infoContent}>
								{SERVICE_CONFIG.controlMatters.infoItems?.map((info, index) => {
									return (
										<div key={index} className={styles.infoItem}>
											{info.boldText ? <span className={styles.boldText}>{info.boldText}</span> : null}
											{info.regularText ? (
												<span className={styles.regularText} dangerouslySetInnerHTML={{ __html: info.regularText! }} />
											) : null}
										</div>
									);
								})}
							</div>
						</SectionInfo>
					</div>
				)}
				{/* Pest Info Slides */}
				<PestServicesSlide data={SERVICE_CONFIG.pests} className={styles.pestInfoSlidesSection} />
				{/* Ecovia Process */}
				<EcoviaProcess steps={SERVICE_CONFIG.process.steps} />
				{/* Why Choose */}
				{SERVICE_CONFIG.whyChoose && (
					<Hero bgImage={IMAGES.PATTERN_BG} className={styles.processListSection}>
						<HeaderSection
							title={SERVICE_CONFIG.whyChoose.title!}
							highlightedText={SERVICE_CONFIG.whyChoose.highlightedText}
							extraTitle={SERVICE_CONFIG.whyChoose.extraTitle}
							subtitle={SERVICE_CONFIG.whyChoose.subtitle}
							align={SERVICE_CONFIG.whyChoose.align!}
							titleColor={SERVICE_CONFIG.whyChoose.titleColor}
							subtitleColor={SERVICE_CONFIG.whyChoose.subtitleColor}
							highlightedTextColor={SERVICE_CONFIG.whyChoose.highlightedTextColor}
							className="header"
						/>
						<div className={styles.infoContent}>
							{SERVICE_CONFIG.whyChoose.infoItems?.map((item, index) => (
								<div key={index} className={styles.infoItem}>
									{item.boldText && <span className={styles.boldText}>{item.boldText}</span>}
									{item.regularText && (
										<span className={styles.regularText} dangerouslySetInnerHTML={{ __html: item.regularText }} />
									)}
								</div>
							))}
						</div>
					</Hero>
				)}
				{/* Safety Measures */}
				{SERVICE_CONFIG.safetyMeasures && (
					<div className={styles.safetyMeasureSection}>
						<HeaderSection
							title={SERVICE_CONFIG.safetyMeasures.title!}
							highlightedText={SERVICE_CONFIG.safetyMeasures.highlightedText}
							extraTitle={SERVICE_CONFIG.safetyMeasures.extraTitle}
							subtitle={SERVICE_CONFIG.safetyMeasures.subtitle}
							align={SERVICE_CONFIG.safetyMeasures.align!}
							className="header"
						/>
						<SectionInfo imageSrc={IMAGES.COMMERCIAL} imageAlt="commercial">
							<div className={styles.infoContent}>
								{SERVICE_CONFIG.safetyMeasures.infoItems?.map((info, index) => {
									return (
										<div key={index} className={styles.infoItem}>
											<p className={styles.regularText} dangerouslySetInnerHTML={{ __html: info.regularText! }} />
										</div>
									);
								})}
							</div>
						</SectionInfo>
					</div>
				)}
				{/* User Reviews */}
				{SERVICE_REVIEWS_DATA.length ? <UserReviewsSection reviews={SERVICE_REVIEWS_DATA} /> : null}
				{/* Service Area Coverage */}
				{SERVICE_CONFIG.coverage && (
					<SectionInfo
						imageSrc={IMAGES.PEST_WORKER}
						imageAlt="commercial"
						isReverse
						className={styles.reverseSection}
						imageStyle={{ objectPosition: "0 10%" }}>
						<HeroContent
							heading={SERVICE_CONFIG.coverage.title!}
							highlightedText={SERVICE_CONFIG.coverage.highlightedText!}
							subHeading={SERVICE_CONFIG.coverage.subHeading!}
							headingColor="#134021"
							descriptionColor="#134021"
							description={SERVICE_CONFIG.coverage.description!}
							contentClassName={styles.reverseSectionContent}
							contactButtonText="Contact us"
						/>
					</SectionInfo>
				)}
				<FAQ items={SERVICE_FAQ_DATA} />
				<ContactFormFooter
					bgImage={IMAGES.FOOTER_BG}
					heading={SERVICE_CONFIG.footer.heading!}
					highlightedText={SERVICE_CONFIG.footer.highlightedText!}
					subHeading={SERVICE_CONFIG.footer.subHeading!}
					description={SERVICE_CONFIG.footer.description!}
				/>
				<Footer className={styles.footer} />
			</div>
		</Container>
	);
};

export default Service;

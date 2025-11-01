"use client";

import styles from "./style.module.css";
import UserReviewsSection from "@/app/about-us/components/UserReviewsSection";
import Container from "@/app/components/Container";
import Header from "@/app/components/Header";
import HeaderSection from "@/app/components/HeaderSection";
import Hero from "@/app/components/Hero";
import HeroContent from "@/app/components/HeroContent";
import SectionInfo from "@/app/components/SectionInfo";
import ProcessCheckInfo from "@/app/components/ProcessCheckInfo";
import Button from "@/app/components/Button";
import LocalPestExpert from "@/app/components/LocalPestExpert";
import FAQ from "@/app/components/FAQ";
import ContactFormFooter from "@/app/components/ContactFormFooter";
import Footer from "@/app/components/Footer";
import { PestPages, pestPages } from "@/app/constants/pests";

interface PageProps {
	slug: string;
}

const PestStudyClient = ({ slug }: PageProps) => {
	const PEST_STUDY_CONFIG = pestPages[slug as PestPages] as PestStudyConfig;
	const PEST_FAQ_DATA = PEST_STUDY_CONFIG.faq || [];
	const PEST_REVIEWS_DATA = PEST_STUDY_CONFIG.reviews || [];

	return (
		<Container>
			<Header />
			<div className="flex flex-col gap-[60px] xl:gap-[120px]">
				{/* Jumbotron */}
				{PEST_STUDY_CONFIG.hero && (
					<Hero bgImage={PEST_STUDY_CONFIG.hero.backgroundImage}>
						<HeroContent
							heading={PEST_STUDY_CONFIG.hero.heading}
							highlightedText={PEST_STUDY_CONFIG.hero.highlightedText}
							subHeading={PEST_STUDY_CONFIG.hero.subHeading}
							description={PEST_STUDY_CONFIG.hero.description}
							hideButtonSection={PEST_STUDY_CONFIG.hero.hideButtonSection}
							tag={PEST_STUDY_CONFIG.hero.tag}
						/>
					</Hero>
				)}
				{/* Control Matters */}
				{PEST_STUDY_CONFIG.controlMatters && (
					<div className={styles.controlMattersSection}>
						<HeaderSection
							title={PEST_STUDY_CONFIG.controlMatters.title}
							highlightedText={PEST_STUDY_CONFIG.controlMatters.highlightedText}
							extraTitle={PEST_STUDY_CONFIG.controlMatters.extraTitle}
							subtitle={PEST_STUDY_CONFIG.controlMatters.subtitle}
							align={PEST_STUDY_CONFIG.controlMatters.align}
							className="header"
						/>
						<SectionInfo
							imageSrc={PEST_STUDY_CONFIG.controlMatters.imageSrc}
							imageAlt={PEST_STUDY_CONFIG.controlMatters.imageAlt}>
							<div className={styles.infoContent}>
								{PEST_STUDY_CONFIG.controlMatters.infoItems?.map((item, index) => (
									<div key={index} className={styles.infoItem}>
										{item.boldText && <span className={styles.boldText}>{item.boldText}</span>}
										{item.regularText && (
											<span className={styles.regularText} dangerouslySetInnerHTML={{ __html: item.regularText }} />
										)}
									</div>
								))}
							</div>
						</SectionInfo>
					</div>
				)}
				{/* Common Ant Species*/}
				{PEST_STUDY_CONFIG.commonSpecies && (
					<div className={styles.commonSpeciesSection}>
						<HeaderSection
							title={PEST_STUDY_CONFIG.commonSpecies.title}
							highlightedText={PEST_STUDY_CONFIG.commonSpecies.highlightedText}
							extraTitle={PEST_STUDY_CONFIG.commonSpecies.extraTitle}
							subtitle={PEST_STUDY_CONFIG.commonSpecies.subtitle}
							align={PEST_STUDY_CONFIG.commonSpecies.align}
							className="header"
						/>
						<SectionInfo
							imageSrc={PEST_STUDY_CONFIG.commonSpecies.imageSrc}
							imageAlt={PEST_STUDY_CONFIG.commonSpecies.imageAlt}
							isReverse={PEST_STUDY_CONFIG.commonSpecies.isReverse}>
							<div className={styles.infoContent}>
								{PEST_STUDY_CONFIG.commonSpecies.infoItems.map((item, index) => (
									<div key={index} className={styles.infoItem}>
										{item.boldText && <span className={styles.boldText}>{item.boldText}</span>}
										{item.regularText && (
											<span className={styles.regularText} dangerouslySetInnerHTML={{ __html: item.regularText }} />
										)}
										{item.link && (
											<a href={item.link.url} className={styles.boldText} target="_blank" style={{ textDecoration: "underline" }}>
												{item.link.text}
											</a>
										)}
									</div>
								))}
							</div>
						</SectionInfo>
					</div>
				)}
				{/* Infestation Signs */}
				{PEST_STUDY_CONFIG.infestationSigns && (
					<Hero bgImage={PEST_STUDY_CONFIG.infestationSigns.backgroundImage} className={styles.infestationSigns}>
						<HeaderSection
							title={PEST_STUDY_CONFIG.infestationSigns.title}
							highlightedText={PEST_STUDY_CONFIG.infestationSigns.highlightedText}
							extraTitle={PEST_STUDY_CONFIG.infestationSigns.extraTitle}
							subtitle={PEST_STUDY_CONFIG.infestationSigns.subtitle}
							align={PEST_STUDY_CONFIG.infestationSigns.align}
							titleColor={PEST_STUDY_CONFIG.infestationSigns.titleColor}
							subtitleColor={PEST_STUDY_CONFIG.infestationSigns.subtitleColor}
							highlightedTextColor={PEST_STUDY_CONFIG.infestationSigns.highlightedTextColor}
							className="header"
						/>
						<div className={styles.infoContent}>
							{PEST_STUDY_CONFIG.infestationSigns.infoItems.map((item, index) => (
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
				{/* Services & Methods */}
				{PEST_STUDY_CONFIG.serviceMethods && (
					<div className={styles.serviceMethodsSection}>
						<HeaderSection
							title={PEST_STUDY_CONFIG.serviceMethods.title}
							highlightedText={PEST_STUDY_CONFIG.serviceMethods.highlightedText}
							extraTitle={PEST_STUDY_CONFIG.serviceMethods.extraTitle}
							subtitle={PEST_STUDY_CONFIG.serviceMethods.subtitle}
							align={PEST_STUDY_CONFIG.serviceMethods.align}
							className="header"
						/>
						<SectionInfo
							imageSrc={PEST_STUDY_CONFIG.serviceMethods.imageSrc}
							imageAlt={PEST_STUDY_CONFIG.serviceMethods.imageAlt}>
							<div className={styles.infoContent}>
								{PEST_STUDY_CONFIG.serviceMethods.infoItems.map((item, index) => (
									<div key={index} className={styles.infoItem}>
										{item.boldText && <span className={styles.boldText}>{item.boldText}</span>}
										{item.regularText && (
											<span className={styles.regularText} dangerouslySetInnerHTML={{ __html: item.regularText }} />
										)}
									</div>
								))}
							</div>
						</SectionInfo>
					</div>
				)}
				{/* What to Expect - list variant */}
				{PEST_STUDY_CONFIG.processList && (
					<Hero bgImage={PEST_STUDY_CONFIG.processList.backgroundImage} className={styles.processListSection}>
						<HeaderSection
							title={PEST_STUDY_CONFIG.processList.title}
							highlightedText={PEST_STUDY_CONFIG.processList.highlightedText}
							extraTitle={PEST_STUDY_CONFIG.processList.extraTitle}
							subtitle={PEST_STUDY_CONFIG.processList.subtitle}
							align={PEST_STUDY_CONFIG.processList.align}
							titleColor={PEST_STUDY_CONFIG.processList.titleColor}
							subtitleColor={PEST_STUDY_CONFIG.processList.subtitleColor}
							highlightedTextColor={PEST_STUDY_CONFIG.processList.highlightedTextColor}
							className="header"
						/>
						<div className={styles.infoContent}>
							{PEST_STUDY_CONFIG.processList.infoItems.map((item, index) => (
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
				{/* DIY Tips & Prevention */}
				{PEST_STUDY_CONFIG.diyTips && (
					<div className={styles.diySection}>
						<HeaderSection
							title={PEST_STUDY_CONFIG.diyTips.title}
							highlightedText={PEST_STUDY_CONFIG.diyTips.highlightedText}
							extraTitle={PEST_STUDY_CONFIG.diyTips.extraTitle}
							subtitle={PEST_STUDY_CONFIG.diyTips.subtitle}
							align={PEST_STUDY_CONFIG.diyTips.align}
							className="header"
						/>
						<SectionInfo
							imageSrc={PEST_STUDY_CONFIG.diyTips.imageSrc}
							imageAlt={PEST_STUDY_CONFIG.diyTips.imageAlt}
							isReverse={PEST_STUDY_CONFIG.diyTips.isReverse}>
							<div className={styles.infoContent}>
								{PEST_STUDY_CONFIG.diyTips.infoItems.map((item, index) => (
									<div key={index} className={styles.infoItem}>
										{item.boldText && <span className={styles.boldText}>{item.boldText}</span>}
										{item.regularText && (
											<span className={styles.regularText} dangerouslySetInnerHTML={{ __html: item.regularText }} />
										)}
									</div>
								))}
							</div>
						</SectionInfo>
					</div>
				)}
				{/* What to expect - steps variant */}
				{PEST_STUDY_CONFIG.processCheck && (
					<Hero bgImage={PEST_STUDY_CONFIG.processCheck.backgroundImage} className={styles.processCheckSection}>
						<HeaderSection
							title={PEST_STUDY_CONFIG.processCheck.title}
							highlightedText={PEST_STUDY_CONFIG.processCheck.highlightedText}
							extraTitle={PEST_STUDY_CONFIG.processCheck.extraTitle}
							subtitle={PEST_STUDY_CONFIG.processCheck.subtitle}
							align={PEST_STUDY_CONFIG.processCheck.align}
							titleColor={PEST_STUDY_CONFIG.processCheck.titleColor}
							subtitleColor={PEST_STUDY_CONFIG.processCheck.subtitleColor}
							highlightedTextColor={PEST_STUDY_CONFIG.processCheck.highlightedTextColor}
							className="header"
						/>
						<div className={styles.processCheckList}>
							{PEST_STUDY_CONFIG.processCheck.processItems.map((item, index) => (
								<ProcessCheckInfo key={index} {...item} />
							))}
						</div>
						<Button
							variant={PEST_STUDY_CONFIG.processCheck.button.variant}
							title={PEST_STUDY_CONFIG.processCheck.button.title}
							icon={PEST_STUDY_CONFIG.processCheck.button.icon}
							onPress={() => {}}
						/>
					</Hero>
				)}
				{/* User Reviews */}
				{PEST_REVIEWS_DATA.length ? <UserReviewsSection reviews={PEST_REVIEWS_DATA} /> : null}
				{/* Laws */}
				{PEST_STUDY_CONFIG.extraContent && (
					<Hero bgImage={PEST_STUDY_CONFIG.extraContent.backgroundImage} className={styles.processListSection}>
						<HeaderSection
							title={PEST_STUDY_CONFIG.extraContent.title}
							highlightedText={PEST_STUDY_CONFIG.extraContent.highlightedText}
							extraTitle={PEST_STUDY_CONFIG.extraContent.extraTitle}
							subtitle={PEST_STUDY_CONFIG.extraContent.subtitle}
							align={PEST_STUDY_CONFIG.extraContent.align}
							titleColor={PEST_STUDY_CONFIG.extraContent.titleColor}
							subtitleColor={PEST_STUDY_CONFIG.extraContent.subtitleColor}
							highlightedTextColor={PEST_STUDY_CONFIG.extraContent.highlightedTextColor}
							className="header"
						/>
						<div className={styles.infoContent}>
							{PEST_STUDY_CONFIG.extraContent.infoItems.map((item, index) => (
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
				<LocalPestExpert />
				{PEST_FAQ_DATA.length ? <FAQ items={PEST_FAQ_DATA} /> : null}
				{PEST_STUDY_CONFIG.footer && (
					<ContactFormFooter
						bgImage={PEST_STUDY_CONFIG.footer.backgroundImage}
						heading={PEST_STUDY_CONFIG.footer.heading}
						highlightedText={PEST_STUDY_CONFIG.footer.highlightedText}
						subHeading={PEST_STUDY_CONFIG.footer.subHeading}
						description={PEST_STUDY_CONFIG.footer.description}
						heroContainerClassName={styles.jumbotronFooterContent}
						showCallCta={true}
					/>
				)}
				<Footer className={styles.footer} />
			</div>
		</Container>
	);
};

export default PestStudyClient;

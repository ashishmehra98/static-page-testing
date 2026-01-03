import Image from "next/image";
import UserReviewsSection from "./components/UserReviewsSection";
import styles from "./style.module.css";
import AboutUsJumbotron from "@/app/components/AboutUsJumbotron";
import Container from "@/app/components/Container";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import SectionInfo from "@/app/components/SectionInfo";
import HeaderSection from "@/app/components/HeaderSection";
import PhoneButton from "@/app/components/PhoneButton";
import PesticideInfoSection from "@/app/components/PesticideInfoSection";
import FAQ from "@/app/components/FAQ";
import ContactFormFooter from "@/app/components/ContactFormFooter";
import Footer from "@/app/components/Footer";
import { IMAGES } from "@/app/constants/images";
import { homeScreenreviews } from "@/app/constants/reviews";
import { homeScreenFaqs } from "@/app/constants/faq";

export const dynamic = "force-static";

export default function AboutUs() {
	return (
		<Container>
			<Header />
			<div className="flex flex-col gap-[60px] xl:gap-[120px]">
				<AboutUsJumbotron
					bgImage={IMAGES.ABOUT_HEADER_BG}
					heading="Safe and Effective "
					highlightedText="Pest Control "
					subHeading="Around Sydney"
					description="Protect your home from unwanted pests today and ensure a safe, clean, and comfortable environment."
				/>
				<SectionInfo
					title="Our Commitment to "
					highlightedText="Pest Control "
					extraTitle="Solutions"
					subtitle="Founded with a passion for protecting homes and businesses, we strive to provide effective pest control services tailored to our clients' needs. Our mission is to create pest-free environments while ensuring the safety and satisfaction of our customers."
					imageSrc={IMAGES.HOME_BG}
					imageAlt="Pest control services"
					align="start"
					className={styles.commitmentSection}
				/>
				<Hero
					bgImage={IMAGES.PATTERN_BG}
					hideGradient={true}
					className={styles.trustInfoSection}
					contentViewClassName={styles.trustInfoContentSection}>
					<HeaderSection
						title="Trusted By "
						highlightedText="Households "
						extraTitle="Around Sydney"
						subtitle="Protect your home from unwanted pests today and ensure a safe, clean, and comfortable environment."
						titleColor="white"
						subtitleColor="white"
						align="center"
						className={styles.trustInfo}
					/>
					<PhoneButton variant="primary" />
					<Image src={IMAGES.FRAME_ONE} alt="frame-one" width={206} height={248} className={styles.frame} />
					<Image src={IMAGES.FRAME_TWO} alt="frame-two" width={207} height={248} className={styles.frame} />
					<Image src={IMAGES.FRAME_THREE} alt="frame-three" width={207} height={248} className={styles.frame} />
					<Image src={IMAGES.FRAME_FOUR} alt="frame-four" width={207} height={248} className={styles.frame} />
					<Image src={IMAGES.FRAME_FIVE} alt="frame-fiv" width={207} height={248} className={styles.frame} />
					<Image src={IMAGES.FRAME_SIX} alt="frame-six" width={207} height={248} className={styles.frame} />
				</Hero>
				<SectionInfo
					title="Meet Your Trusted Sydney "
					highlightedText="Pest Control Expert "
					extraTitle="For Over 10 Years"
					subtitle={`Max is among Sydney's go-to for reliable pest control. He leverages a deep understanding of the area's unique pest challenges to provide comprehensive, tailored solutions.

He expertly treats everything from common pests to complex termite and rodent issues, always prioritizing safe and eco-friendly methods. 

Partner with a seasoned professional committed to protecting your home and giving you peace of mind.`}
					imageSrc={IMAGES.TRUSTED_EXPERTS}
					imageAlt="Pest control services"
					align="start"
					className={styles.pestExpertSection}
					isReverse={true}
				/>
				<PesticideInfoSection className={styles.pesticideInfo} />
				<Hero
					bgImage={IMAGES.PATTERN_BG}
					hideGradient={true}
					contentViewClassName={styles.midHeroSectionContent}
					className={styles.midHeroSection}>
					<div className={styles.midHeroContent}>
						<HeaderSection
							title="Your Local Sydney Pest Experts"
							subtitle="Based right here in Sydney, we’re always close by to protect your home or business"
							titleColor="white"
							subtitleColor="white"
							align="start"
							subtitleClassName={styles.midHeroSubtitle}
						/>
						<PhoneButton variant="primary" />
					</div>
					<div className={styles.midHeroImage}>
						<Image src={IMAGES.LOCAL_SYDNEY_EXPERT} fill={true} alt="Local sydney expert" />
					</div>
				</Hero>
				<UserReviewsSection reviews={homeScreenreviews} />
				<FAQ items={homeScreenFaqs} />
				<ContactFormFooter
					bgImage={IMAGES.FOOTER_BG}
					heading="Book your quick & free "
					highlightedText="consultation "
					subHeading="today"
					description="Protect your home from unwanted pests today and ensure a safe, clean, and comfortable environment."
				/>
				<Footer className={styles.footer} />
			</div>
		</Container>
	);
}

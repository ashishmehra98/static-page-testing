"use client";

import Image from "next/image";
import AboutUsJumbotron from "../components/AboutUsJumbotron";
import Container from "../components/Container";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SectionInfo from "../components/SectionInfo";
import { IMAGES } from "../constants/images";
import HeaderSection from "../components/HeaderSection";
import Button from "../components/Button";
import PesticideInfoSection from "../components/PesticideInfoSection";
import UserReviews from "../components/UserReviews";
import FAQ from "../components/FAQ";
import { FAQ_DATA } from "../constants/faq";
import HomeFooterJumbotron from "../components/HomeFooterJumbotron";
import Footer from "../components/Footer";
import styles from "./style.module.css";

export default function AboutUs() {
	return (
		<Container>
			<Header />
			<div className="flex flex-col gap-[60px] xl:gap-[120px]">
				<AboutUsJumbotron
					bgImage={IMAGES.HEADER_BG}
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
				/>
				<Hero bgImage={IMAGES.PATTERN_BG} hideGradient={true} contentViewClassName={styles.heroSection}>
					<HeaderSection
						title="Trusted By "
						highlightedText="Households "
						extraTitle="Around Sydney"
						subtitle="Protect your home from unwanted pests today and ensure a safe, clean, and comfortable environment."
						titleColor="white"
						subtitleColor="white"
						align="center"
						className={styles.headerSection}
					/>
					<Button variant="primary" title="0432 227 227" icon="phone" onPress={() => {}} />
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
				/>
				<PesticideInfoSection className={styles.pesticideInfo} />
				<Hero bgImage={IMAGES.PATTERN_BG} hideGradient={true} contentViewClassName={styles.midHeroSection}>
					<div className={styles.midHeroContent}>
						<HeaderSection
							title="Your Local Sydney Pest Experts"
							subtitle="Based right here in Sydney, we’re always close by to protect your home or business"
							titleColor="white"
							subtitleColor="white"
							align="start"
							subtitleClassName={styles.midHeroSubtitle}
						/>
						<Button variant="primary" title="0432 227 227" icon="phone" onPress={() => {}} />
					</div>
				</Hero>
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
}

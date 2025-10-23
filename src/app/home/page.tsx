"use client";

import { HomeJumbotron, PestControlServices, HowWeWork, BookConsultation, BestWeOffer, Blogs } from "./components";
import { blogData } from "./data";
import styles from "./style.module.css";
import Container from "@/app/components/Container";
import Header from "@/app/components/Header";
import UserReviews from "@/app/components/UserReviews";
import FAQ from "@/app/components/FAQ";
import Footer from "@/app/components/Footer";
import ContactFormFooter from "@/app/components/ContactFormFooter";
import PesticideInfoSection from "@/app/components/PesticideInfoSection";

import { FAQ_DATA } from "@/app/constants/faq";
import { IMAGES } from "@/app/constants/images";


export default function Home() {
	const handleSeeMoreBlogs = () => {
		// Handle see more blogs click
		console.log("See more blogs clicked");
	};

	const handleLearnMore = (blogId: string) => {
		// Handle learn more click
		console.log("Learn more clicked for blog:", blogId);
	};

	return (
		<Container>
			<Header />
			<div className="flex flex-col gap-[60px] xl:gap-[120px]">
				<HomeJumbotron
					bgImage={IMAGES.HEADER_BG}
					tag="Protect Your Home Today"
					heading="Safe and Effective "
					highlightedText="Pest Control "
					subHeading="Around Sydney"
					description="Protect your home from unwanted pests today and ensure a safe, clean, and comfortable environment."
					phoneNumber="0432 227 227"
					contactButtonText="Contact us"
				/>
				<UserReviews className={styles.userReviewsSection} />
				<PestControlServices />
				<HowWeWork />
				<PesticideInfoSection />
				<BookConsultation />
				<BestWeOffer />
				<FAQ items={FAQ_DATA} />
				<Blogs blogs={blogData} onSeeMoreBlogs={handleSeeMoreBlogs} onLearnMore={handleLearnMore} />
				<ContactFormFooter
					bgImage={IMAGES.FOOTER_BG}
					heading="Book Your Quick & Free "
					highlightedText="Consultation "
					subHeading="Today"
					description="Protect your home from unwanted pests today and ensure a safe, clean, and comfortable environment."
				/>
				<Footer className={styles.footer} />
			</div>
		</Container>
	);
}

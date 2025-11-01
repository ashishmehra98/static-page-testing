"use client";

import { useRouter } from "next/navigation";
import { HomeJumbotron, PestControlServices, HowWeWork, BookConsultation, BestWeOffer, Blogs } from "./components";
import styles from "./style.module.css";
import Container from "@/app/components/Container";
import Header from "@/app/components/Header";
import UserReviews from "@/app/components/UserReviews";
import FAQ from "@/app/components/FAQ";
import Footer from "@/app/components/Footer";
import ContactFormFooter from "@/app/components/ContactFormFooter";
import PesticideInfoSection from "@/app/components/PesticideInfoSection";

import { homeScreenFaqs } from "@/app/constants/faq";
import { IMAGES } from "@/app/constants/images";
import { homeScreenreviews } from "@/app/constants/reviews";
import blogs from "@/app/constants/blogs";
import { CONTACT_NUMBER } from "@/app/constants/services";

export default function Home() {
	const router = useRouter();

	const handleSeeMoreBlogs = () => {
		// Navigate to blogs page
		router.push("/blogs");
	};

	const handleLearnMore = (title: string) => {
		router.push(`/blogs/${title}`);
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
					phoneNumber={CONTACT_NUMBER}
					contactButtonText="Contact us"
				/>
				<UserReviews reviews={homeScreenreviews} className={styles.userReviewsSection} />
				<PestControlServices />
				<HowWeWork />
				<PesticideInfoSection />
				<BookConsultation />
				<BestWeOffer />
				<FAQ items={homeScreenFaqs} />
				<Blogs blogs={blogs} onSeeMoreBlogs={handleSeeMoreBlogs} onLearnMore={handleLearnMore} />
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

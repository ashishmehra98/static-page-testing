"use client";

import Container from "./components/Container";
import Header from "./components/Header";
import HomeJumbotron from "./components/HomeJumbotron";
import UserReviews from "./components/UserReviews";
import { IMAGES } from "./constants/images";
import PestControlServices from "./components/PestControlServices";
import HowWeWork from "./components/HowWeWork";
import PesticideInfoSection from "./components/PesticideInfoSection";
import BookConsultation from "./components/BookConsultation";
import BestWeOffer from "./components/BestWeOffer";
import FAQ from "./components/FAQ";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import { FAQ_DATA } from "./constants/faq";
import HomeFooterJumbotron from "./components/HomeFooterJumbotron";

export default function Home() {
	const handleSeeMoreBlogs = () => {
		// Handle see more blogs click
		console.log("See more blogs clicked");
	};

	const handleLearnMore = (blogId: string) => {
		// Handle learn more click
		console.log("Learn more clicked for blog:", blogId);
	};

	// Sample blog data
	const blogData = [
		{
			id: "1",
			image: "/images/pest-service-thumbnail.jpg",
			date: "01/05/2025",
			title: "10 Signs You Might Have a Termite Problem",
		},
		{
			id: "2",
			image: "/images/pest-service-thumbnail.jpg",
			date: "28/04/2025",
			title: "How to Prevent Cockroach Infestations",
		},
		{
			id: "3",
			image: "/images/pest-service-thumbnail.jpg",
			date: "25/04/2025",
			title: "Safe Pest Control for Families with Children",
		},
		{
			id: "4",
			image: "/images/pest-service-thumbnail.jpg",
			date: "22/04/2025",
			title: "Common Spider Species in Sydney",
		},
		{
			id: "5",
			image: "/images/pest-service-thumbnail.jpg",
			date: "19/04/2025",
			title: "Rodent Control: Signs and Solutions",
		},
		{
			id: "6",
			image: "/images/pest-service-thumbnail.jpg",
			date: "16/04/2025",
			title: "Eco-Friendly Pest Control Methods",
		},
	];

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
				<UserReviews className="pt-[80px]" />
				<PestControlServices />
				<HowWeWork />
				<PesticideInfoSection />
				<BookConsultation />
				<BestWeOffer />
				<FAQ items={FAQ_DATA} />
				<Blogs blogs={blogData} onSeeMoreBlogs={handleSeeMoreBlogs} onLearnMore={handleLearnMore} />
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

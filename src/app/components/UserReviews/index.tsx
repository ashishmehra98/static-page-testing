"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import RatingCard from "../RatingCard";
import styles from "./UserReviews.module.css";

// Import Swiper styles
import "swiper/css";

interface ReviewData {
	id: number;
	ratings: number;
	review: string;
	userImage: string;
	username: string;
	designation: string;
}

const UserReviews: React.FC<{ className?: string }> = ({ className }) => {
	// Sample review data - 10 different reviews
	const reviews: ReviewData[] = [
		{
			id: 1,
			ratings: 5,
			review: "This company is the best out there. Their work is immaculate, and their client service is top-notch.",
			userImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
			username: "Mia Anderson",
			designation: "Social Media Manager",
		},
		{
			id: 2,
			ratings: 5,
			review: "Exceptional service and attention to detail. I've been working with them for over a year and couldn't be happier.",
			userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
			username: "David Chen",
			designation: "Marketing Director",
		},
		{
			id: 3,
			ratings: 4,
			review: "Great team, professional approach, and always delivers on time. Highly recommend their services.",
			userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
			username: "Sarah Johnson",
			designation: "CEO",
		},
		{
			id: 4,
			ratings: 5,
			review:
				"Outstanding quality and customer support. They exceeded all my expectations and delivered beyond what was promised.",
			userImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
			username: "Michael Brown",
			designation: "Product Manager",
		},
		{
			id: 5,
			ratings: 5,
			review: "Professional, reliable, and innovative. They helped transform our business with their expertise and dedication.",
			userImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
			username: "Emily Davis",
			designation: "Operations Manager",
		},
		{
			id: 6,
			ratings: 4,
			review: "Excellent communication throughout the project. They understood our needs and delivered exactly what we wanted.",
			userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
			username: "James Wilson",
			designation: "Creative Director",
		},
		{
			id: 7,
			ratings: 5,
			review: "Amazing results and great value for money. The team is knowledgeable and always available to help.",
			userImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
			username: "Lisa Garcia",
			designation: "Brand Manager",
		},
		{
			id: 8,
			ratings: 5,
			review: "Top-notch service with incredible attention to detail. They made our vision come to life perfectly.",
			userImage: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
			username: "Robert Taylor",
			designation: "Founder",
		},
		{
			id: 9,
			ratings: 4,
			review: "Reliable, professional, and results-driven. They consistently deliver high-quality work on schedule.",
			userImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
			username: "Amanda White",
			designation: "VP Marketing",
		},
		{
			id: 10,
			ratings: 5,
			review: "Exceptional work ethic and outstanding results. They've become an integral part of our success story.",
			userImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
			username: "Kevin Martinez",
			designation: "CTO",
		},
	];

	return (
		<section className={`${styles.userReviewsSection} ${className}`}>
			<div className={styles.container}>
				<div className={styles.carouselWrapper}>
					<Swiper
						modules={[Autoplay]}
						spaceBetween={24}
						slidesPerView="auto"
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						loop={true}
						speed={1000}
						className={styles.swiper}>
						{reviews.map((review) => (
							<SwiperSlide key={review.id} className={styles.slide}>
								<RatingCard
									ratings={review.ratings}
									review={review.review}
									userImage={review.userImage}
									username={review.username}
									designation={review.designation}
								/>
							</SwiperSlide>
						))}
					</Swiper>

					{/* Gradient overlays for smooth edges */}
					<div className={styles.gradientLeft}></div>
					<div className={styles.gradientRight}></div>
				</div>
			</div>
		</section>
	);
};

export default UserReviews;

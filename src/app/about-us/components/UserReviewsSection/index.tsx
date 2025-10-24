import styles from "./UserReviewsSection.module.css";
import HeaderSection from "@/app/components/HeaderSection";
import UserReviews, { ReviewData } from "@/app/components/UserReviews";

interface UserReviewsSectionProps {
	reviews?: ReviewData[];
}

export default function UserReviewsSection({ reviews }: UserReviewsSectionProps) {
	return (
		<div className={styles.userReviewsSection}>
			<HeaderSection
				title="What "
				highlightedText="Our Customers "
				extraTitle="Had To Say About Us"
				subtitle="This is what some of our customers had to say about our services after-the-fact!"
				align="start"
				className="user-reviews--header"
			/>
			<UserReviews className="user-reviews" reviews={reviews} />
		</div>
	);
}

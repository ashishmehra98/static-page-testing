import Image from "next/image";
import styles from "./BookConsultation.module.css";
import Hero from "@/app/components/Hero";
import HeaderSection from "@/app/components/HeaderSection";
import Button from "@/app/components/Button";
import RatingCard from "@/app/components/RatingCard";
import { IMAGES } from "@/app/constants/images";

const handlePhoneClick = () => {
	// Open phone dialer
	window.location.href = "tel:0432227227";
};

const BookConsultation = () => {
	return (
		<Hero bgImage={IMAGES.PATTERN_BG} hideGradient={true} contentViewClassName={styles.heroContainer}>
			<div className={styles.container}>
				{/* Left Section */}
				<div className={styles.leftSection}>
					<div className={styles.contentWrapper}>
						<HeaderSection
							title="Book your quick & free"
							titleColor="white"
							highlightedText="consultation "
							extraTitle="today"
							subtitle="Protect your home from unwanted pests today and ensure a safe, clean, and comfortable environment."
							subtitleColor="white"
							align="start"
							className="mb-0"
							subtitleClassName={styles.subTitle}
						/>
						<div className={styles.buttonContainer}>
							<Button variant="primary" title={" 0432 227 227"} onPress={handlePhoneClick} icon={"phone"} />
						</div>
					</div>
					<div className={styles.imageContainer}>
						<Image src={IMAGES.WORKER} alt="Worker" fill />
					</div>
				</div>
				{/* Right Section */}
				<div className={styles.ratingCardContainer}>
					<RatingCard
						ratings={4}
						review={"Great team, professional approach, and always delivers on time. Highly recommend their services."}
						userImage={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"}
						username={"Sarah Johnson"}
						designation={"CEO"}
					/>
					<div className={styles.buttonContainer}>
						<Button variant="primary" title={" 0432 227 227"} onPress={handlePhoneClick} icon={"phone"} />
					</div>
				</div>
			</div>
		</Hero>
	);
};

export default BookConsultation;

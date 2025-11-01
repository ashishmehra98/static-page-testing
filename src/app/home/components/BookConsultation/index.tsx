import Image from "next/image";
import styles from "./BookConsultation.module.css";
import Hero from "@/app/components/Hero";
import HeaderSection from "@/app/components/HeaderSection";
import Button from "@/app/components/Button";
import RatingCard from "@/app/components/RatingCard";
import { IMAGES } from "@/app/constants/images";
import { homeScreenreviews } from "@/app/constants/reviews";
import { CONTACT_NUMBER, CONTACT_NUMBER_TEL } from "@/app/constants/services";

const handlePhoneClick = () => {
	// Open phone dialer
	window.location.href = `tel:${CONTACT_NUMBER_TEL}`;
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
							<Button variant="primary" title={` ${CONTACT_NUMBER}`} onPress={handlePhoneClick} icon={"phone"} />
						</div>
					</div>
					<div className={styles.imageContainer}>
						<Image src={IMAGES.WORKER} alt="Worker" fill />
					</div>
				</div>
				{/* Right Section */}
				<div className={styles.ratingCardContainer}>
					<RatingCard
						ratings={5}
						review={homeScreenreviews[0].review}
						username={homeScreenreviews[0].username}
						designation={homeScreenreviews[4].designation}
						userImage=""
					/>
					<div className={styles.buttonContainer}>
						<Button variant="primary" title={` ${CONTACT_NUMBER}`} onPress={handlePhoneClick} icon={"phone"} />
					</div>
				</div>
			</div>
		</Hero>
	);
};

export default BookConsultation;

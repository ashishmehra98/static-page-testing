import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./HowWeWork.module.css";
import Hero from "@/app/components/Hero";
import HeaderSection from "@/app/components/HeaderSection";
import Button from "@/app/components/Button";
import Info from "@/app/components/Info";
import { IMAGES } from "@/app/constants/images";
import { CONTACT_NUMBER, CONTACT_NUMBER_TEL } from "@/app/constants/services";

const HowWeWork = () => {
	const router = useRouter();
	return (
		<Hero bgImage={IMAGES.PATTERN_BG} hideGradient={true} className={styles.heroSection}>
			<div className={styles.container}>
				<HeaderSection
					title="How We"
					titleColor="white"
					highlightedText="Work"
					subtitle="Protect your home from unwanted pests today and ensure a safe, clean, and comfortable environment."
					subtitleColor="white"
					align="start"
					className={styles.headerSection}
					subtitleClassName={styles.subTitleSection}
				/>
				<div className={styles.buttonGroup}>
					<Button
						variant="primary"
						title={CONTACT_NUMBER}
						onPress={() => window.open(`tel:${CONTACT_NUMBER_TEL}`)}
						icon={"phone"}
					/>
					<Button variant="light" title={"Contact us"} onPress={() => router.push("/contact-us")} icon={"email-secondary"} />
				</div>
			</div>
			<div className={styles.contentWrapper}>
				<div className={styles.buttonGroup}>
					<Button
						variant="primary"
						title={CONTACT_NUMBER}
						onPress={() => window.open(`tel:${CONTACT_NUMBER_TEL}`)}
						icon={"phone"}
					/>
					<Button variant="light" title={"Contact us"} onPress={() => router.push("/contact-us")} icon={"email-secondary"} />
				</div>
				<div className={styles.imageContainer}>
					<Image src={IMAGES.INSECTION_SERVICE} alt="Inspection process" loading="lazy" fill />
				</div>
				<div className={styles.infoContainer}>
					<Info icon="support" title="Initial Consultation" description="We begin with a detailed assessment of your home" />
					<Info icon="document" title="Treatment Plan" description="We begin with a detailed assessment of your home" />
					<Info icon="stars" title="Implementation" description="We begin with a detailed assessment of your home" />
				</div>
			</div>
		</Hero>
	);
};

export default HowWeWork;

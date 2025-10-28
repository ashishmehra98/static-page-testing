import React from "react";
import HeaderSection from "../HeaderSection";
import styles from "./LocalPestExpert.module.css";

const LocalPestExpert: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<section className={`${styles.localPestExpert}${className ? ` ${className}` : ""}`}>
			<HeaderSection
				title="Your "
				highlightedText="Local Sydney"
				extraTitle=" Pest Experts"
				subtitle="Based right here in Sydney, we're always close by to protect your home or business"
				align="center"
			/>

			<div className={styles.mapSection}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.10263946606!2d150.6517953!3d-33.8473567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f17.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
					width="100%"
					height="100%"
					style={{ border: 0, borderRadius: "13px" }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title="Sydney Map"></iframe>
			</div>

			<div className={styles.infoSection}>
				<div className={styles.infoItem}>
					<p className={styles.infoText}>
						<span className={styles.infoBold}>We Know Sydney’s Pests </span>
						<br />
						<br />
						<span className={styles.infoRegular}>
							From coastal cockroaches to suburban termites, Sydney’s pests are unique to its environment. Our team combines local
							experience with modern, eco-friendly methods to deliver lasting results tailored to your area.
						</span>
					</p>
				</div>
				<div className={styles.infoItem}>
					<p className={styles.infoText}>
						<span className={styles.infoBold}>Trusted by Locals</span>
						<br />
						<br />
						<span className={styles.infoRegular}>
							Ecovia has earned a reputation for dependable, professional service. Every technician is licensed, fully insured,
							and committed to safe, effective pest management that keeps your family, pets, and property protected.
						</span>
					</p>
				</div>
				<div className={styles.infoItem}>
					<p className={styles.infoText}>
						<span className={styles.infoBold}>Fast Service Across Australia </span>
						<br />
						<br />
						<span className={styles.infoRegular}>
							Whether you’re in the Inner West, North Shore, or Western Suburbs, our mobile technicians are never far away. We
							offer same-day response for urgent jobs and flexible scheduling for your convenience.
						</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default LocalPestExpert;

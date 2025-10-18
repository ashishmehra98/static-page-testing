"use client";

import React from "react";
import Image from "next/image";
import { ICONS } from "../../constants/icons";
import styles from "./Footer.module.css";

interface FooterProps {
	className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
	const handleNavigationClick = (section: string) => {
		console.log(`Navigate to ${section}`);
		// Add smooth scrolling or navigation logic here
	};

	const handleSocialClick = (platform: string) => {
		console.log(`Open ${platform} profile`);
		// Add social media link logic here
	};

	const handlePolicyClick = (policy: string) => {
		console.log(`Open ${policy} page`);
		// Add policy page navigation logic here
	};

	return (
		<footer className={`${styles.footer} ${className || ""}`}>
			<div className={styles.content}>
				{/* Logo */}
				<div className={styles.logoContainer}>
					<Image src={ICONS.logo} alt="Ecovia Pest Control Logo" width={202} height={65} className={styles.logo} />
				</div>

				{/* Navigation Links */}
				<nav className={styles.navigation}>
					<button className={styles.navLink} onClick={() => handleNavigationClick("about")}>
						About
					</button>
					<button className={styles.navLink} onClick={() => handleNavigationClick("services")}>
						Services
					</button>
					<button className={styles.navLink} onClick={() => handleNavigationClick("testimonials")}>
						Testimonials
					</button>
				</nav>

				{/* Social Media Icons */}
				<div className={styles.socialContainer}>
					<button
						className={styles.socialButton}
						onClick={() => handleSocialClick("facebook")}
						aria-label="Visit our Facebook page">
						<Image src={ICONS.facebook} alt="Facebook" width={24} height={24} />
					</button>
					<button
						className={styles.socialButton}
						onClick={() => handleSocialClick("instagram")}
						aria-label="Visit our Instagram page">
						<Image src={ICONS.instagram} alt="Instagram" width={24} height={24} />
					</button>
				</div>
			</div>

			{/* Divider */}
			<div className={styles.divider} />

			{/* Footer Meta */}
			<div className={styles.footerMeta}>
				<p className={styles.copyright}>© 2025 Ecovia Pest Control. All rights reserved.</p>
				<div className={styles.policyLinks}>
					<button className={styles.policyLink} onClick={() => handlePolicyClick("privacy")}>
						Privacy Policy
					</button>
					<button className={styles.policyLink} onClick={() => handlePolicyClick("cookies")}>
						Cookies Settings
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

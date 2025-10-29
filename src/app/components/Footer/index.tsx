"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ICONS } from "../../constants/icons";
import styles from "./Footer.module.css";

interface FooterProps {
	className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
	const router = useRouter();

	const handleNavigationClick = (section: string) => {
		// Navigate to appropriate page
		const routes: { [key: string]: string } = {
			about: "/about-us",
			services: "/services",
			blogs: "/blogs", // Assuming testimonials are in blogs
			pests: "/pests",
		};

		if (routes[section]) {
			router.push(routes[section]);
		}
	};

	const handleSocialClick = (platform: string) => {
		console.log(`Open ${platform} profile`);
		// Add social media link logic here
	};

	return (
		<footer className={`${styles.footer} ${className || ""}`}>
			<div className={styles.content}>
				{/* Logo */}
				<div className={styles.logoContainer}>
					<Image src={ICONS.logo} alt="Ecovia Logo" fill className={styles.logo} />
				</div>
				<div className={styles.divider} />

				{/* Navigation Links */}
				<nav className={styles.navigation}>
					<button className={styles.navLink} onClick={() => handleNavigationClick("about")}>
						About
					</button>
					<button className={styles.navLink} onClick={() => handleNavigationClick("pests")}>
						Pests
					</button>
					<button className={styles.navLink} onClick={() => handleNavigationClick("services")}>
						Services
					</button>
					<button className={styles.navLink} onClick={() => handleNavigationClick("blogs")}>
						Blogs
					</button>
					{/* <button className={styles.policyLink} onClick={() => handlePolicyClick("privacy")}>
						Privacy Policy
					</button>
					<button className={styles.policyLink} onClick={() => handlePolicyClick("cookies")}>
						Cookies Settings
					</button> */}
				</nav>

				<div className={styles.divider} />

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
				{/* <div className={styles.policyLinks}>
					<button className={styles.policyLink} onClick={() => handlePolicyClick("privacy")}>
						Privacy Policy
					</button>
					<button className={styles.policyLink} onClick={() => handlePolicyClick("cookies")}>
						Cookies Settings
					</button>
				</div> */}
			</div>
		</footer>
	);
};

export default Footer;

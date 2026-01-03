import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ICONS } from "../../constants/icons";
import styles from "./Footer.module.css";

interface FooterProps {
	className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
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
					<Link href="/about-us" className={styles.navLink}>
						About
					</Link>
					<Link href="/pests" className={styles.navLink}>
						Pests
					</Link>
					<Link href="/services" className={styles.navLink}>
						Services
					</Link>
					<Link href="/blogs" className={styles.navLink}>
						Blogs
					</Link>
					{/* <Link href="/privacy-policy" className={styles.policyLink}>
						Privacy Policy
					</Link>
					<Link href="/cookies-settings" className={styles.policyLink}>
						Cookies Settings
					</Link> */}
				</nav>

				<div className={styles.divider} />

				{/* Social Media Icons */}
				<div className={styles.socialContainer}>
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.socialButton}
						aria-label="Visit our Facebook page">
						<Image src={ICONS.facebook} alt="Facebook" width={24} height={24} />
					</a>
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.socialButton}
						aria-label="Visit our Instagram page">
						<Image src={ICONS.instagram} alt="Instagram" width={24} height={24} />
					</a>
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

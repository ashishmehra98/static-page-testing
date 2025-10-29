"use client";

import React from "react";
import { useRouter } from "next/navigation";
import MenuButton from "../MenuButton";
import styles from "./MobileNavigation.module.css";

interface MobileNavigationProps {
	isOpen: boolean;
	onClose: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
	const router = useRouter();

	if (!isOpen) return null;

	const handleLinkClick = (href: string) => {
		// Handle navigation
		router.push(href);
		onClose();
	};

	return (
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.container} onClick={(e) => e.stopPropagation()}>
				{/* Close button */}
				<MenuButton isOpen={true} className={styles.closeButton} onToggle={onClose} />

				{/* Content */}
				<div className={styles.content}>
					{/* Navigation Links */}
					<nav className={styles.navigation}>
						<button className={styles.navLink} onClick={() => handleLinkClick("/about-us")}>
							about
						</button>
						<button className={styles.navLink} onClick={() => handleLinkClick("/pests")}>
							pests
						</button>
						<button className={styles.navLink} onClick={() => handleLinkClick("/services")}>
							services
						</button>
						<button className={styles.navLink} onClick={() => handleLinkClick("/blogs")}>
							blogs
						</button>
					</nav>

					{/* Divider */}
					{/* <div className={styles.divider} /> */}

					{/* Additional Links */}
					{/* <div className={styles.additionalLinks}>
						<button className={styles.additionalLink} onClick={() => handleLinkClick("/privacy-policy")}>
							Privacy Policy
						</button>
						<button className={styles.additionalLink} onClick={() => handleLinkClick("/cookies-settings")}>
							Cookies Settings
						</button>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default MobileNavigation;

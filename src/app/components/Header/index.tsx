import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "../Button";
import { ICONS } from "../../constants/icons";
import MenuButton from "../MenuButton";
import MobileNavigation from "../MobileNavigation";
import styles from "./Header.module.css";
import { CONTACT_NUMBER, CONTACT_NUMBER_TEL } from "@/app/constants/services";

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const router = useRouter();

	const handlePhoneClick = () => {
		// Handle phone button click - could open phone dialer
		window.location.href = `tel:${CONTACT_NUMBER_TEL}`;
	};

	const handleContactClick = () => {
		// Navigate to contact page
		router.push("/contact-us");
	};

	return (
		<>
			<header className={`flex flex-row justify-center items-center ${styles.header}`}>
				<div className={styles.nav}>
					<div className={styles.logoAndLinks}>
						<Link href="/" className={styles.logoContainer}>
							<Image src={ICONS.logo} alt="Ecovia Logo" fill className={styles.logo} />
						</Link>
						<nav className={styles.navigation}>
							<Link href="/about-us" className={styles.navLink}>
								about
							</Link>
							<Link href="/pests" className={styles.navLink}>
								pests
							</Link>
							<Link href="/services" className={styles.navLink}>
								services
							</Link>
							<Link href="/blogs" className={styles.navLink}>
								blogs
							</Link>
						</nav>
					</div>
					<div className={styles.buttonsContainer}>
						<Button variant="primary" title={CONTACT_NUMBER} onPress={handlePhoneClick} icon="phone" />
						<Button variant="secondary" title="Contact us" onPress={handleContactClick} icon="email" />
					</div>
					<MenuButton onToggle={() => setIsMenuOpen((prev) => !prev)} isOpen={isMenuOpen} className={styles.menuBtn} />
				</div>
			</header>
			<MobileNavigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
		</>
	);
};

export default Header;

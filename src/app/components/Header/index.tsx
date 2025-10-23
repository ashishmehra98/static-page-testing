import React, { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import { ICONS } from "../../constants/icons";
import MenuButton from "../MenuButton";
import MobileNavigation from "../MobileNavigation";
import styles from "./Header.module.css";

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handlePhoneClick = () => {
		// Handle phone button click
		console.log("Phone button clicked");
	};

	const handleContactClick = () => {
		// Handle contact button click
		console.log("Contact button clicked");
	};

	return (
		<>
			<header className={`flex flex-row justify-center items-center ${styles.header}`}>
				<div className={styles.nav}>
					<div className={styles.logoAndLinks}>
						<div className={styles.logoContainer}>
							<Image src={ICONS.logo} alt="Ecovia Logo" fill className={styles.logo} />
						</div>
						<nav className={styles.navigation}>
							<a href="#about" className={styles.navLink}>
								about
							</a>
							<a href="#services" className={styles.navLink}>
								services
							</a>
							<a href="#testimonials" className={styles.navLink}>
								testimonials
							</a>
						</nav>
					</div>
					<div className={styles.buttonsContainer}>
						<Button variant="primary" title="0432 227 227" onPress={handlePhoneClick} icon="phone" />
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

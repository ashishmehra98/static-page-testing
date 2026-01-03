import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ICONS } from "../../constants/icons";
import styles from "./Header.module.css";
import HeaderButtons from "./HeaderButtons";
import HeaderMobileMenu from "./HeaderMobileMenu";

const Header: React.FC = () => {
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
					<HeaderButtons />
					<HeaderMobileMenu />
				</div>
			</header>
		</>
	);
};

export default Header;

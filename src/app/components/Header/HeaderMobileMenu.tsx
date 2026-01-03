"use client";

import React, { useState } from "react";
import MenuButton from "../MenuButton";
import MobileNavigation from "../MobileNavigation";
import styles from "./Header.module.css";

const HeaderMobileMenu: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<MenuButton onToggle={() => setIsMenuOpen((prev) => !prev)} isOpen={isMenuOpen} className={styles.menuBtn} />
			<MobileNavigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
		</>
	);
};

export default HeaderMobileMenu;

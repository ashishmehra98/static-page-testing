"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Button from "../Button";
import styles from "./Header.module.css";
import { CONTACT_NUMBER, CONTACT_NUMBER_TEL } from "@/app/constants/services";

const HeaderButtons: React.FC = () => {
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
		<div className={styles.buttonsContainer}>
			<Button variant="primary" title={CONTACT_NUMBER} onPress={handlePhoneClick} icon="phone" />
			<Button variant="secondary" title="Contact us" onPress={handleContactClick} icon="email" />
		</div>
	);
};

export default HeaderButtons;

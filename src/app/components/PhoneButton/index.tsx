"use client";

import React from "react";
import Button from "../Button";
import { CONTACT_NUMBER, CONTACT_NUMBER_TEL } from "@/app/constants/services";

interface PhoneButtonProps {
	variant?: "primary" | "secondary" | "light";
	className?: string;
	disabled?: boolean;
	isLoading?: boolean;
}

const PhoneButton: React.FC<PhoneButtonProps> = ({ variant = "primary", className, disabled = false, isLoading = false }) => {
	const onPhoneClick = () => {
		window.open(`tel:${CONTACT_NUMBER_TEL}`);
	};

	return (
		<Button
			variant={variant}
			title={CONTACT_NUMBER}
			icon="phone"
			onPress={onPhoneClick}
			className={className}
			disabled={disabled}
			isLoading={isLoading}
		/>
	);
};

export default PhoneButton;

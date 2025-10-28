import React from "react";
import Spider from "./Spider";
import Ants from "./Ants";
import BedBug from "./BedBug";
import Bees from "./Bees";
import Rodents from "./Rodents";
import { InsectsProps } from "./types";

export interface InsectVariantProps extends InsectsProps {
	insectType: "spider" | "ants" | "bedbug" | "bees" | "rodents" | null;
}

const Insects: React.FC<InsectVariantProps> = ({ insectType, variant = "small", color = "#134021" }) => {
	const props = { variant, color };

	if (insectType === null) {
		return null;
	}

	switch (insectType) {
		case "spider":
			return <Spider {...props} />;
		case "ants":
			return <Ants {...props} />;
		case "bedbug":
			return <BedBug {...props} />;
		case "bees":
			return <Bees {...props} />;
		case "rodents":
			return <Rodents {...props} />;
		default:
			return <Spider {...props} />;
	}
};

export default Insects;

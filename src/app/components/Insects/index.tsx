import React from "react";
import Spider from "./Spider";
import Ants from "./Ants";
import BedBug from "./BedBug";
import Bees from "./Bees";
import Rodents from "./Rodents";
import Bird from "./Bird";
import Cockroach from "./Cockroach";
import Fly from "./Fly";
import Mosquito from "./Mosquito";
import Moth from "./Moth";
import Possum from "./Possum";
import Wasp from "./Wasp";
import Beetle from "./Beetle";
import { InsectsProps } from "./types";

export interface InsectVariantProps extends InsectsProps {
	insectType: Insects;
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
		case "bird":
			return <Bird {...props} />;
		case "cockroach":
			return <Cockroach {...props} />;
		case "fly":
			return <Fly {...props} />;
		case "mosquito":
			return <Mosquito {...props} />;
		case "moth":
			return <Moth {...props} />;
		case "possum":
			return <Possum {...props} />;
		case "wasp":
			return <Wasp {...props} />;
		case "beetle":
			return <Beetle {...props} />;
		default:
			return <Spider {...props} />;
	}
};

export default Insects;

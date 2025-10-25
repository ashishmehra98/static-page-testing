import { IMAGES } from "./images";
import antPestStudyData from "./pests/ant-pest-study";
import bedBugsPestStudyData from "./pests/bed-bugs-pest-study";
import beePestStudyData from "./pests/bee-pest-study";
import birdPestStudyData from "./pests/bird-pest-study";
import carpetBeetlePestStudyData from "./pests/carpet-beetle-pest-study";
import cockroachPestStudyData from "./pests/cockroach-pest-study";
import fliesPestStudyData from "./pests/fly-pest-study";
import mosquitoPestStudyData from "./pests/mosquito-pest-study";
import possumPestStudyData from "./pests/possum-pest-study";
import ratsMicePestStudyData from "./pests/rats-mice-pest-study";
import storedProductPestStudyData from "./pests/stored-product-pest-study";
import waspsPestStudyData from "./pests/wasps-pest-study";

export const pestPages = {
	"ant-pest-control-sydney": antPestStudyData,
	"bed-bug-pest-control": bedBugsPestStudyData,
	"bee-pest-control": beePestStudyData,
	"bird-pest-control": birdPestStudyData,
	"carpet-beetle-pest-control": carpetBeetlePestStudyData,
	"cockroach-pest-control": cockroachPestStudyData,
	"fly-pest-control": fliesPestStudyData,
	"mosquito-pest-control": mosquitoPestStudyData,
	"possum-pest-control": possumPestStudyData,
	"rats-mice-pest-control": ratsMicePestStudyData,
	"stored-product-pests-control": storedProductPestStudyData,
	"wasp-pest-control": waspsPestStudyData,
};

export type Pages = keyof typeof pestPages;

export const pestData = [
	{
		imageSrc: IMAGES.PEST_COCKROACHES,
		imageAlt: "Cockroaches",
		pestName: "Cockroaches",
		commonSigns: "Droppings, greasy marks behind appliances, live sightings",
		treatment:
			"Use gel baits, residual sprays, and deep cleaning of hiding places. We'll also advise on restricting food and moisture sources",
		path: "cockroach-pest-control" as Pages,
	},
	{
		imageSrc: IMAGES.PEST_ANTS,
		imageAlt: "Ants",
		pestName: "Ants (especially sugar / coastal / carpenter ants)",
		commonSigns: "Trails in kitchens, food cupboards, small mounds near foundations",
		treatment:
			"We locate nests, apply targeted baiting (low-toxicity), spray entry points, and seal cracks. Regular follow-ups help stop recurrence",
		path: "ant-pest-control-sydney" as Pages,
	},
	{
		imageSrc: IMAGES.PEST_RODENTS,
		imageAlt: "Rodents",
		pestName: "Rodents (rats & mice)",
		commonSigns: "Gnawed wires / wood, droppings, scrambling in roof spaces",
		treatment: "Use enclosed baits, traps, exclusion work (sealing entry points). Inspect attics, walls, subfloors for nests",
		path: "rats-mice-pest-control" as Pages,
	},
	{
		imageSrc: IMAGES.PEST_SPIDER,
		imageAlt: "Spiders",
		pestName: "Spiders (including dangerous species)",
		commonSigns: "Webs in corners, sightings in dark areas",
		treatment: "We use safe sprays and residual barrier treatments. We also reduce harbourage in storage and garden areas",
		path: "stored-product-pests-control" as Pages,
	},
	{
		imageSrc: IMAGES.PEST_BED_BUGS,
		imageAlt: "Bed Bugs",
		pestName: "Bed bugs, fleas, wasps, silverfish, ants in lawns",
		commonSigns: "Bites, nest in walls or under eaves, holes in fabrics",
		treatment:
			"Treatments adapted per pest type — e.g. mattress treatments, insecticide dust in wall voids, spray for wasp nests",
		path: "bed-bug-pest-control" as Pages,
	},
];

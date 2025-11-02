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
import spiderPestStudyData from "./pests/spider-pest-study";
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
	"spider-pest-control-study": spiderPestStudyData,
	"stored-product-pests-control": storedProductPestStudyData,
	"wasp-pest-control": waspsPestStudyData,
};

export type PestPages = keyof typeof pestPages;

export const pestData = [
	{
		imageSrc: IMAGES.PEST_COCKROACHES,
		imageAlt: "Cockroaches",
		pestName: "Cockroaches",
		commonSigns: "Droppings, greasy marks behind appliances, live sightings",
		treatment:
			"Use gel baits, residual sprays, and deep cleaning of hiding places. We'll also advise on restricting food and moisture sources",
		path: "cockroach-pest-control" as PestPages,
	},
	{
		imageSrc: IMAGES.PEST_ANTS,
		imageAlt: "Ants",
		pestName: "Ants (especially sugar / coastal / carpenter ants)",
		commonSigns: "Trails in kitchens, food cupboards, small mounds near foundations",
		treatment:
			"We locate nests, apply targeted baiting (low-toxicity), spray entry points, and seal cracks. Regular follow-ups help stop recurrence",
		path: "ant-pest-control-sydney" as PestPages,
	},
	{
		imageSrc: IMAGES.PEST_RODENTS,
		imageAlt: "Rodents",
		pestName: "Rodents (rats & mice)",
		commonSigns: "Gnawed wires / wood, droppings, scrambling in roof spaces",
		treatment: "Use enclosed baits, traps, exclusion work (sealing entry points). Inspect attics, walls, subfloors for nests",
		path: "rats-mice-pest-control" as PestPages,
	},
	{
		imageSrc: IMAGES.PEST_SPIDER,
		imageAlt: "Spiders",
		pestName: "Spiders (including dangerous species)",
		commonSigns: "Webs in corners, sightings in dark areas",
		treatment: "We use safe sprays and residual barrier treatments. We also reduce harbourage in storage and garden areas",
		path: "spider-pest-control-study" as PestPages,
	},
	{
		imageSrc: IMAGES.PEST_BED_BUGS,
		imageAlt: "Bed Bugs",
		pestName: "Bed bugs, fleas, wasps, silverfish, ants in lawns",
		commonSigns: "Bites, nest in walls or under eaves, holes in fabrics",
		treatment:
			"Treatments adapted per pest type — e.g. mattress treatments, insecticide dust in wall voids, spray for wasp nests",
		path: "bed-bug-pest-control" as PestPages,
	},
	{
		imageSrc: IMAGES.BEES_PEST_STUDY_BG,
		imageAlt: "Bees",
		pestName: "Bees (including honey bees and carpenter bees)",
		commonSigns: "Buzzing in walls, visible hives, increased activity around eaves",
		treatment:
			"We use humane relocation where possible, hive removal, and cavity sealing. Professional handling ensures safe removal and prevents recurrence",
		path: "bee-pest-control" as PestPages,
	},
	{
		imageSrc: IMAGES.BIRD_PEST_STUDY_BG,
		imageAlt: "Birds",
		pestName: "Birds (pigeons, ibis, mynas, starlings)",
		commonSigns: "Droppings accumulation, nesting materials in gutters, noise at dawn",
		treatment:
			"We install proofing systems (netting, spikes, mesh), remove nests safely, and clean affected areas. Regular monitoring prevents return",
		path: "bird-pest-control" as PestPages,
	},
	{
		imageSrc: IMAGES.CARPET_BEETLE_PEST_STUDY_BG,
		imageAlt: "Carpet Beetle",
		pestName: "Carpet beetles (and fabric pests)",
		commonSigns: "Holes in fabrics, shed larvae skins, damage to wool and silk items",
		treatment:
			"We apply targeted treatments to affected areas, treat larvae hiding spots, and provide advice on protecting fabrics. Follow-ups ensure complete removal",
		path: "carpet-beetle-pest-control" as PestPages,
	},
	{
		imageSrc: IMAGES.FLIES_PEST_STUDY_BG,
		imageAlt: "Flies",
		pestName: "Flies (house flies, fruit flies, blowflies)",
		commonSigns: "Frequent sightings, buzzing sounds, presence near food sources",
		treatment:
			"We identify breeding sites, apply residual treatments, and install fly control systems. We'll advise on sanitation to eliminate attractants",
		path: "fly-pest-control" as PestPages,
	},
	{
		imageSrc: IMAGES.MOSQUITOES_PEST_STUDY_BG,
		imageAlt: "Mosquitoes",
		pestName: "Mosquitoes (disease vectors and nuisance species)",
		commonSigns: "Biting at dawn/dusk, standing water nearby, buzzing in outdoor areas",
		treatment:
			"We treat breeding sites, apply barrier sprays, and remove water sources. Our methods reduce mosquito populations while being safe for families",
		path: "mosquito-pest-control" as PestPages,
	},
	{
		imageSrc: IMAGES.POSSUM_PEST_STUDY_BG,
		imageAlt: "Possum",
		pestName: "Possums (brushtail and ringtail possums)",
		commonSigns: "Noise in roof at night, droppings, entry points visible on roof",
		treatment:
			"We use humane exclusion methods, install one-way doors, and seal entry points. We follow regulations for protected wildlife handling",
		path: "possum-pest-control" as PestPages,
	},
	{
		imageSrc: IMAGES.STORED_PRODUCT_PESTS_PEST_STUDY_BG,
		imageAlt: "Stored Product Pests",
		pestName: "Stored product pests (pantry moths, grain beetles)",
		commonSigns: "Larvae in food packages, webbing in cupboards, small beetles in grains",
		treatment:
			"We inspect and treat pantry areas, dispose of infested food, and apply targeted treatments. We'll guide on proper food storage practices",
		path: "stored-product-pests-control" as PestPages,
	},
	{
		imageSrc: IMAGES.WASPS_PEST_STUDY_BG,
		imageAlt: "Wasps",
		pestName: "Wasps (European wasps and paper wasps)",
		commonSigns: "Nests under eaves, aggressive behaviour, visible wasp activity",
		treatment:
			"We locate and remove nests safely, apply residual treatments to prevent return, and provide advice on preventing future nesting. Safety is our priority",
		path: "wasp-pest-control" as PestPages,
	},
];

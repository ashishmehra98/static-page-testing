import ecoFriendlyPestServiceData from "./services/eco-friendly-pest-control-service";
import industrialPestControlServiceData from "./services/industrial-pest-control-service";
import commercialPestControlServiceData from "./services/commercial-pest-control-service";
import constructionSitePestControlServiceData from "./services/construction-site-pest-control-service";
import residentialPestControlServiceData from "./services/residential-pest-control-service";
import strataPestControlServiceData from "./services/strata-pest-control-service";
import { IMAGES } from "./images";

export const CONTACT_NUMBER = "0413 054 112";
export const CONTACT_NUMBER_TEL = "+61413054112";

const services: Service[] = [
	{
		id: "general-pest-control",
		title: "General Pest Control",
		description:
			"Keep your home or business free from common pests like cockroaches, ants, spiders, and rodents. Ecovia's technicians use targeted treatments that are safe for families, pets, and the environment while delivering long-lasting protection.",
	},
	{
		id: "industrial-pest-control",
		title: "Industrial Pest Control",
		description:
			"Protect factories, warehouses, and production sites from pest infestations that threaten hygiene and compliance. Our industrial programs focus on prevention, monitoring, and rapid response using eco-certified solutions that meet Australian standards.",
	},
	{
		id: "commercial-pest-management",
		title: "Commercial Pest Management",
		description:
			"Maintain a pest-free workplace with tailored treatment plans for offices, retail spaces, hospitality, and healthcare facilities. We offer discreet service, detailed reporting, and flexible scheduling to minimise business disruption.",
	},
	{
		id: "termite-management",
		title: "Termite Management",
		description:
			"Safeguard your property from costly termite damage. Ecovia provides thorough inspections, soil barrier treatments, and ongoing monitoring systems to detect and eliminate termites before they spread.",
	},
	{
		id: "insect-control",
		title: "Insect Control",
		description:
			"Stop insects before they become a nuisance. We provide fast and effective treatments for ants, flies, mosquitoes, wasps, silverfish, and more—using low-toxicity products and targeted application for maximum safety and effectiveness.",
	},
	{
		id: "bed-bug-treatments",
		title: "Bed Bug Treatments",
		description:
			"Eliminate bed bugs quickly and safely with Ecovia's proven heat and chemical combination methods. We inspect, treat, and follow up to ensure complete eradication and long-term protection.",
	},
	{
		id: "bird-control",
		title: "Bird Control",
		description:
			"Protect buildings and outdoor areas from nuisance birds such as pigeons and seagulls. Our humane control options include netting, spikes, and deterrent systems designed to prevent roosting and protect property hygiene.",
	},
	{
		id: "stored-product-pest-control",
		title: "Stored Product Pest Control",
		description:
			"Keep stored goods free from insects such as weevils, moths, and beetles. We specialise in protecting food storage and distribution sites through preventive treatments, fumigation options, and ongoing monitoring programs.",
	},
	{
		id: "eco-friendly-pest-management",
		title: "Eco-Friendly Pest Management",
		description:
			"Ecovia leads with environmentally responsible pest control. We use biodegradable products, targeted application methods, and integrated pest management (IPM) strategies to keep your property safe without harming the planet.",
	},
];

const servicesPages = {
	"eco-friendly-pest-control": ecoFriendlyPestServiceData,
	"industrial-pest-control": industrialPestControlServiceData,
	"commercial-pest-control": commercialPestControlServiceData,
	"construction-site-pest-control": constructionSitePestControlServiceData,
	"residential-pest-control": residentialPestControlServiceData,
	"strata-pest-control": strataPestControlServiceData,
};

export type ServicePages = keyof typeof servicesPages;

const servicesIndexPage = [
	{
		id: 1,
		imageSrc: IMAGES.RESIDENTIAL_PEST_CONTROL,
		imageAlt: "Residential pest control service",
		serviceNumber: "01/",
		serviceName: "Residential pest control",
		serviceDescription:
			"Keep your Sydney home pest-free with Ecovia's fast, safe residential pest control. We tackle ants, rodents, cockroaches, and more with family-friendly methods.",
		ctaText: "Book a free consultation",
		path: "residential-pest-control" as ServicePages,
	},
	{
		id: 2,
		imageSrc: IMAGES.INDUSTRIAL_PEST_CONTROL,
		imageAlt: "Industrial pest control service",
		serviceNumber: "02/",
		serviceName: "Industrial pest control",
		serviceDescription:
			"Protect your industrial site with Ecovia's professional pest control. Treatments and prevention plans that meet strict industry standards across Sydney.",
		ctaText: "Book a free consultation",
		path: "industrial-pest-control" as ServicePages,
	},
	{
		id: 3,
		imageSrc: IMAGES.COMMERCIAL_PEST_CONTROL,
		imageAlt: "Commercial pest control service",
		serviceNumber: "03/",
		serviceName: "Commercial pest control",
		serviceDescription:
			"Keep your business safe and compliant with Ecovia's professional commercial pest control. Discreet, effective pest management for Sydney businesses.",
		ctaText: "Book a free consultation",
		path: "commercial-pest-control" as ServicePages,
	},
	{
		id: 4,
		imageSrc: IMAGES.CONSTRUCTION_SITE_PEST_CONTROL,
		imageAlt: "Construction site pest control service",
		serviceNumber: "04/",
		serviceName: "Construction site pest control",
		serviceDescription:
			"Protect your construction site from rodents, cockroaches, and ants with Ecovia. Fast, safe, fully insured pest control for Sydney builders and developers.",
		ctaText: "Book a free consultation",
		path: "construction-site-pest-control" as ServicePages,
	},
	{
		id: 5,
		imageSrc: IMAGES.ECO_FRIENDLY_PEST_CONTROL,
		imageAlt: "Eco friendly pest control service",
		serviceNumber: "05/",
		serviceName: "Eco friendly pest control",
		serviceDescription:
			"Protect your property without harming your family or environment. Ecovia's eco-friendly pest control uses low-toxicity methods safe for children and pets.",
		ctaText: "Book a free consultation",
		path: "eco-friendly-pest-control" as ServicePages,
	},
	{
		id: 6,
		imageSrc: IMAGES.STRATA_PEST_CONTROL,
		imageAlt: "Strata pest control service",
		serviceNumber: "06/",
		serviceName: "Strata pest control",
		serviceDescription:
			"Keep your strata complex pest-free with Ecovia. We work with strata managers and body corporates to deliver fast, eco-friendly solutions across Sydney.",
		ctaText: "Book a free consultation",
		path: "strata-pest-control" as ServicePages,
	},
];

export { services, servicesPages, servicesIndexPage };

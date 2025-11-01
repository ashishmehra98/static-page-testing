import { IMAGES } from "../images";

const industrialPestControlServiceData = {
	meta: {
		keywords: ["industrial pest control", "industrial pest control services", "industrial pest control sydney"],
		title: "Sydney Industrial Pest Control Services | Ecovia",
		description:
			"Need industrial pest control in Sydney? Ecovia delivers HACCP-compliant, eco-friendly treatments for factories, warehouses & industrial sites.",
	},
	hero: {
		backgroundImage: undefined,
		heading: "Industrial ",
		highlightedText: "Pest Control ",
		subHeading: "In Sydney",
		description:
			"Running an industrial site in Sydney comes with big responsibilities. Whether you manage a warehouse, food factory, logistics hub, or a healthcare facility, pests can put more than your products at risk. At Ecovia, we specialise in industrial pest control across Sydney, delivering treatments and prevention plans that meet strict industry standards. From rodent management to stored product pest control, our team provides safe, efficient, and fully compliant services tailored to industrial environments.",
		hideButtonSection: true,
		tag: "Compliance-driven pest management for warehouses, factories, and industrial facilities",
	},
	controlMatters: {
		title: "Why Industrial ",
		highlightedText: "Pest Control ",
		extraTitle: "Matters for Your Business",
		subtitle: "Pests in industrial facilities aren't just an inconvenience — they're a serious business risk.",
		align: "center" as const,
		imageSrc: undefined,
		imageAlt: undefined,
		infoItems: [
			{
				boldText: "Health and safety breaches: ",
				regularText:
					"Rodents and cockroaches spread disease and contaminate surfaces. For food production sites, this can lead to failed inspections, product recalls, and loss of certification.",
			},
			{
				boldText: "Regulatory compliance: ",
				regularText:
					"Industries tied to food, pharmaceuticals, or government contracts are required to maintain pest-free facilities under <a href='https://www.fda.gov/food/hazard-analysis-critical-control-point-haccp/haccp-principles-application-guidelines' target='_blank'>HACCP</a> and <a href='https://www.anao.gov.au/work/performance-audit/export-certification-australian-quarantine-and-inspection-service' target='_blank'>AQIS</a> standards. Failure to comply can result in penalties or shutdowns.",
			},
			{
				boldText: "Business disruption: ",
				regularText:
					"Birds nesting in warehouses, moths in storage, or rodents damaging electrical systems can all stop operations and cause financial losses.",
			},
			{
				boldText: "Reputation damage: ",
				regularText: "In a competitive market, a single pest sighting can harm client trust and lead to lost contracts.",
			},
			{
				regularText: "That's why proactive industrial pest control services are not optional — they're essential.",
			},
		],
	},
	process: {
		steps: [
			{
				number: "01",
				title: "Site inspection & risk assessment",
				description:
					"Our technicians assess all key areas: storage, production floors, machinery zones, roof spaces, loading docks, and external perimeters.",
			},
			{
				number: "02",
				title: "Custom management plan",
				description: "We design a pest control program that matches your industry, site size, and compliance requirements.",
			},
			{
				number: "03",
				title: "Implementation",
				description:
					"Treatments scheduled around your operations. Methods include baiting, fumigation, spraying, exclusion work, and proofing.",
			},
			{
				number: "04",
				title: "Monitoring & documentation",
				description:
					"We install monitoring points and provide audit-ready documentation — essential for HACCP and client inspections.",
			},
			{
				number: "05",
				title: "Follow-up & prevention",
				description: "Regular visits ensure pests are kept under control, and reports track activity over time.",
			},
		],
	},
	coverage: {
		title: "Sydney-Wide ",
		highlightedText: "Industrial ",
		subHeading: "Pest Control Coverage",
		description: `We provide industrial pest control in Sydney across all major industrial and commercial zones, including:

							Western Sydney industrial estates, Inner West manufacturing hubs, Northern Beaches warehouses, South Sydney and Botany logistics precincts, and Greater Sydney region.

							If you're unsure whether your facility is covered, simply give us a call — our team will confirm availability.`,
	},
	faq: [
		{
			id: "industrial-haccp-compliant",
			question: "Are your treatments HACCP-compliant?",
			answer: "Yes. Our methods align with HACCP and AQIS standards, and we provide all documentation required for audits.",
		},
		{
			id: "industrial-audit-reports",
			question: "Do you provide audit-ready reports?",
			answer: "Yes. Every service includes inspection reports and monitoring logs to satisfy compliance checks.",
		},
		{
			id: "industrial-after-hours",
			question: "Can you service facilities after-hours?",
			answer: "Absolutely. We regularly schedule treatments outside of business hours to avoid operational downtime.",
		},
		{
			id: "industrial-ongoing-contracts",
			question: "Do you offer ongoing pest management contracts?",
			answer: "Yes. Many industrial clients opt for quarterly or monthly plans for consistent monitoring and prevention.",
		},
		{
			id: "industrial-minimal-disruption",
			question: "How do you ensure minimal disruption?",
			answer: "We work around your production schedules, using enclosed systems and low-tox treatments where possible.",
		},
		{
			id: "industrial-vs-residential",
			question: "What's the difference between residential and industrial pest control?",
			answer:
				"Industrial pest control requires larger-scale treatments, compliance documentation, monitoring systems, and long-term contracts to meet legal obligations.",
		},
	],
	footer: {
		backgroundImage: undefined,
		heading: "Protect ",
		highlightedText: "Your Facility ",
		subHeading: "with Ecovia",
		description:
			"Don't risk compliance failures, product recalls, or costly downtime. With Ecovia, you get a partner that understands industrial standards and provides industrial pest control services in Sydney you can trust.",
		showCallCTAOnMobile: true,
	},
	reviews: [],
	pests: [
		{
			imageSrc: IMAGES.PEST_RODENTS,
			imageAlt: "Rodents",
			pestName: "Rodents (rats & mice)",
			commonSigns: "Gnaw marks, droppings, noise in walls/ceilings",
			treatment: "Enclosed bait stations, traps, exclusion (sealing cracks), regular monitoring",
		},

		{
			imageSrc: IMAGES.PEST_COCKROACHES,
			imageAlt: "Cockroaches",
			pestName: "Cockroaches (especially German cockroach)",
			commonSigns: "Sightings in kitchens, grease trails, droppings",
			treatment: "Strategic baiting, residual sprays in voids, sealing access points",
		},
		{
			imageSrc: IMAGES.STORED_PRODUCT_CONTROL_MATTERS_STUDY,
			imageAlt: "Stored-product pests",
			pestName: "Stored Product Pests (weevils, beetles, moths)",
			commonSigns: "Damage to packaging, tiny holes in food bags",
			treatment: "Fumigation, infrared scanning, pheromone traps, IPM controls",
		},
		{
			imageSrc: IMAGES.BIRD_CONTROL_SERVICES_STUDY,
			imageAlt: "Birds",
			pestName: "Birds (pigeons, starlings)",
			commonSigns: "Droppings, noise, nesting on ledges",
			treatment: "Bird netting, spikes, deterrents (if relevant)",
		},
		{
			imageSrc: IMAGES.PEST_ANTS,
			imageAlt: "Ants",
			pestName: "Ants",
			commonSigns: "Trails along walls, nests near foundations or inside",
			treatment: "Nests located, targeted baiting, barrier treatments",
		},

		{
			imageSrc: IMAGES.PEST_SPIDER,
			imageAlt: "Spiders",
			pestName: "Spiders",
			commonSigns: "Webs, sightings in dark corners or storage",
			treatment: "Safe residual sprays, cleaning, habitat reduction",
		},
	],
} as Partial<ServiceConfig>;

export default industrialPestControlServiceData;

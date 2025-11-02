import { IMAGES } from "../images";

const commercialPestControlServiceData = {
	meta: {
		keywords: ["commercial pest control sydney", "commercial pest control", "commercial pest control services"],
		title: "Sydney Commercial Pest Control Services | Ecovia",
		description:
			"Need reliable commercial pest control services in Sydney? Ecovia provides safe, compliant, and discreet pest management for businesses of all sizes.",
	},
	hero: {
		backgroundImage: undefined,
		heading: "Commercial ",
		highlightedText: "Pest Control ",
		subHeading: "In Sydney",
		description:
			"Keep your business safe, clean, and compliant with commercial pest control solutions from Ecovia. Whether you run a restaurant, warehouse, office, or retail outlet, we deliver professional, discreet, and effective pest management across Sydney.",
		hideButtonSection: true,
		tag: undefined,
	},
	controlMatters: {
		title: "Why Businesses in Sydney ",
		highlightedText: "Trust Ecovia",
		extraTitle: "",
		subtitle:
			"Running a commercial space comes with many risks — and pests are one you don't want to ignore. With commercial pest control Sydney from Ecovia, you gain:",
		align: "center" as const,
		imageSrc: undefined,
		imageAlt: undefined,
		infoItems: [
			{
				boldText: "Health & Safety Protection: ",
				regularText:
					"Pests can spread pathogens, contaminate surfaces and food, trigger allergic responses, and violate hygiene laws.",
			},
			{
				boldText: "Regulatory & Audit Compliance: ",
				regularText:
					"In food, hospitality or sensitive industries, you may face council or HACCP audits. We provide <a href='https://en.wikipedia.org/wiki/Hazard_Analysis_Critical_Control_Point' target='_blank'>HACCP-compliant pest control services</a>, accompanied by detailed reports and comprehensive audit documentation.",
			},
			{
				boldText: "Brand & Reputation Shielding: ",
				regularText: "One rodent sighting is enough to harm your customers' trust.",
			},
			{
				boldText: "Reduced Operational Risk: ",
				regularText: "Pests damage stock, infrastructure, wiring, and packaging, costing downtime and replacement.",
			},
			{
				boldText: "Peace of Mind: ",
				regularText: "Professional coverage with guarantees and ongoing monitoring protects your operations.",
			},
		],
	},
	whyChoose: {
		backgroundImage: IMAGES.PATTERN_BG,
		title: "Why Choose Ecovia ",
		highlightedText: "for Your Business ",
		extraTitle: "Pest Protection",
		subtitle: undefined,
		align: "start" as const,
		titleColor: "white",
		subtitleColor: "white",
		highlightedTextColor: "#b1cf5f",
		infoItems: [
			{
				boldText: "Sydney-based commercial pest specialists — ",
				regularText: "we understand local pests, climate, and building types",
			},
			{
				boldText: "Eco-aware & compliant treatments — ",
				regularText:
					"we use <a href='https://www.epa.nsw.gov.au/Your-environment/Pesticides/integrated-pest-management' target='_blank'>Integrated Pest Management (IPM)</a> and low-toxicity products",
			},
			{
				boldText: "After-hours & discreet service — ",
				regularText: "minimal disruption to your operations",
			},
			{
				boldText: "Transparent contracts & flexible agreements — ",
				regularText: "no hidden fees, scalable plans",
			},
			{
				boldText: "Audit documentation & HACCP readiness — ",
				regularText: "supports food, hospitality, and industrial sectors",
			},
			{
				boldText: "Certified, licensed & insured — ",
				regularText: "adherence to industry standards and safety protocols",
			},
		],
	},
	process: {
		steps: [
			{
				number: "01",
				title: "Site inspection & risk assessment",
				description:
					"We inspect interior, exterior, roof voids, storage, and staff zones. We map risk points (waste, drains, loading docks).",
			},
			{
				number: "02",
				title: "Tailored treatment plan",
				description: "We propose a plan including techniques, chemicals, a timeline, safety zones, and reporting obligations.",
			},
			{
				number: "03",
				title: "Discreet execution",
				description:
					"We schedule treatments to suit your business (often after hours or low-traffic periods). Our techniques minimise disruption.",
			},
			{
				number: "04",
				title: "Monitoring & ongoing maintenance",
				description: "Install bait stations, sensors or visual checks. Regular visits maintain pest control before escalation.",
			},
			{
				number: "05",
				title: "Reporting, documentation & continuous improvement",
				description: "Detailed reports after each visit, ideal for audits. Periodic strategy reviews and adjustments as needed.",
			},
		],
	},
	coverage: {
		title: "Service Coverage ",
		highlightedText: "Across Sydney",
		subHeading: "",
		description: `Ecovia delivers commercial pest control Sydney wide. Our service area includes:

							Eastern Suburbs, Inner West, North Shore, Northern Beaches, Western Sydney, CBD, Sutherland Shire, and Greater Sydney.

							If your suburb isn't listed, just call us — we're happy to confirm availability.`,
	},
	faq: [
		{
			id: "commercial-pest-reports",
			question: "Do you provide pest control reports for council or health inspections?",
			answer:
				"Yes — every visit comes with a detailed report suitable for <a href='https://en.wikipedia.org/wiki/Hazard_Analysis_Critical_Control_Point' target='_blank'>HACCP compliance</a> or council audits.",
		},
		{
			id: "commercial-after-hours",
			question: "Can treatments be scheduled outside business hours?",
			answer: "Absolutely. We commonly run treatments overnight or on weekends to avoid disruption.",
		},
		{
			id: "commercial-service-frequency",
			question: "How often should a commercial premises be serviced?",
			answer:
				"Depends on risk profile. High-risk sites (food, hospitality) may need 4-week cycles; lower risk sites may be quarterly or biannually.",
		},
		{
			id: "commercial-food-safety",
			question: "Are treatments safe in food preparation or stock zones?",
			answer:
				"Yes — we follow <a href='https://www.foodstandards.gov.au/business/food-safety/pests' target='_blank'>standard food protocols</a>, shut down zones when needed, use food-approved chemicals, and re-verify before reopening.",
		},
		{
			id: "commercial-guarantee",
			question: "What guarantee do you offer?",
			answer:
				"We back our work with a warranty (often 3 to 12 months) — if pests return in that time (and conditions are met), we'll re-treat at no extra cost.",
		},
		{
			id: "commercial-contracts",
			question: "Do we need to sign a long contract?",
			answer: "No. We prefer flexible service agreements that can be adapted as your business changes.",
		},
	],
	footer: {
		backgroundImage: undefined,
		heading: "Book Your Free ",
		highlightedText: "Inspection Today",
		subHeading: "",
		description:
			"Don't wait until pests become visible or damaging. Let Ecovia help you stay a step ahead with professional commercial pest control services in Sydney.",
		showCallCTAOnMobile: true,
	},
	reviews: [],
	pests: [
		{
			imageSrc: IMAGES.PEST_COCKROACHES,
			imageAlt: "Cockroaches",
			pestName: "Cockroaches (especially German cockroach)",
			commonSigns: "Sightings in kitchens, grease trails, droppings",
			treatment: "Strategic baiting, residual sprays in voids, sealing access points",
		},
		{
			imageSrc: IMAGES.PEST_RODENTS,
			imageAlt: "Rodents",
			pestName: "Rodents (rats & mice)",
			commonSigns: "Gnaw marks, droppings, noise in walls/ceilings",
			treatment: "Enclosed bait stations, traps, exclusion (sealing cracks), regular monitoring",
		},
		{
			imageSrc: IMAGES.PEST_ANTS,
			imageAlt: "Ants",
			pestName: "Ants",
			commonSigns: "Trails along walls, nests near foundations or inside",
			treatment: "Nests located, targeted baiting, barrier treatments",
		},
		{
			imageSrc: IMAGES.FLY_PEST_CONTROL_SERVICE_STUDY,
			imageAlt: "Flies",
			pestName: "Flies / Flying Insects",
			commonSigns: "Flies in food zones, breeding in drains/waste",
			treatment: "UV traps, fly screens, residual sprays, sanitation advice",
		},
		{
			imageSrc: IMAGES.STORED_PRODUCT_CONTROL_SERVICES_STUDY,
			imageAlt: "Stored-product pests",
			pestName: "Stored-product pests / Insect pests in stock rooms",
			commonSigns: "Damage to packaging, tiny holes in food bags",
			treatment: "Fumigation, infrared scanning, pheromone traps, IPM controls",
		},
		{
			imageSrc: IMAGES.PEST_SPIDER,
			imageAlt: "Spiders",
			pestName: "Spiders / Other crawling insects",
			commonSigns: "Webs, sightings in dark corners or storage",
			treatment: "Safe residual sprays, cleaning, habitat reduction",
		},
		{
			imageSrc: IMAGES.BIRD_CONTROL_SERVICES_STUDY,
			imageAlt: "Birds",
			pestName: "Birds / Pest birds (in sensitive commercial zones)",
			commonSigns: "Droppings, noise, nesting on ledges",
			treatment: "Bird netting, spikes, deterrents (if relevant)",
		},
	],
} as Partial<ServiceConfig>;

export default commercialPestControlServiceData;

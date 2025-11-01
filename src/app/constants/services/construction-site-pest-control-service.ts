import { IMAGES } from "../images";

const constructionSitePestControlServiceData = {
	meta: {
		keywords: ["construction site pest control", "pest control for construction site"],
		title: "Sydney Construction Pest Control Services | Ecovia",
		description:
			"Ecovia delivers fast, safe, and compliant construction site pest control in Sydney. Protect builds from ants, rodents, and costly delays. Free quotes.",
	},
	hero: {
		backgroundImage: undefined,
		heading: "Construction Site ",
		highlightedText: "Pest Control ",
		subHeading: "In Sydney",
		description:
			"Building in Sydney brings challenges beyond just weather and deadlines. Pests such as rodents, cockroaches, and ants are common on construction sites and can pose threats to timelines, safety, and compliance. At Ecovia, we provide pest control for construction sites that is tailored to the unique needs of builders, developers, and project managers. Our fast, safe, and fully insured service helps you stay compliant and keeps your site protected.",
		hideButtonSection: true,
		tag: "Keep your project safe, compliant, and on schedule with Ecovia",
	},
	whyChoose: {
		backgroundImage: IMAGES.PATTERN_BG,
		title: "Why Choose ",
		highlightedText: "Ecovia for Your Construction ",
		extraTitle: "Pest Control",
		subtitle: "Here's what sets Ecovia apart when it comes to construction site pest control in Sydney:",
		align: "start",
		titleColor: "white",
		subtitleColor: "white",
		highlightedTextColor: "#b1cf5f",
		infoItems: [
			{
				boldText: "Licensed, insured, and AEPMA compliant – ",
				regularText: "full protection for your project and peace of mind.",
			},
			{
				boldText: "Construction-focused expertise – ",
				regularText: "we understand building sites, from slab pours to timber frames.",
			},
			{
				boldText: "Fast turnaround – ",
				regularText: "treatments scheduled quickly so projects stay on track.",
			},
			{
				boldText: "Eco and low-tox solutions – ",
				regularText: "safe for active sites with multiple trades.",
			},
			{
				boldText: "Written guarantees – ",
				regularText: "if treated pests return within the warranty, we'll come back free of charge.",
			},
		],
	},
	controlMatters: {
		title: "Why Pest Control is Critical on ",
		highlightedText: "Construction Sites",
		extraTitle: "",
		subtitle:
			"Construction sites attract pests for a few reasons: exposed timber, disturbed soil, food scraps from workers, and areas of standing water. Left unchecked, pests can:",
		align: "center" as const,
		imageSrc: undefined,
		imageAlt: undefined,
		infoItems: [
			{
				boldText: "Cause costly delays –",
				regularText: "ant infestations or rodent damage to wiring can halt work.",
			},
			{
				boldText: "Create compliance risks –",
				regularText:
					"<a href='https://www.safeworkaustralia.gov.au/doc/model-whs-regulations' target='_blank'>WHS regulations</a> require safe conditions for workers, which pests can compromise.",
			},
			{
				boldText: "Add long-term liability –",
				regularText: "untreated pests on a site can spread to nearby properties, leading to potential claims.",
			},
			{
				regularText:
					"In Sydney, termites alone are estimated to cause over $1 billion in damage annually (CSIRO). Protecting your project with proactive pest management is not just smart; it's essential.",
			},
		],
	},
	process: {
		steps: [
			{
				number: "01",
				title: "Site Inspection & Risk Assessment",
				description: "A technician inspects the site, identifies pests, and checks high-risk areas.",
			},
			{
				number: "02",
				title: "Tailored Management Plan",
				description: "A custom strategy is created for your project, including treatment methods and safety protocols.",
			},
			{
				number: "03",
				title: "Implementation",
				description: "Treatments are carried out with minimal disruption to construction work.",
			},
			{
				number: "04",
				title: "Ongoing Monitoring",
				description: "Optional contracts for regular site visits keep pests controlled throughout the build.",
			},
			{
				number: "05",
				title: "Documentation & Handover",
				description:
					"Upon project completion, we provide comprehensive documentation and handover reports, ensuring all pest control measures are documented for compliance and future reference.",
			},
		],
	},
	safetyMeasures: {
		title: "Safety, Compliance ",
		highlightedText: "& Assurance",
		extraTitle: "",
		subtitle: "Safety on site is non-negotiable. That's why we:",
		align: "center" as const,
		imageSrc: undefined,
		imageAlt: undefined,
		infoItems: [
			{
				regularText: "Use only licensed products approved for use on active construction sites.",
			},
			{
				regularText:
					"Follow <a href='https://www.aepma.com.au/Codes-of-Practice/CoOP' target='_blank'>AEPMA Codes of Practice</a> and relevant Australian Standards.",
			},
			{
				regularText: "Ensure technicians wear PPE and follow WHS protocols.",
			},
			{
				regularText: "Carry full insurance, protecting builders, developers, and subcontractors.",
			},
			{
				regularText:
					"Our integrated pest management approach combines eco-friendly treatments with non-chemical methods like habitat modification and exclusion, keeping workers and the environment in mind.",
			},
		],
	},
	coverage: {
		title: "Our Service Areas ",
		highlightedText: "Across Sydney",
		subHeading: "",
		description: `We provide construction site pest control across Sydney, including:

							Western Sydney, Inner West, Eastern Suburbs, Northern Beaches, North Shore, Sutherland Shire, and Greater Sydney.

							If your project site is outside these areas, contact us to confirm coverage.`,
	},
	faq: [
		{
			id: "construction-slab-timing",
			question: "Do we need pest control before or after the slab pour?",
			answer: "Yes, pest treatments must be completed before the slab is poured to meet Australian Standards.",
		},
		{
			id: "construction-trades-working",
			question: "Can treatments be done while trades are working?",
			answer: "Most treatments can be applied safely with trades onsite, as long as safety instructions are followed.",
		},
		{
			id: "construction-treatment-duration",
			question: "How long do treatments last on an active build?",
			answer:
				"Pre-construction pest barriers are long-lasting, while rodent or fly treatments may require reapplication depending on site conditions.",
		},
		{
			id: "construction-worker-safety",
			question: "Are products safe for workers?",
			answer: "Yes. We use low-tox, approved products and provide safety instructions to all site managers.",
		},
		{
			id: "construction-multiple-sites",
			question: "Do you offer pest control for multiple sites?",
			answer: "Yes, we work with developers and builders across Sydney on single and multi-site projects.",
		},
	],
	footer: {
		backgroundImage: undefined,
		heading: "Book Your ",
		highlightedText: "Free Inspection",
		subHeading: "",
		description:
			"Keep your construction project on track with professional pest control. Ecovia provides fast, safe, and compliant solutions that protect your build from pests, delays, and unnecessary costs.",
		showCallCTAOnMobile: true,
	},
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
			pestName: "Flies & Mosquitoes",
			commonSigns: "Flies in food zones, breeding in drains/waste, persistent swarming",
			treatment: "Larvicidal treatments, fogging, and site hygiene recommendations.",
		},
	],
} as Partial<ServiceConfig>;

export default constructionSitePestControlServiceData;

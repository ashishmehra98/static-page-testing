import { IMAGES } from "../images";
import { CONTACT_NUMBER } from "../services";

const mosquitoPestStudyData = {
	meta: {
		keywords: ["mosquito pest control", "pest control for mosquitoes"],
		title: "Mosquito Pest Control Sydney | Ecovia",
		description:
			"Get fast, reliable mosquito pest control in Sydney with Ecovia. Safe for kids and pets. Reclaim your outdoor space today with professional pest control.",
	},
	hero: {
		backgroundImage: IMAGES.MOSQUITOES_PEST_STUDY_BG,
		heading: "Mosquito ",
		highlightedText: "Pest Control ",
		subHeading: "Sydney",
		description:
			"Annoyed by mosquito bites every evening? At Ecovia, we specialise in mosquito pest control across Sydney and surrounds. Our proven methods reduce mosquito numbers and help you reclaim your outdoor space—all while prioritising safety for children, pets and your property.",
		hideButtonSection: true,
	},

	controlMatters: {
		title: "Why",
		highlightedText: "Mosquito Control ",
		extraTitle: "Matters",
		subtitle: "",
		align: "center" as const,
		imageSrc: IMAGES.MOSQUITOES_CONTROL_MATTERS_STUDY,
		imageAlt: "Illustration of mosquito biting skin highlighting need for mosquito pest control",
		infoItems: [
			{
				regularText:
					"Mosquitoes are more than just a nuisance. In NSW, some mosquito species transmit serious viruses like <b>Ross River virus</b>, <b>Barmah Forest virus</b>, <b>Japanese encephalitis</b>, <b>Murray Valley encephalitis</b> and <b>Kunjin virus</b>.",
			},
			{
				regularText:
					"Because only <b>female mosquitoes</b> bite (to feed on blood), they're the ones spreading disease and irritation.",
			},
			{
				regularText: "Unchecked mosquito populations harm your comfort, health and outdoor living:",
			},
			{
				boldText: "Persistent biting at dawn/dusk ",
				regularText: "keeps you indoors",
			},
			{
				boldText: "Risk of mosquito-borne diseases",
			},
			{
				boldText: "Disturbance to sleep and enjoyment ",
				regularText: "of yard, patio or garden",
			},
			{
				boldText: "Negative impression for guests or clients ",
				regularText: "in commercial settings",
			},
			{
				regularText:
					"By investing in <b>mosquito control Sydney</b>, you reduce risks now and prevent costly rebound issues later.",
			},
		],
	},

	infestationSigns: {
		backgroundImage: IMAGES.PATTERN_BG,
		title: "Signs You",
		highlightedText: "May Have ",
		extraTitle: "A Mosquito Problem",
		subtitle: "How do you know mosquitoes are more than just occasional pests? Watch for:",
		align: "start" as const,
		titleColor: "white",
		subtitleColor: "white",
		highlightedTextColor: "#b1cf5f",
		infoItems: [
			{
				boldText: "Frequent bites: ",
				regularText: "especially at dusk or early evening",
			},
			{
				boldText: "Buzzing or swarming ",
				regularText: "around shaded, moist zones",
			},
			{
				boldText: "Pools of standing water ",
				regularText: "in plant saucers, gutters, old tyres, buckets",
			},
			{
				boldText: "Larvae (wigglers) ",
				regularText: "in unfiltered ponds, gutters or drains",
			},
			{
				boldText: "Activity in shaded garden beds, ",
				regularText: "under shrubs or in quiet corners",
			},
			{
				boldText: "Seeing mosquitoes inside your home ",
				regularText: "despite screens",
			},
		],
	},

	serviceMethods: {
		title: "Our",
		highlightedText: "Mosquito Pest Control ",
		extraTitle: "Services",
		subtitle: "Our comprehensive <b>mosquito pest control</b> services include:",
		align: "center" as const,
		imageSrc: IMAGES.MOSQUITOES_CONTROL_SERVICES_STUDY,
		imageAlt: "Macro shot of mosquito feeding on skin showing importance of mosquito pest control",
		isReverse: true,
		infoItems: [
			{
				boldText: "Property Inspection: ",
				regularText: "We identify breeding sites and mosquito activity areas.",
			},
			{
				boldText: "Breeding Site Treatment: ",
				regularText: "We treat standing water and potential breeding areas.",
			},
			{
				boldText: "Barrier Treatments: ",
				regularText: "We create protective barriers around your property.",
			},
			{
				boldText: "Larvicide Applications: ",
				regularText: "We treat water sources to prevent mosquito development.",
			},
			{
				boldText: "Ongoing Monitoring: ",
				regularText: "We provide regular inspections and maintenance.",
			},
		],
	},

	processList: {
		backgroundImage: IMAGES.PATTERN_BG,
		title: "What",
		highlightedText: "To Expect ",
		extraTitle: "From Our Process",
		subtitle: "Our <b>mosquito pest control</b> process is thorough and effective:",
		align: "start" as const,
		titleColor: "white",
		subtitleColor: "white",
		highlightedTextColor: "#b1cf5f",
		infoItems: [
			{
				boldText: "Inspection: ",
				regularText: "We assess your property for mosquito breeding sites and activity.",
			},
			{
				boldText: "Treatment Plan: ",
				regularText: "We develop a customised solution for your specific situation.",
			},
			{
				boldText: "Treatment: ",
				regularText: "We apply safe, effective treatments to eliminate mosquitoes.",
			},
			{
				boldText: "Prevention: ",
				regularText: "We implement measures to prevent future infestations.",
			},
			{
				boldText: "Follow-up: ",
				regularText: "We monitor the situation and provide ongoing support.",
			},
		],
	},

	diyTips: {
		title: "DIY",
		highlightedText: "Tips ",
		extraTitle: "& Prevention",
		subtitle: "While professional <b>mosquito pest control</b> is most effective, here are some prevention tips:",
		align: "center" as const,
		imageSrc: IMAGES.MOSQUITOES_DIY_STUDY,
		imageAlt: "Mosquito sucking blood on human skin requiring pest control for mosquitoes service",
		isReverse: true,
		infoItems: [
			{
				boldText: "Remove standing water ",
				regularText: "from plant saucers, buckets, and other containers.",
			},
			{
				boldText: "Keep gutters clean ",
				regularText: "and free of debris that can hold water.",
			},
			{
				boldText: "Use mosquito nets ",
				regularText: "on windows and doors.",
			},
			{
				boldText: "Wear protective clothing ",
				regularText: "and use insect repellent when outdoors.",
			},
			{
				boldText: "Install screens ",
				regularText: "on windows and doors.",
			},
			{
				regularText: "Remember: Professional treatment is usually necessary for effective mosquito control.",
			},
		] as InfoItem[],
	},

	processCheck: {
		backgroundImage: IMAGES.PATTERN_BG,
		title: "Safety, ",
		highlightedText: "Guarantees & Peace ",
		extraTitle: "of Mind",
		subtitle: "At Ecovia, we prioritise safety and effectiveness in all our <b>mosquito pest control</b> services:",
		align: "start" as const,
		titleColor: "white",
		subtitleColor: "white",
		highlightedTextColor: "#b1cf5f",
		processItems: [
			{
				title: "Safe treatments that protect your family and pets.",
			},
			{
				title: "Effective methods that eliminate mosquitoes at all life stages.",
			},
			{
				title: "Written guarantees for complete elimination.",
			},
			{
				title: "Ongoing support and monitoring to prevent reinfestation.",
			},
			{
				title: "We provide written guarantees and ongoing support to ensure your property remains mosquito-free.",
			},
		],
		button: {
			variant: "primary" as const,
			title: ` ${CONTACT_NUMBER}`,
			icon: "phone" as const,
		},
	},

	footer: {
		backgroundImage: IMAGES.FOOTER_BG,
		heading: "Book Your ",
		highlightedText: "Mosquito Pest Control ",
		subHeading: "Service Today",
		description:
			"Don't let mosquitoes ruin your outdoor enjoyment or pose health risks. Call Ecovia now for professional <b>mosquito pest control</b> services across Sydney. We'll help you reclaim your outdoor space safely and effectively.",
		showCallCTAOnMobile: true,
	},

	reviews: [
		{
			id: 1,
			ratings: 5,
			review:
				"Ecovia solved our mosquito problem completely. They identified all the breeding sites and treated them effectively. We can now enjoy our backyard without being bitten.",
			userImage: "",
			username: "Amanda",
			designation: "Northern Beaches",
		},
		{
			id: 2,
			ratings: 5,
			review:
				"We had a severe mosquito problem around our pool. Ecovia treated the area and provided great prevention advice. No more mosquito bites!",
			userImage: "",
			username: "Mark",
			designation: "Sutherland Shire",
		},
	],

	faq: [
		{
			id: "mosquito-identification",
			question: "How do I know if I have a mosquito problem?",
			answer:
				"Look for frequent bites, buzzing sounds, standing water, or mosquito larvae. If you're unsure, call us for a professional inspection.",
		},
		{
			id: "mosquito-treatment-safety",
			question: "Is mosquito treatment safe for my family?",
			answer: "Yes, we use safe treatments that protect your family and pets while effectively eliminating mosquitoes.",
		},
		{
			id: "mosquito-prevention",
			question: "How can I prevent future mosquito problems?",
			answer:
				"We'll provide specific prevention advice including removing standing water, keeping gutters clean, and using protective measures.",
		},
		{
			id: "mosquito-treatment-duration",
			question: "How long does mosquito treatment take?",
			answer: "Most treatments are completed in a few hours, but follow-up visits may be needed to ensure complete elimination.",
		},
		{
			id: "mosquito-guarantee",
			question: "Do you guarantee your mosquito control service?",
			answer: "Yes, we provide written guarantees and will return if mosquitoes reappear within the warranty period.",
		},
		{
			id: "mosquito-breeding-sites",
			question: "What are common mosquito breeding sites?",
			answer:
				"Common breeding sites include standing water in plant saucers, gutters, buckets, and other containers. We'll identify and treat all potential sites.",
		},
	],
} as Partial<PestStudyConfig>;

export default mosquitoPestStudyData;

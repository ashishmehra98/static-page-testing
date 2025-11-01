import { IMAGES } from "../images";
import { CONTACT_NUMBER } from "../services";

const antPestStudyData = {
	meta: {
		keywords: ["ant pest control", "pest control for ants", "ant pest control sydney"],
		title: "Ant Pest Control in Sydney | Ecovia",
		description:
			"Looking for pest control for ants in Sydney? Ecovia offers safe, reliable ant treatments to protect your home. Call now for a free inspection.",
	},
	hero: {
		backgroundImage: IMAGES.ANT_PEST_STUDY_BG,
		heading: "Ant ",
		highlightedText: "Pest Control ",
		subHeading: "Sydney",
		description:
			"Ants may be small, but once they enter your home, they quickly become a big problem. From raiding food in the kitchen to leaving trails across the floor, ants can be both a nuisance and a hygiene concern. At Ecovia, we specialise in <b>ant pest control Sydney</b> homeowners can rely on. Our technicians use safe, proven methods to target the colony at its source and keep ants out for good.",
		hideButtonSection: true,
		tag: "Effective solutions for lasting results",
	},

	controlMatters: {
		title: "Why",
		highlightedText: "Controlling Ants ",
		extraTitle: "Matters",
		subtitle: "",
		align: "center" as const,
		imageSrc: IMAGES.ANT_CONTROL_MATTERS_STUDY,
		imageAlt: "commercial",
		infoItems: [
			{
				boldText: "Food contamination: ",
				regularText: "Ants carry bacteria on their bodies, which can transfer to your food and surfaces.",
			},
			{
				boldText: "Property risks: ",
				regularText: "Some species, like coastal brown ants, dig around paving and foundations, causing damage.",
			},
			{
				boldText: "Painful bites: ",
				regularText: "Large ants such as bull ants or jack jumpers can deliver painful, sometimes allergic bites.",
			},
			{
				boldText: "Persistent colonies: ",
				regularText: "DIY sprays often kill only the visible ants, leaving the colony intact and ready to return.",
			},
			{
				regularText:
					"With professional <b>pest control for ants</b>, you not only remove the visible pests but also stop the problem at the source.",
			},
		],
	},

	commonSpecies: {
		title: "Common",
		highlightedText: "Ant Species ",
		extraTitle: "In Sydney Homes",
		subtitle:
			"Sydney has a wide range of ant species, each with different habits and risks. Identifying the species is essential for effective treatment.",
		align: "center" as const,
		imageSrc: IMAGES.ANT_COMMON_SPECIES_STUDY,
		imageAlt: "commercial",
		isReverse: true,
		infoItems: [
			{
				boldText: "Black house ants: ",
				regularText: "Common indoors, especially in kitchens and bathrooms. Attracted to sweets.",
			},
			{
				boldText: "Coastal brown ants: ",
				regularText: "Nest in soil, gardens, and wall cavities. Known to damage lawns and paving.",
			},
			{
				boldText: "Bull ants: ",
				regularText: "Large and aggressive, with painful stings. Usually nest outdoors but can wander indoors.",
			},
			{
				boldText: "Sugar ants: ",
				regularText: "Found in kitchens and pantries, searching for sweet food sources.",
			},
			{
				boldText: "Meat ants: ",
				regularText: "Build large nests in soil, often visible in gardens and yards.",
			},
			{
				regularText: `By understanding these species, our <b>ant pest control</b> solutions are tailored to the exact problem, ensuring long-lasting results. 
					
					For further background on ant species in Australia, see `,
				link: {
					text: "Health Victoria's pest control advice.",
					url: "https://www.aepma.com.au/codes-of-practice",
				},
			},
		],
	},

	infestationSigns: {
		backgroundImage: IMAGES.PATTERN_BG,
		title: "Signs You",
		highlightedText: "May Have ",
		extraTitle: "An Ant Infestation",
		subtitle:
			"If these signs sound familiar, it's time to move from temporary fixes to professional <b>pest control for ants.</b>",
		align: "start" as const,
		titleColor: "white",
		subtitleColor: "white",
		highlightedTextColor: "#b1cf5f",
		infoItems: [
			{
				regularText:
					"Not all ant problems are obvious at first. Here are key signs that it's time to call in professionals for <b>ant pest control Sydney:</b>",
			},
			{
				boldText: "Trails of ants ",
				regularText: "moving to and from food or water sources",
			},
			{
				boldText: "Nests or small mounds ",
				regularText: "near pavers, driveways, or lawns",
			},
			{
				boldText: "Ants appearing around sinks, ",
				regularText: "bathrooms, or pet food bowls",
			},
			{
				boldText: "Large numbers of ants after rain, ",
				regularText: "when colonies seek dry shelter",
			},
			{
				boldText: "Repeated ant activity ",
				regularText: "despite DIY sprays or store-bought baits",
			},
		],
	},

	serviceMethods: {
		title: "Our",
		highlightedText: "Ant Pest Control ",
		extraTitle: "Services & Methods",
		subtitle:
			"At Ecovia, our approach focuses on safe, targeted solutions. We don't just spray and hope for the best — we identify the colony and use proven strategies to stop ants at their source. Our services include:",
		align: "center" as const,
		imageSrc: IMAGES.ANT_CONTROL_MATTERS_STUDY,
		imageAlt: "commercial",
		infoItems: [
			{
				boldText: "Gel baiting: ",
				regularText: "Attracts ants to take poison back to the nest, eliminating the colony.",
			},
			{
				boldText: "Residual spraying: ",
				regularText: "Creates a protective barrier along entry points, skirting boards, and outdoor perimeters.",
			},
			{
				boldText: "Dusting treatments: ",
				regularText: "Applied into wall cavities, cracks, and voids where ants hide.",
			},
			{
				boldText: "Colony treatments: ",
				regularText: "Where nests are located, direct treatments ensure long-term results.",
			},
			{
				boldText: "Exclusion and sealing: ",
				regularText: "We identify and seal cracks or entry points to stop ants from re-entering.",
			},
			{
				regularText:
					"This comprehensive process ensures your <b>ant pest control service</b> is effective, safe, and tailored to your property.",
			},
		],
	},

	processList: {
		backgroundImage: IMAGES.PATTERN_BG,
		title: "What",
		highlightedText: "To Expect ",
		extraTitle: "From Our Process",
		subtitle: "Transparency is important to us, so here's how our <b>ant pest control Sydney</b> service works:",
		align: "start" as const,
		titleColor: "white",
		subtitleColor: "white",
		highlightedTextColor: "#b1cf5f",
		infoItems: [
			{
				boldText: "Inspection – ",
				regularText: "We identify the species, nesting sites, and entry points.",
			},
			{
				boldText: "Treatment plan – ",
				regularText: "We provide a clear quote and explain the methods we'll use.",
			},
			{
				boldText: "Treatment – ",
				regularText: "Our technicians carry out safe, targeted treatments inside and outside the home.",
			},
			{
				boldText: "Follow-up – ",
				regularText: "If ants reappear within the guarantee period, we return them free of charge.",
			},
			{
				boldText: "Prevention tips – ",
				regularText: "We give practical advice to reduce the chance of future infestations.",
			},
		] as InfoItem[],
	},

	diyTips: {
		title: "DIY",
		highlightedText: "Tips ",
		extraTitle: "& Prevention",
		subtitle:
			"While professional <b>pest control for ants</b> is the most effective solution, there are steps you can take to make your home less attractive to ants:",
		align: "center" as const,
		imageSrc: IMAGES.ANT_COMMON_SPECIES_STUDY,
		imageAlt: "commercial",
		isReverse: true,
		infoItems: [
			{
				regularText: "Keep kitchens clean and free of food scraps or crumbs.",
			},
			{
				regularText: "Store food in sealed containers.",
			},
			{
				regularText: "Wipe down surfaces with soapy water or vinegar to disrupt ant trails.",
			},
			{
				regularText: "Seal cracks and crevices around windows, doors, and skirting.",
			},
			{
				regularText: "Fix leaks, as ants seek out water sources.",
			},
			{
				regularText: "Keep garden beds, mulch, and tree branches away from the house perimeter",
			},
			{
				regularText: "These steps can help, but once an infestation is established, professional help is usually required.",
			},
		],
	},

	processCheck: {
		backgroundImage: IMAGES.PATTERN_BG,
		title: "Safety, ",
		highlightedText: "Guarantees & Peace ",
		extraTitle: "of Mind",
		subtitle: "Choosing an <b>ant pest control</b> shouldn’t mean worrying about safety. At Ecovia, we:",
		align: "center" as const,
		titleColor: "white",
		subtitleColor: "white",
		highlightedTextColor: "#b1cf5f",
		processItems: [
			{
				title: "Use only licensed products approved for use in residential settings",
				// highlightedText: "licensed products",
			},
			{
				title: "Ensure treatments are safe for children and pets once dry.",
				// highlightedText: "treatments are safe",
			},
			{
				title: "Provide a written service guarantee — if ants come back within the warranty, so do we.",
				// highlightedText: "written service guarantee",
			},
			{
				title:
					"Carry full insurance and follow <a href='https://www.aepma.com.au/codes-of-practice' target='_blank'>AEPMA</a> <b>Codes of Practice.</b>",
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
		highlightedText: "Ant Control ",
		subHeading: "Service Today",
		description:
			"Don’t let ants take over your home. Call Ecovia now or fill out our quick form to arrange your <b>ant pest control service</b> in Sydney. We’ll inspect, treat, and protect your home — with results you can trust.",
		showCallCTAOnMobile: true,
	},

	reviews: [
		{
			id: 1,
			ratings: 5,
			review:
				"We had sugar ants all over our kitchen bench. Ecovia treated the nest with baits, and within days the ants were gone. They even gave us prevention tips that have worked.",
			userImage: "",
			username: "Anna",
			designation: "Parramatta",
		},
		{
			id: 2,
			ratings: 5,
			review:
				"After heavy rain, our yard was full of ant mounds. Ecovia identified the species, treated the colonies, and we've had no repeat issues.",
			userImage: "",
			username: "George",
			designation: "Sutherland",
		},
	],

	faq: [
		{
			id: "ant-control-effectiveness",
			question: "How effective is professional ant pest control?",
			answer: "Our methods target the colony, not just the ants you see. This ensures long-term results.",
		},
		{
			id: "ant-treatment-safety",
			question: "Is the treatment safe for kids and pets?",
			answer: "Yes. Once treatments dry, they are safe. We'll provide clear re-entry guidelines.",
		},
		{
			id: "ant-treatment-duration",
			question: "How long does treatment last?",
			answer: "Most treatments protect for several months, but it depends on the species and environment.",
		},
		{
			id: "ant-diy-control",
			question: "Can I control ants myself?",
			answer: "DIY methods may reduce visible ants temporarily, but usually don't eliminate the colony.",
		},
		{
			id: "ant-preparation",
			question: "What preparation should I do before treatment?",
			answer: "Clean surfaces, store food, and make sure we have access to affected areas.",
		},
		{
			id: "ant-return-guarantee",
			question: "What if ants return?",
			answer: "If ants come back within our guarantee period, we return free of charge.",
		},
	],
} as Partial<PestStudyConfig>;

export default antPestStudyData;

import { IMAGES } from "../images";

const birdPestStudyData = {
	meta: {
		keywords: ["bird pest control", "bird pest control sydney", "pest control for birds"],
		title: "Professional Bird Pest Control in Sydney | Ecovia",
		description:
			"Sydney’s trusted specialists in bird pest control. Ecovia protects your property with safe, effective bird exclusion and deterrent systems",
	},
	hero: {
		backgroundImage: IMAGES.BIRD_PEST_STUDY_BG,
		heading: "Bird ",
		highlightedText: "Pest Control ",
		subHeading: "In Sydney",
		description:
			"<b>Humane, effective bird pest control solutions for homes & businesses</b><br><br>Birds are part of our urban life in Sydney, but when they start nesting on your roof, perching on ledges or leaving droppings everywhere, they become pests. At Ecovia, we specialise in <b>bird pest control</b> in Sydney that's safe, effective and long-lasting. Let us help you reclaim your building — call us for a free inspection today.",
		hideButtonSection: true,
	},

	controlMatters: {
		title: "Why",
		highlightedText: "Bird Pest Control ",
		extraTitle: "Matters",
		subtitle: "",
		align: "center" as const,
		imageSrc: IMAGES.BIRDS_CONTROL_MATTERS_STUDY,
		imageAlt: "Small bird perched on a thin branch, representing bird pest control in gardens",
		infoItems: [
			{
				regularText: "Bird infestation is more than a nuisance — it brings real risks:",
			},
			{
				boldText: "Health hazards: ",
				regularText:
					"Bird droppings carry pathogens. Studies show more than 60 diseases may be transferred from birds to humans and pets.",
			},
			{
				boldText: "Corrosion & property damage: ",
				regularText: "Droppings are acidic and over time can erode metal, stonework, roofing and facades.",
			},
			{
				boldText: "Secondary pests: ",
				regularText: "Bird nests attract mites, insects, rodents — creating more infestations.",
			},
			{
				boldText: "Structural & blocking issues: ",
				regularText: "Gutters, drainage, vents and roof cavities can get clogged by nesting materials, causing leaks and damage.",
			},
			{
				boldText: "Legal or permit risks: ",
				regularText:
					"Some bird species and nests may be protected under <a href='https://www.lls.nsw.gov.au/help-and-advice/pest-control/vertebrate-pest-animals/pest-birds' target='_blank'>NSW regulations</a>. You need safe, compliant removal.",
			},
			{
				regularText:
					"Ignoring early signs leads to escalating costs. For example, one <a href='https://www.realestate.com.au/news/pigeons-turn-sydney-house-into-7k-damage-disaster/' target='_blank'>Sydney homeowner saw more than <b>$7,000</b> in damage</a> before calling pest control.",
			},
			{
				regularText: "With <b>professional bird pest control</b>, you don't just remove the symptoms — you prevent recurrence.",
			},
		],
	},

	commonSpecies: {
		title: "Common",
		highlightedText: "Pest Birds ",
		extraTitle: "In Sydney & Their Behaviour",
		subtitle: "Knowing which species you're dealing with helps us tailor the solution:",
		align: "center" as const,
		imageSrc: IMAGES.BIRDS_COMMON_SPECIES_STUDY,
		imageAlt: "Sparrow sitting on a house gutter, a common target for pest control for birds",
		isReverse: true,
		infoItems: [
			{
				boldText: "Pigeons (feral rock doves): ",
				regularText: "Large droppings, roosting, spread pathogens. Typical locations: Roof ledges, eaves, signs, ducts.",
			},
			{
				boldText: 'Australian White Ibis ("bin chicken"): ',
				regularText: "Scavenging, nesting in palms, mess in public areas. Typical locations: Rooftops, palm trees, parks.",
			},
			{
				boldText: "Common Mynas: ",
				regularText: "Aggressive competitors, nest in cavities, block gutters. Typical locations: Eaves, wall cavities, vents.",
			},
			{
				boldText: "Starlings / Sparrows: ",
				regularText: "Nest in roof voids, bring mites inside. Typical locations: Roof spaces, eaves, wall voids.",
			},
			{
				boldText: "Magpies (during swooping season): ",
				regularText:
					"Can swoop and cause injury in breeding months. Typical locations: Trees near pedestrian paths, suburban zones.",
			},
			{
				regularText:
					"Each species demands a slightly different control method. For example, controlling pigeons often involves long-term exclusion (netting, spikes), while dealing with ibis may require habitat modification and permit-based interventions.",
			},
		],
	},

	infestationSigns: {
		backgroundImage: IMAGES.PATTERN_BG,
		title: "Signs You",
		highlightedText: "Have ",
		extraTitle: "A Bird Problem",
		subtitle: "If you see any of these, it's time to act:",
		align: "start" as const,
		titleColor: "white",
		subtitleColor: "white",
		highlightedTextColor: "#b1cf5f",
		infoItems: [
			{
				boldText: "Consistent accumulation of droppings ",
				regularText: "on ledges, windows or walkways",
			},
			{
				boldText: "Active nesting material, twigs or debris ",
				regularText: "in gutters, vents or roof voids",
			},
			{
				boldText: "Feathers ",
				regularText: "scattered around building perimeters",
			},
			{
				boldText: "Noise or flapping ",
				regularText: "at dawn or dusk",
			},
			{
				boldText: "Bird mites / biting insects ",
				regularText: "appearing indoors, especially during warmer months",
			},
			{
				boldText: "Surface staining or corrosion ",
				regularText: "from acidic droppings",
			},
			{
				boldText: "Blocked drainage or gutters ",
				regularText: "from nesting debris",
			},
			{
				regularText: "These are not isolated complaints — they often signal an active infestation that's gradually worsening.",
			},
		],
	},

	serviceMethods: {
		title: "Our",
		highlightedText: "Bird Pest Control ",
		extraTitle: "Services & Methods",
		subtitle:
			"We apply a layered approach that's humane, targeted, and effective. Here's how Ecovia handles <b>bird pest control</b>:",
		align: "center" as const,
		imageSrc: IMAGES.BIRD_CONTROL_SERVICES_STUDY,
		imageAlt: "Yellow wagtail on soil field, ideal example for bird pest control in farms",
		infoItems: [
			{
				boldText: "Inspection & Assessment — ",
				regularText:
					"We survey your property, identify species, map nests and entry points, evaluate risk zones— roof, vents, facades, etc.",
			},
			{
				boldText: "Proofing / Exclusion — ",
				regularText:
					"Using netting, stainless steel mesh, wire, spikes or spring-wire systems, we physically block birds from roosting or nesting.",
			},
			{
				boldText: "Deterrents & Repellents — ",
				regularText:
					"Visual aids (reflective strips, scare devices), sound deterrents, or non-toxic gels can discourage birds from returning to areas where proofing is impractical.",
			},
			{
				boldText: "Nest Removal & Clean-Up — ",
				regularText:
					"We safely remove old nests, feathers and droppings. Then we sanitise the area to neutralise pathogens and prevent lingering pests.",
			},
			{
				boldText: "Maintenance & Monitoring — ",
				regularText:
					"Periodic inspections ensure that proofing remains intact and no fresh activity begins. This is critical for long term success.",
			},
			{
				boldText: "Contract / Seasonal Services — ",
				regularText:
					"For commercial properties or large buildings, we offer ongoing <b>bird control</b> contracts (e.g. quarterly inspections, repairs, deterrent refreshes).",
			},
			{
				regularText:
					"We emphasise humane, non-lethal methods. Toxic chemicals or lethal control are rarely effective long term, and often carry risks for native species.",
			},
		],
	},

	processList: {
		backgroundImage: IMAGES.PATTERN_BG,
		title: "What",
		highlightedText: "To Expect ",
		extraTitle: "—  Our Process",
		subtitle: "We believe in clarity and accountability. You’ll know exactly what to expect at each step.",
		align: "start" as const,
		titleColor: "white",
		subtitleColor: "white",
		highlightedTextColor: "#b1cf5f",
		infoItems: [
			{
				boldText: "1. Contact & Booking -",
				regularText: "You reach out by phone or via our site; we arrange a convenient inspection.",
			},
			{
				boldText: "2. On-site Visit & Quote — ",
				regularText: "We present our findings, a method plan, and transparent cost – no hidden fees.",
			},
			{
				boldText: "3. Treatment / Installation — ",
				regularText: "Our team installs proofing, deterrents, removes nests, and cleans the area.",
			},
			{
				boldText: "4. Follow-up & Inspection — ",
				regularText: "We return to check integrity, re-secure any displaced materials, and ensure birds stay away.",
			},
			{
				boldText: "5. Guarantee / Warranty — ",
				regularText: "If birds return within our warranty period, we come back at no extra charge.",
			},
		] as InfoItem[],
	},

	diyTips: {
		title: "DIY ",
		highlightedText: "Tips ",
		extraTitle: "& Prevention (Between Services)",
		subtitle: "These aren't full solutions, but they help reduce risk:",
		align: "center" as const,
		imageSrc: IMAGES.BIRDS_DIY_STUDY,
		imageAlt: "Brown bird cleaning feathers near reeds, illustrating natural pest control for birds in wetland areas",
		isReverse: true,
		infoItems: [
			{
				boldText: "Seal or screen vents, eaves and gaps ",
				regularText: "in roofing",
			},
			{
				boldText: "Reduce food sources: ",
				regularText: "secure bins, remove open compost, avoid feeding birds",
			},
			{
				boldText: "Prune trees or overhanging branches ",
				regularText: "near roofs",
			},
			{
				boldText: "Clean droppings promptly ",
				regularText: "using safe disinfectants",
			},
			{
				boldText: "Avoid placing ledge decor or ornamentation ",
				regularText: "in vulnerable spots",
			},
			{
				boldText: "Use temporary deterrents ",
				regularText: "(reflective tape, visual distractions) while awaiting professional service",
			},
			{
				regularText:
					"These actions make your property less hospitable, but for full removal, professional <b>bird pest control</b> is the best path.",
			},
		],
	},

	extraContent: {
		backgroundImage: IMAGES.PATTERN_BG,
		title: "Why",
		highlightedText: "Choose Ecovia ",
		extraTitle: "For Bird Pest Control",
		subtitle: "Here's what sets us apart:",
		align: "start" as const,
		titleColor: "white",
		subtitleColor: "white",
		highlightedTextColor: "#b1cf5f",
		infoItems: [
			{
				regularText: "- Locally based in Sydney, with deep understanding of area species",
			},
			{
				regularText: "- Fully licensed, insured and compliant with NSW wildlife regulations",
			},
			{
				regularText: "- Human-first, eco-friendly methods — minimal harm, maximum effect",
			},
			{
				regularText: "- Transparent pricing and process",
			},
			{
				regularText: "- Fast response and reliability",
			},
			{
				regularText: "- Warranty / guarantee on workmanship",
			},
			{
				regularText:
					"When you engage Ecovia, you're not just hiring a contractor — you're getting a trusted partner in maintaining a bird-free environment.",
			},
		],
	},

	footer: {
		backgroundImage: IMAGES.FOOTER_BG,
		heading: "Book Your ",
		highlightedText: "Free Bird ",
		subHeading: "Inspection",
		description:
			"Don't let birds damage your property or risk hygiene issues. <b>Book your free inspection</b> with Ecovia today. Fill out the form below or call us — we'll visit your site, assess the bird issue, and provide a clear, no-obligation quote.",
		showCallCTAOnMobile: true,
	},

	reviews: [
		{
			id: 1,
			ratings: 5,
			review:
				"Ecovia removed a pigeon colony from our attic in Bondi. Their proofing solution and follow-up visits have kept birds away ever since.",
			userImage: "",
			username: "Sarah",
			designation: "Bondi",
		},
		{
			id: 2,
			ratings: 5,
			review:
				"We had ibis nesting on our office rooftop every spring. Ecovia installed discreet netting and deterrents — problem solved.",
			userImage: "",
			username: "Mark",
			designation: "Sutherland Shire",
		},
	],

	faq: [
		{
			id: "bird-safety",
			question: "Is your bird control safe for people, pets and native birds?",
			answer:
				"Yes. We use non-toxic methods and comply with relevant wildlife protection laws. We avoid harmful chemicals and lethal approaches unless strictly necessary and permitted.",
		},
		{
			id: "bird-treatment-duration",
			question: "How long does treatment last?",
			answer:
				"A well-installed proofing system can last many years. Deterrents and maintenance may need refreshes over time depending on weather exposure.",
		},
		{
			id: "bird-return",
			question: "Will birds come back after treatment?",
			answer:
				"If gaps or weak points remain, yes. That's why our monitoring and warranty are crucial — we re-inspect and repair as needed.",
		},
		{
			id: "bird-permit",
			question: "Do I need a permit to remove nests or birds?",
			answer: "In NSW, certain bird species and nests may be protected under legislation. Ecovia handles permit compliance.",
		},
		{
			id: "bird-preparation",
			question: "What preparation do I need before service?",
			answer:
				"Clear pathways, ensure roof access, remove fragile items near treatment zones, and secure pets or occupants during installation.",
		},
		{
			id: "bird-new-droppings",
			question: "What if I see new droppings after service?",
			answer: "Contact us immediately — we'll investigate whether it's new activity or residual residue.",
		},
		{
			id: "bird-cost",
			question: "How is cost determined?",
			answer:
				"Price depends on species, infestation severity, building complexity, height and materials needed. We always quote after inspection.",
		},
	],
} as Partial<PestStudyConfig>;

export default birdPestStudyData;

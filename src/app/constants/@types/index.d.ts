// Union types
type AlignType = "center" | "start";
type ButtonVariant = "primary" | "secondary" | "light";
type ButtonIcon =
	| "phone"
	| "email"
	| "email-secondary"
	| "logo"
	| "google"
	| "facebook"
	| "instagram"
	| "plus"
	| "minus"
	| "minus-primary"
	| "support"
	| "document"
	| "stars"
	| "family"
	| "thumb"
	| "verified-tick"
	| "file"
	| "globe"
	| "next"
	| "vercel"
	| "window";

// Base interfaces
interface InfoItem {
	boldText?: string;
	regularText?: string;
	link?: {
		text: string;
		url: string;
	};
}

interface ProcessItem {
	title: string;
	highlightedText?: string;
}

interface Button {
	variant: ButtonVariant;
	title: string;
	icon: ButtonIcon;
}

// Hero section interface
interface HeroConfig {
	backgroundImage: string;
	heading: string;
	highlightedText: string;
	subHeading: string;
	description: string;
	hideButtonSection: boolean;
}

// Control matters section interface
interface ControlMattersConfig {
	title: string;
	highlightedText: string;
	extraTitle: string;
	subtitle: string;
	align: AlignType;
	imageSrc: string;
	imageAlt: string;
	infoItems: InfoItem[];
}

// Common species section interface
interface CommonSpeciesConfig {
	title: string;
	highlightedText: string;
	extraTitle: string;
	subtitle: string;
	align: AlignType;
	imageSrc: string;
	imageAlt: string;
	isReverse: boolean;
	infoItems: InfoItem[];
}

// Infestation signs section interface
interface InfestationSignsConfig {
	backgroundImage: string;
	title: string;
	highlightedText: string;
	extraTitle: string;
	subtitle: string;
	align: AlignType;
	titleColor: string;
	subtitleColor: string;
	highlightedTextColor: string;
	infoItems: InfoItem[];
}

// Service methods section interface
interface ServiceMethodsConfig {
	title: string;
	highlightedText: string;
	extraTitle: string;
	subtitle: string;
	align: AlignType;
	imageSrc: string;
	imageAlt: string;
	infoItems: InfoItem[];
}

// Process list section interface
interface ProcessListConfig {
	backgroundImage: string;
	title: string;
	highlightedText: string;
	extraTitle: string;
	subtitle: string;
	align: AlignType;
	titleColor: string;
	subtitleColor: string;
	highlightedTextColor: string;
	infoItems: InfoItem[];
}

// DIY tips section interface
interface DiyTipsConfig {
	title: string;
	highlightedText: string;
	extraTitle: string;
	subtitle: string;
	align: AlignType;
	imageSrc: string;
	imageAlt: string;
	isReverse: boolean;
	infoItems: InfoItem[];
}

// Process check section interface
interface ProcessCheckConfig {
	backgroundImage: string;
	title: string;
	highlightedText: string;
	extraTitle: string;
	subtitle: string;
	align: AlignType;
	titleColor: string;
	subtitleColor: string;
	highlightedTextColor: string;
	processItems: ProcessItem[];
	button: Button;
}

// Footer section interface
interface FooterConfig {
	backgroundImage: string;
	heading: string;
	highlightedText: string;
	subHeading: string;
	description: string;
	showCallCTAOnMobile: boolean;
}

// Review interface
interface Review {
	id: number;
	ratings: number;
	review: string;
	userImage: string;
	username: string;
	designation: string;
}

// FAQ interface
interface FAQ {
	id: string;
	question: string;
	answer: string;
}

// Main pest study config interface
interface PestStudyConfig {
	hero: HeroConfig;
	controlMatters: ControlMattersConfig;
	commonSpecies: CommonSpeciesConfig;
	infestationSigns: InfestationSignsConfig;
	serviceMethods: ServiceMethodsConfig;
	processList: ProcessListConfig;
	diyTips: DiyTipsConfig;
	processCheck: ProcessCheckConfig;
	footer: FooterConfig;
	reviews: Review[];
	faq: FAQ[];
}

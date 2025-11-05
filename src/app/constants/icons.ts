export const ICONS = {
	phone: "/icons/phone.svg",
	email: "/icons/email.svg",
	"email-secondary": "/icons/email-secondary.svg",
	logo: "/icons/ecovia-logo.svg",
	google: "/icons/google.svg",
	facebook: "/icons/facebook.svg",
	instagram: "/icons/instagram.svg",
	plus: "/icons/plus.svg",
	minus: "/icons/minus.svg",
	"minus-primary": "/icons/minus-primary.svg",
	support: "/icons/support.svg",
	document: "/icons/document.svg",
	stars: "/icons/stars.svg",
	family: "/icons/family.svg",
	thumb: "/icons/thumb.svg",
	"verified-tick": "/icons/verified-tick.svg",
	file: "/file.svg",
	globe: "/globe.svg",
	next: "/next.svg",
	vercel: "/vercel.svg",
	window: "/window.svg",
	arrow: "/icons/arrow.svg",
} as const;

export type IconName = keyof typeof ICONS;
export type IconPath = (typeof ICONS)[IconName];

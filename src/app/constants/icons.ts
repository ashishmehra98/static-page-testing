export const ICONS = {
	phone: "/icons/phone.svg",
	email: "/icons/email.svg",
	logo: "icons/ecovia-logo.svg",
	file: "/file.svg",
	globe: "/globe.svg",
	next: "/next.svg",
	vercel: "/vercel.svg",
	window: "/window.svg",
} as const;

export type IconName = keyof typeof ICONS;
export type IconPath = (typeof ICONS)[IconName];
